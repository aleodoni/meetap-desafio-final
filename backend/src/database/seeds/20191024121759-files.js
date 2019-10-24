module.exports = {
  up: async queryInterface => {
    return queryInterface.bulkInsert(
      'files',
      [
        {
          name: 'wp4201650.jpg',
          path: 'd2aba4b647322740637db84358582ba4.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'IMG_9870-768x512.jpg',
          path: '24c84744f6dcaf561e5c7a4e3d2d6b2c.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'wp4201660.jpg',
          path: '5533e072e0f78d5cc97548c027a45503.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('files', null, {});
  },
};
