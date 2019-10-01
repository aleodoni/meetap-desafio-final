import { isBefore } from 'date-fns';
import bd from '../../database';
import Meetup from '../models/Meetup';
import File from '../models/File';

class DeleteMeetupService {
  async run({ meetupId, userId }) {
    const meetup = await Meetup.findByPk(meetupId);

    const fileId = meetup.banner_id;

    /**
     * Verify is the user is the meetup owner
     */
    if (userId !== meetup.user_id) {
      throw new Error("You can't delete meetups your're not the owner");
    }

    /**
     * Verify if meetup date is past
     */
    if (isBefore(meetup.data_hora, new Date())) {
      throw new Error("You can't delete past meetups");
    }

    const transaction = await bd.connection.transaction();

    try {
      await meetup.destroy({ transaction });

      const fileToDestroy = await File.findByPk(fileId, { transaction });

      await fileToDestroy.destroy({ transaction });

      await transaction.commit();
    } catch (err) {
      if (transaction) await transaction.rollback();

      throw new Error(err);
    }
  }
}

export default new DeleteMeetupService();
