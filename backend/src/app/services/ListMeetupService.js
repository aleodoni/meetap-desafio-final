import { parseISO, startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';

import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class ListMeetupService {
  async run({ date, page }) {
    const parsedDate = parseISO(date);

    const meetup = await Meetup.findAndCountAll({
      where: {
        date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
        },
      },
      order: [['date', 'DESC']],
      limit: 10,
      offset: (page - 1) * 10,
      include: [
        {
          model: User,
          as: 'organizer',
          attributes: ['id', 'name'],
        },
        {
          model: File,
          as: 'banner',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return meetup;
  }
}

export default new ListMeetupService();
