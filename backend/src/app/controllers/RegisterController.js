import CreateRegisterService from '../services/CreateRegisterService';
import ListRegisteredService from '../services/ListRegisteredService';

class RegisterController {
  async index(req, res) {
    const { userId } = req;

    const registeredMeetups = await ListRegisteredService.run({ userId });

    return res.json(registeredMeetups);
  }

  async store(req, res) {
    const { meetup_id } = req.body;
    const { userId } = req;

    const registration = await CreateRegisterService.run({
      meetupId: meetup_id,
      userId,
    });

    return res.json(registration);
  }
}

export default new RegisterController();
