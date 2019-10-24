const dateFns = require('date-fns');

module.exports = {
  up: async queryInterface => {
    return queryInterface.bulkInsert(
      'meetups',
      [
        {
          title: 'Conhecendo Cacupé',
          description:
            'Conhecendo o bairro Cacupé.\nOs pontos turísticos, as suas peculiaridades, etc.',
          place: 'CESC Cacupé, Florianópolis',
          date: dateFns.parseISO('2019-11-02 12:00:00+00'),
          banner_id: 1,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Caiaque no Mar',
          description:
            'Como utilizar o caiaque no mar.\nTécnicas de remo, segurança, etc.',
          place: 'Lagoa da Conceição, Florianópolis',
          date: dateFns.parseISO('2019-11-03 13:00:00+00'),
          banner_id: 2,
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Pesca da Tainha',
          description:
            'Para quem quer conhecer melhor a pesca da tainha no litoral Catarinense.\nHistória, curiosidades, particularidades.',
          place: 'Centro Sul - Centro de Convenções de Florianópolis',
          date: dateFns.parseISO('2019-11-04 21:00:00+00'),
          banner_id: 3,
          user_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('meetups', null, {});
  },
};
