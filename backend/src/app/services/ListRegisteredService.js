import { Op } from 'sequelize';

import Meetup from '../models/Meetup';
import File from '../models/File';
import User from '../models/User';
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
          model: User,
          as: 'registered',
          attributes: ['id', 'name'],
        },
        {
          model: Meetup,
          as: 'meetup',
          attributes: ['id', 'title', 'date', 'place'],
          where: {
            date: {
              [Op.gte]: today,
            },
          },
          include: [
            {
              model: File,
              as: 'banner',
              attributes: ['id', 'path', 'url'],
            },
            {
              model: User,
              as: 'organizer',
              attributes: ['id', 'name'],
            },
          ],
        },
      ],
    });

    return registeredMeetups;
  }
}

export default new ListRegisteredService();
