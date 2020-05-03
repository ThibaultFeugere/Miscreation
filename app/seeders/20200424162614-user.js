'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'Maxime',
      email: 'maxime.larrieu@ynov.com',
      api_key: (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)),
      password: 'tki',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Thibault',
      email: 'thibault.feugere@ynov.com',
      api_key: (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)),
      password: 'motdepasse',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
