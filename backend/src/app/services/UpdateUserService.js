import User from '../models/User';

class UpdateUserService {
  async run({ userId, name, email, oldPassword, password, confirmPassword }) {
    const user = await User.findByPk(userId);

    if (email && email !== user.email) {
      const userExists = await User.findOne({ where: { email } });
      if (userExists) {
        throw new Error('User already exists.');
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      throw new Error('Password does not match.');
    }

    const userUpdated = await user.update({
      userId,
      name,
      email,
      oldPassword,
      password,
      confirmPassword,
    });

    return userUpdated;
  }
}

export default new UpdateUserService();
