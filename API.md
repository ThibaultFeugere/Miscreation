# API

Notre API RESTful est relativement simple à comprendre mais voici quelques détails. Nous allons vous montrer les possibilités ainsi que des exemples de résultat.

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
`http://localhost:1337/api/distortion/show/1`

Exemple de résultat : 

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


