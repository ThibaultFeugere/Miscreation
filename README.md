# Projet Miscreation
#### Développé en NodeJS

## Sommaire
[Présentation du projet](#presentation-du-projet)

[Installation](#installation)

[Documentation API](#documentation-api)

## Présentation du projet

Miscreation est une application recensant les malformations physiques les plus rares.

Sous la forme d'une interface, l'utilisateur pourra découvrir l'ensemble des malformations enregistrées dans notre bases de données et accéder aux détails de celles-ci.

Par conséquent, il est possible d'ajouter une malformation, mais aussi d'en modifier les données ou même d'en supprimer.

Nous retrouvons cette même logique et ces mêmes possibilités dans la section *Utilisateurs*.

Grâce à nos route `/api/`, toutes les fonctionnalités sont utilisables comme une API, testable par exemple avec Postman.


## Installation

Tout d'abord, il vous faudra cloner le projet, pour obtenir tous les fichiers nécessaires sur votre machine locale :

`git clone https://gitlab.com/thibaultfeugere/miscreation`

Vous pouvez désormais accèder à la racine du projet :

`cd miscreation/app/`

Commencez par générer le fichier `config.json` :

`cp config/config.json.default config/config.json`

Puis modifier les lignes correspondantes afin de configurer la connexion à votre base de données :

```
"username": "<DATABASE_USERNAME>",
"password": "<DATABASE_PASSWORD>",

// selon votre moteur SQL
"dialect": "SQL_LANGUAGE",
```

Désormais, installez les paquets requis :

`npm install`

Vous pouvez maintenant créer la base de données :

`npx sequelize-cli db:create`

*Si le dialect défini dans votre `config.json` est `mariadb` il vous faudra la créer à la main, par exemple dans votre interface PhpMyAdmin*

Créez les tables de la base de données :

`npx sequelize-cli db:migrate`

Puis insérez les données :

`npx sequelize-cli db:seed:all`

Tout est prêt pour découvrir l'application !

Lancez le serveur :

`node app.js`

Dans votre moteur de recherche, accédez à l'adresse :

`http://localhost:1337`

#### Bonne visite :)

## Documentation API

Nous avons écrit la documentation dans le fichier (API.md)[/API.md].
