import CreateUserService from '../services/CreateUserService';
import UpdateUserService from '../services/UpdateUserService';

class UserController {
  async store(req, res) {
    const { id, name, email } = await CreateUserService.run(req.body);

    return res.json({ id, name, email });
  }

  async update(req, res) {
    const { name, email, oldPassword, password, confirmPassword } = req.body;
    const { userId } = req;

    const user = await UpdateUserService.run({
      userId,
      name,
      email,
      oldPassword,
      password,
      confirmPassword,
    });

    return res.json({
      userId: user.id,
      name: user.name,
      email: user.email,
    });
  }
}

export default new UserController();
