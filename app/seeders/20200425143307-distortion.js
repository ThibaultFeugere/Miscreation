'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Distortions', [{
        title: 'Le syndrome de Protée',
        description: "Cette maladie génétique rare, probablement due à une mutation du gène AKT1, se manifeste sous la forme d'une croissance asymétrique des membres (mains, pieds), des organes, des anomalies vertébrales ainsi qu'un développement asymétrique des muscles et des os. Ce syndrome a été identifié pour la première fois en 1979 par Michael Cohen. Les personnes concernées présentes des risques accrus de mort subite, d'anomalies du système nerveux central, de tumeurs et d'autres maladies.",
        release_date: 1979,
        image: 'https://resize2.prod.docfr.doc-media.fr/r/1010,,forcex/img/var/doctissimo/storage/images/fr/www/sante/diaporamas/maladies-deforment-corps/syndrome-de-protee/3095660-1-fre-FR/Le-syndrome-de-Protee.jpg',
        finder: 'Michael Cohen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "L'enchondromatose",
        description: "Cette maladie rare se caractérise par la présence de tumeurs intra-osseuses cartilagineuses créant notamment des déformations du squelette et des asymétries de longueurs des membres (jambes, mains...). Elle apparaît généralement dans l'enfant avant l'âge de 10 ans. Dans de nombreux cas, un seul côté du corps est touché.",
        release_date: 1899,
        image: 'https://resize1.prod.docfr.doc-media.fr/r/1010,,forcex/img/var/doctissimo/storage/images/fr/www/sante/diaporamas/maladies-deforment-corps/maladie-d-ollier-enchondromatose/3095696-1-fre-FR/La-maladie-d-Ollier-ou-enchondromatose.jpg',
        finder: 'Louis Leopold Ollier',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "L'acromégalie",
        description: "Cette maladie se présente sous la forme d'une croissance exagérée du visage et des extrémités lorsqu'elle se manifeste. Une sécrétion excessive d'hormones de croissance semble en être l'origine. Cet excès présente des effets dommageables pour d'autres organes(foie, thyroides, coeur,...). Les risques de diabètes sont également plus élevés.",
        release_date: 1886,
        image: 'https://resize1.prod.docfr.doc-media.fr/r/1010,,forcex/img/var/doctissimo/storage/images/fr/www/sante/diaporamas/maladies-deforment-corps/acromegalie-maladie-de-pierre-marie/3095840-1-fre-FR/L-acromegalie-ou-la-maladie-de-Pierre-Marie.jpg',
        finder: 'Pierre Marie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "L'épidermodysplasie",
        description: "Cette maladie génétique très rare est due à une sensibilité accrue des tissus cutanés au papillomavirus. La personne qui en souffre voit se développer des macules squameuses et des papules, essentiellement au niveau des mains et des pieds, qui peuvent évoluer de manière très impressionnante. Ces verrues prennent l'aspect d'écorce, c'est pourquoi cette maladie est aussi appelée la maladie de l'homme-arbre. Les troubles apparaissent généralement à l'adolescence.",
        release_date: 1916,
        image: 'https://resize.prod.docfr.doc-media.fr/r/1010,,forcex/img/var/doctissimo/storage/images/fr/www/sante/diaporamas/maladies-deforment-corps/epidermodysplasie-verruciforme/3096020-1-fre-FR/L-epidermodysplasie-verruciforme.jpg',
        finder: 'Felix Lewandowsky',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Distortions', null, {})
  }
};