'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Distortions', [
      {
        title: 'Le syndrome de Protée',
        description: "Cette maladie génétique rare, probablement due à une mutation du gène AKT1....",
        release_date: 1979,
        image: 'https://img-4.linternaute.com/47yozMH2tauYv9SM_zExwej4Iqc=/1240x/smart/fe3e2092a43d4c0983b43c1251ea78be/ccmcms-linternaute/10095795-aairfan-alicaters-news-agencysipa.jpg',
        finder: 'Michael Cohen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "L'enchondromatose",
        description: "Cette maladie rare se caractérise par la présence de tumeurs intra-osseuses...",
        release_date: 1899,
        image: 'https://resize1.prod.docfr.doc-media.fr/r/1010,,forcex/img/var/doctissimo/storage/images/fr/www/sante/diaporamas/maladies-deforment-corps/maladie-d-ollier-enchondromatose/3095696-1-fre-FR/La-maladie-d-Ollier-ou-enchondromatose.jpg',
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
