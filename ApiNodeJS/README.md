Pourquoi une api(rest) ?

Tous les front end ne requierent pas nécessairement des pages html.

Il existe 3 appli web différentes : 

- Les applications mobiles 
- Les SPA : Single Page Application

MERN Stack : Mongo Express React Node


Création d'un projet Node : 

```
npm init -y
```

Installation de la librairie `express`*

```
npm install express
```

Création d'un fichier `index.js` dans un dossier src : 

```
mkdir src
touch src/index.js
```

Modification du package.json pour ajouter un script de démarrage

```
scripts": {
    "start": "node src/index.js"
  },
```

MongoDB est un système de fbase de données orienté documents cross-plateform.

Une collection est un groupe de documents MongoDB. C'est l'équivalent d'une table dans un système de gestion de base de données. Les collections n'imposent pas de schéma précis.

Les documents présents au sein d'une même collection peuvent avoir des champs différents

Malgré cela, tous les documents d'une même collection sont généralement similaires ou ont un usage similaire.

