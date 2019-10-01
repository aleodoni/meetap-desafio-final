import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

import User from '../models/User';

class CreateSessionService {
  async run({ email, password }) {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error('User not found.');
    }

    if (!(await user.checkPassword(password))) {
      throw new Error('Password does not match.');
    }

    const { id, name } = user;

    return {
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    };
  }
}

export default new CreateSessionService();
