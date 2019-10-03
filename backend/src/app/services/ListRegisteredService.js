import { Op } from 'sequelize';

import Meetup from '../models/Meetup';
import Registration from '../models/Registration';

class ListRegisteredService {
  async run({ userId }) {
    const today = new Date();

    const registeredMeetups = await Registration.findAll({
      where: {
        user_id: userId,
      },
      attributes: ['id', 'user_id'],
      order: [['meetup', 'date']],
      include: [
        {
          model: Meetup,
          as: 'meetup',
          attributes: ['id', 'title', 'date'],
          where: {
            date: {
              [Op.gte]: today,
            },
          },
        },
      ],
    });

    return registeredMeetups;
  }
}

export default new ListRegisteredService();
