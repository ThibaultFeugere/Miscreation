# API

Notre API RESTful est relativement simple à comprendre mais voici quelques détails. Nous allons vous montrer les possibilités ainsi que des exemples de résultat.

## Sommaire

- [Distortion](#distortion)
- [User](#user)

## Distortion

La partie Distortion concerne les déformations ajoutées sur le base de données.

### GET - Show all

Pour accéder à toutes les déformations, vous pouvez effectuer cette commande :
`http://localhost:1337/api/distortion/show`

Exemple de résultat :

```json
[
    {
        "id": 1,
        "title": "Le syndrome de Protée",
        "description": "Cette maladie génétique rare, probablement due à une mutation du gène AKT1....",
        "release_date": 1979,
        "image": "https://img-4.linternaute.com/47yozMH2tauYv9SM_zExwej4Iqc=/1240x/smart/fe3e2092a43d4c0983b43c1251ea78be/ccmcms-linternaute/10095795-aairfan-alicaters-news-agencysipa.jpg",
        "finder": "Michael Cohen",
        "createdAt": "2020-05-01T14:06:27.000Z",
        "updatedAt": "2020-05-01T14:06:27.000Z"
    },
    {
        "id": 2,
        "title": "L'enchondromatose",
        "description": "Cette maladie rare se caractérise par la présence de tumeurs intra-osseuses...",
        "release_date": 1899,
        "image": "https://resize1.prod.docfr.doc-media.fr/r/1010,,forcex/img/var/doctissimo/storage/images/fr/www/sante/diaporamas/maladies-deforment-corps/maladie-d-ollier-enchondromatose/3095696-1-fre-FR/La-maladie-d-Ollier-ou-enchondromatose.jpg",
        "finder": "Louis Leopold Ollier",
        "createdAt": "2020-05-01T14:06:27.000Z",
        "updatedAt": "2020-05-01T14:06:27.000Z"
    }
]
```

### GET - Show one

Pour accéder à une déformation précise, il suffit de rajouter l'ID de la déformation derrière `/show/` ce qui donne donc la commande :
`http://localhost:1337/api/distortion/show/:id`

Exemple de résultat avec l'ID 1 : ``http://localhost:1337/api/distortion/show/1``

```json
{
    "id": 1,
    "title": "Le syndrome de Protée",
    "description": "Cette maladie génétique rare, probablement due à une mutation du gène AKT1....",
    "release_date": 1979,
    "image": "https://img-4.linternaute.com/47yozMH2tauYv9SM_zExwej4Iqc=/1240x/smart/fe3e2092a43d4c0983b43c1251ea78be/ccmcms-linternaute/10095795-aairfan-alicaters-news-agencysipa.jpg",
    "finder": "Michael Cohen",
    "createdAt": "2020-05-01T14:06:27.000Z",
    "updatedAt": "2020-05-01T14:06:27.000Z"
}
```

### POST - Create

A l'aide de l'API, vous pouvez créer une déformation à l'aide de la commande : 
`http://localhost:1337/api/distortion/create`

Si vous utilisez Postman, sélectionnez la méthode POST puis dans body, renseignez les clés :

- title (text)
- description (text)
- release_date (integer)
- image (url)
- finder (text)

Si tous les champs sont renseignés, vous aurez comme résultat la déformation que vous venez d'ajouter en JSON, sinon vous aurez un message : ERROR.

### PUT - Update

Vous pouvez update une déformation avec pour méthode PUT et la commande : 
`http://localhost:1337/api/distortion/update/:ID`

Renseignez de nouveau les clés :

- title (text)
- description (text)
- release_date (integer)
- image (url)
- finder (text)

Si tout se passe mal, vous recevrez comme message ERROR, si tout se passe bien voilà le résultat :

```json
[
    1
]
```

### DELETE - Delete

Vous pouvez supprimer une malformation avec la commande :
`http://localhost:1337/api/distortion/delete/:ID`

Si la suppression a eu lieu, vous recevez 1 (True) sinon si la suppression n'a pas eu lieu, vous recevez 0 (False).


## User

La partie User dispose elle aussi d'une API.

### GET - All users

Pour accéder à la liste des tous les utilisateurs, il suffit d'effectuer la commande :
`http://localhost:1337/api/users`

Exemple de résultat :

```json
[
    {
        "id": 1,
        "name": "Maxime",
        "email": "maxime.larrieu@ynov.com",
        "createdAt": "2020-05-01T14:06:27.000Z",
        "updatedAt": "2020-05-01T14:06:27.000Z"
    },
    {
        "id": 2,
        "name": "Thibault",
        "email": "thibault.feugere@ynov.com",
        "createdAt": "2020-05-01T14:06:27.000Z",
        "updatedAt": "2020-05-01T14:06:27.000Z"
    }
]
```

### GET - One user

Vous pouvez obtenir les information d'un utilisateur précis à l'aide de son ID avec la commande :
`http://localhost:1337/api/user/show/:ID`

Exemple de résultat avec la commande : `http://localhost:1337/api/user/show/1`

```json
{
    "id": 1,
    "name": "Maxime",
    "email": "maxime.larrieu@ynov.com",
    "createdAt": "2020-05-01T14:06:27.000Z",
    "updatedAt": "2020-05-01T14:06:27.000Z"
}
```
