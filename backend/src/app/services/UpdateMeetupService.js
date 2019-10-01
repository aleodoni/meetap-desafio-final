import { startOfHour, parseISO, isBefore } from 'date-fns';

import Meetup from '../models/Meetup';
import File from '../models/File';
import bd from '../../database';

class UpdateMeetupService {
  async run({ title, description, place, date, bannerId, userId, meetupId }) {
    const meetup = await Meetup.findByPk(meetupId);

    const oldBannerId = meetup.banner_id;

    /**
     * Verify is the user is the meetup owner
     */
    if (userId !== meetup.user_id) {
      throw new Error("You can't update meetups your're not the owner");
    }

    /**
     * Verify if meetup date is past
     */
    if (isBefore(meetup.date, new Date())) {
      throw new Error("You can't update past meetups");
    }

    /**
     * Verify if date is past date
     */
    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      throw new Error('Past dates are not permitted');
    }

    const transaction = await bd.connection.transaction();

    try {
      await meetup.update(
        {
          title,
          description,
          place,
          date,
          banner_id: bannerId,
        },
        { transaction }
      );

      /**
       * If banner is different, remove old banner from database
       */
      if (bannerId !== oldBannerId) {
        const fileToRemove = await File.findByPk(oldBannerId, { transaction });

        await fileToRemove.destroy({ transaction });
      }

      await transaction.commit();

      return meetup;
    } catch (err) {
      if (transaction) await transaction.rollback();

      throw new Error(err);
    }
  }
}

export default new UpdateMeetupService();
