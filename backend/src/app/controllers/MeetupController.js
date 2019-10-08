import ListMeetupService from '../services/ListMeetupService';

class MeetupController {
  async index(req, res) {
    const { date, page = 1 } = req.query;

    const meetups = await ListMeetupService.run({ date, page });

    return res.json(meetups);
  }
}

export default new MeetupController();
