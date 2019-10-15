import CreateRegisterService from '../services/CreateRegisterService';
import ListRegisteredService from '../services/ListRegisteredService';
import DeleteRegisterService from '../services/DeleteRegisterService';

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

  async delete(req, res) {
    const { id } = req.body;
    const { userId } = req;

    const registration = await DeleteRegisterService.run({
      id,
      userId,
    });

    return res.json(registration);
  }
}

export default new RegisterController();
