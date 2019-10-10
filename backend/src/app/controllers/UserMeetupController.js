import CreateMeetupService from '../services/CreateMeetupService';
import UpdateMeetupService from '../services/UpdateMeetupService';
import DeleteMeetupService from '../services/DeleteMeetupService';
import ListUserMeetupService from '../services/ListUserMeetupService';

class MeetupController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const { userId } = req;
    const { id } = req.params;

    const meetups = await ListUserMeetupService.run({ page, userId, id });

    return res.json(meetups);
  }

  async store(req, res) {
    const { title, description, place, date, banner_id } = req.body;
    const { userId } = req;

    const meetup = await CreateMeetupService.run({
      title,
      description,
      place,
      date,
      bannerId: banner_id,
      userId,
    });

    return res.json(meetup);
  }

  async update(req, res) {
    const meetupId = req.params.id;

    const { title, description, place, date, banner_id } = req.body;

    const { userId } = req;

    const meetup = await UpdateMeetupService.run({
      title,
      description,
      place,
      date,
      bannerId: banner_id,
      userId,
      meetupId,
    });

    return res.json(meetup);
  }

  async delete(req, res) {
    const meetupId = req.params.id;

    const { userId } = req;

    await DeleteMeetupService.run({ meetupId, userId });

    return res.send();
  }

  // async index(req, res) {
  //   const { page = 1 } = req.query;

  //   const meetups = await Meetup.findAll({
  //     where: { user_id: req.userId },
  //     order: ['date'],
  //     limit: 20,
  //     offset: (page - 1) * 20,
  //     attributes: ['id', 'title', 'description', 'place', 'date'],
  //     include: [
  //       {
  //         model: User,
  //         as: 'organizer',
  //         attributes: ['id', 'name'],
  //       },
  //       {
  //         model: File,
  //         as: 'banner',
  //         attributes: ['id', 'path', 'url'],
  //       },
  //     ],
  //   });

  //   return res.json(meetups);
  // }
}

export default new MeetupController();
