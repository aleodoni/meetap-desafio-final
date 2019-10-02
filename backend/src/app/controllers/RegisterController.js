import CreateRegisterService from '../services/CreateRegisterService';

class RegisterController {
  async store(req, res) {
    const { meetup_id, user_id } = req.body;
    const registration = await CreateRegisterService.run({
      meetupId: meetup_id,
      userId: user_id,
    });

    return res.json(registration);
  }
}

export default new RegisterController();
