const bcrypt = require('bcryptjs');
const faker = require('faker/locale/pt_BR');

async function genRandomUsers() {
  const tot = Array(5).fill();
  const password = await bcrypt.hash('123456', 8);

  const users = tot.map(() => {
    return {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password_hash: password,
      created_at: new Date(),
      updated_at: new Date(),
    };
  });
  return users;
}

module.exports = {
  up: async queryInterface => {
    return queryInterface.bulkInsert('users', await genRandomUsers(), {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
