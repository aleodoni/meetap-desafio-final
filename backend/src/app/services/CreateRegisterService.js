import { startOfHour, parseISO, isBefore } from 'date-fns';

import Meetup from '../models/Meetup';
import User from '../models/User';
import Registration from '../models/Registration';

import RegistrationMail from '../jobs/RegistrationMail';
import Queue from '../../lib/Queue';

class CreateRegisterService {
  async run({ meetupId, userId }) {
    const meetup = await Meetup.findByPk(meetupId, {
      include: [
        {
          model: User,
          as: 'organizer',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    /**
     * Check if meetup exists
     */
    if (!meetup) {
      throw new Error('Meetup not found.');
    }

    /**
     * Check if meetup was created by the same user
     */
    if (meetup.user_id === userId) {
      throw new Error("Can't register on own meetup.");
    }

    /**
     * Check if meetup already happened
     */
    const meetupDate = startOfHour(parseISO(meetup.date));

    if (isBefore(meetupDate, new Date())) {
      throw new Error("Can't register past meetup.");
    }

    /**
     * Check if user is already registered on this meetup
     */
    const isRegistered = await Registration.findOne({
      where: { user_id: userId, meetup_id: meetupId },
    });

    if (isRegistered) {
      throw new Error('User is already registered on this meetup.');
    }

    /**
     * Check if user is registered on meetup with same date/time
     */
    const notAvailable = await Registration.findOne({
      include: [{ model: Meetup, as: 'meetup' }],
      where: { user_id: userId, '$meetup.date$': meetup.date },
    });
    if (notAvailable) {
      throw new Error('User already registered on another meetup in this day.');
    }

    const registration = await Registration.create({
      meetup_id: meetupId,
      user_id: userId,
    });

    const user = await User.findByPk(userId);

    await Queue.add(RegistrationMail.key, { user, meetup });

    return registration;
  }
}

export default new CreateRegisterService();
