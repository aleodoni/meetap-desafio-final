import { isAfter } from 'date-fns';
import Registration from '../models/Registration';
import Meetup from '../models/Meetup';
// import File from '../models/File';

class DeleteRegistrationService {
  async run({ id, userId }) {
    const registration = await Registration.findByPk(id, {
      include: [
        {
          model: Meetup,
          as: 'meetup',
          attributes: ['id', 'date'],
        },
      ],
    });

    /**
     * Verify is the user is the registration owner
     */
    if (userId !== registration.user_id) {
      throw new Error("You can't cancel registrations your're not the owner");
    }

    /**
     * Verify if meetup date is past
     */
    if (isAfter(registration.meetup.date, new Date())) {
      throw new Error("You can't cancel registration on past meetups");
    }

    try {
      await registration.destroy();
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new DeleteRegistrationService();
