import Meetup from '../models/Meetup';
import File from '../models/File';

class ListUserMeetupService {
  async run({ page, userId, id }) {
    let meetups;
    if (id) {
      meetups = await Meetup.findOne({
        where: {
          id,
          user_id: userId,
        },
        include: [
          {
            model: File,
            as: 'banner',
            attributes: ['id', 'path', 'url'],
          },
        ],
      });
    } else {
      meetups = await Meetup.findAll({
        where: {
          user_id: userId,
        },
        order: [['date', 'DESC']],
        limit: 10,
        offset: (page - 1) * 10,
        include: [
          {
            model: File,
            as: 'banner',
            attributes: ['id', 'path', 'url'],
          },
        ],
      });
    }
    return meetups || [];
  }
}

export default new ListUserMeetupService();
