import { isBefore } from 'date-fns';
import bd from '../../database';
import Meetup from '../models/Meetup';

class DeleteMeetupService {
  async run({ meetupId, userId }) {
    const meetup = await Meetup.findByPk(meetupId);

    /**
     * Verify is the user is the meetup owner
     */
    if (userId !== meetup.user_id) {
      throw new Error("You can't delete meetups your're not the owner");
    }

    /**
     * Verify if meetup date is past
     */
    if (isBefore(meetup.date, new Date())) {
      throw new Error("You can't delete past meetups");
    }

    const transaction = await bd.connection.transaction();

    try {
      await meetup.destroy({ transaction });

      await transaction.commit();
    } catch (err) {
      if (transaction) await transaction.rollback();

      throw new Error(err);
    }
  }
}

export default new DeleteMeetupService();
