import faker from 'faker';
import { factory } from 'factory-girl';

import User from '../../src/app/models/User';

factory.define('User', User, {
  username: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  password_hash: faker.internet.password(),
});

export default factory;
