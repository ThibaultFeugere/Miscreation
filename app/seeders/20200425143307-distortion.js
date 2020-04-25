'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Distortions', [
      {
        title: 'Le syndrome de Protée',
        description: "Cette maladie génétique rare, probablement due à une mutation du gène AKT1....",
        release_date: 1979,
        image: './public/image/protee.jpg',
        finder: 'Michael Cohen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "L'enchondromatose",
        description: "Cette maladie rare se caractérise par la présence de tumeurs intra-osseuses...",
        release_date: 1899,
        image: './public/image/enchondro.jpg',
        finder: 'Louis Leopold Ollier',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Distortions', null, {})
  }
};
