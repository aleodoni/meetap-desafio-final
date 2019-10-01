import User from '../models/User';

class CreateUserService {
  async run({ name, email, password }) {
    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      throw new Error('User already exists.');
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    return user;
  }
}

export default new CreateUserService();
