'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'Maxime',
      email: 'maxime.larrieu@ynov.com',
      password: 'tki',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Thibault',
      email: 'thibault.feugere@ynov.com',
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
