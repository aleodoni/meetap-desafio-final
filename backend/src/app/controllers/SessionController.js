import CreateSessionService from '../services/CreateSessionService';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await CreateSessionService.run({ email, password });

    return res.json(user);
  }
}

export default new SessionController();
