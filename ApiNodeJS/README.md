# API Pokémon

Ce projet est une API créée avec Node.js. Elle permet aux utilisateurs de gérer une collection de Pokémons. Elle offre des fonctionnalités d'authentification, permettant aux utilisateurs de s'inscrire et de se connecter, ainsi que des fonctionnalités pour créer, récupérer, mettre à jour et supprimer des Pokémons.
Grâce à cette API il serait possible par exemple de développer le début d'une application mobile de collection de Pokémon : Les utilisateurs pourraient s'inscrire, se connecter, et gérer leur collection de Pokémon directement depuis leur téléphone.

## Installation

1. Clonez ce dépôt sur votre machine locale.
2. Naviguez jusqu'au répertoire du projet dans votre terminal : ./NodeJS/ApiNodeJS
3. Renommez le fichier `.env.example` en `.env` et mettez à jour les variables d'environnement selon votre configuration.Vous devrez fournir votre propre chaîne de connexion MongoDB pour `MONGO_STRING`.
4. Exécutez `npm install`.

## Utilisation

Pour démarrer le serveur, exécutez `npm run dev` dans le répertoire du projet. Le serveur sera lancé sur `http://localhost:3000`.

## Dépendances
    "bcryptjs": "2.4.3"
    "dotenv": "16.4.5"
    "esm": "3.2.25"
    "express": "4.19.2"
    "express-validator": "7.0.1"
    "jsonwebtoken": "9.0.2"
    "mongoose": "8.3.1"
    "multer": "1.4.5-lts.1"
    "swagger-jsdoc": "6.2.8"
    "swagger-ui-express": "5.0.0"

## Routes

- POST /auth/signup : Inscription d'un nouvel utilisateur.
- POST /auth/signin : Connexion d'un utilisateur.
- GET /pokemon : Récupérer tous les Pokémons.
- POST /pokemon : Créer un nouveau Pokémon.
- GET /pokemon/:id : Récupérer un Pokémon spécifique par ID.
- PUT /pokemon/:id : Mettre à jour un Pokémon spécifique par ID.
- DELETE /pokemon/:id : Supprimer un Pokémon spécifique par ID.
- POST /uploads/image : Upload d'une image

## Documentation

Une documentation Swagger de l'API est disponible. Vous pouvez y accéder en naviguant vers `http://localhost:3000/api-docs/` après avoir démarré le serveur. Cette documentation fournit des informations détaillées sur les différentes routes de l'API. De plus, vous pouvez lancer directement les requêtes à partir de cette interface afin de tester l'API (Sauf pour l'upload d'image qui sera à faire sur POSTMAN pa exemple).

## Lancement des test

Ce projet utilise Jest et Supertest pour les tests. Pour lancer les tests, exécutez la commande suivante dans votre terminal :

```bash
npm run test
```
## Auteurs

Balthazar VAILLANT