import { isAfter } from 'date-fns';
import Registration from '../models/Registration';
import bd from '../../database';
import Meetup from '../models/Meetup';
// import File from '../models/File';

class DeleteRegistrationService {
  async run({ id, userId }) {
    const registration = await Registration.findByPk(id, {
      include: [
        {
          model: Meetup,
          as: 'meetup',
          attributes: ['id', 'title', 'date', 'place'],
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
    if (isAfter(new Date(), registration.meetup.date)) {
      throw new Error("You can't cancel registration on past meetups");
    }

    const transaction = await bd.connection.transaction();
    try {
      await registration.destroy({ transaction });
      await transaction.commit();
    } catch (err) {
      if (transaction) await transaction.rollback();
      throw new Error(err);
    }
  }
}

export default new DeleteRegistrationService();
