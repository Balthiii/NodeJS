
# Partie 1 : Introduction

## 1.1 Rôle et utilisation de Node.js


Node.js est un environnement d'exécution open source et multiplateforme pour exécuter du code JavaScrip en dehors d'un navigateur Web. Il est construit sur le moteur JavaScript V8 de Chrome. 

## 1.2 Qu'est ce que Node.js

Node.js n'est pas un langage de programmation, mais plutôt un environnement d'exécution pour le JavaScript côté serveur. Il utilise le moteur V8 de Google Chrome.

## 1.3 Installation de Node.js
Une fois l'installation de Node.js effectué vous pouvez vérifier que tous fonctionne correctemetn en executant la commande dans un Terminal : 
```
node --version
```
## 1.4 Installation d'une dépendance

Pour installer une dépendance il faut utiliser la commande suivante : 

```
npm install <nom-de-la-dependance>
```
Vous devez vous assurer au prealable que vous êtes dans le repertoire de votre projet

Les dépendances installées seront ajoutées dans le fichier package 'package.json' sous la section 'dependencies'.

Pour une dependance de developpement vous pouvez utiliser la commande suivante : 
```
npm install <nom-de-la-dependance> --save-dev
```
Pour installer nodemon : 
```
npm install nodemon
```
# Partie 2 : Rafraîchissement de JS

## 2.1 let et const

let et const sont deux manières de déclarer des variables en JavaScript, introduites dans ES6. let permet de déclarer des variables dont la valeur peut changer, tandis que const est utilisé pour des variables dont la valeur ne changera jamais (constantes).

```
const test = "Hello Word!";

let test2 = "Hello World!"; // = designe l'opérateur d'assignation(affectation)

var test3 = "Hello World!"; // var est une variable globale(ne pas utiliser)

```

## 2.2 Les fonctions 

```
//La syntaxe de base 

function auCarre(x) {
    return x * y;
}

// La syntaxe fléchée 

const auCarre = (x) => {
    return x * y; 
}

```
## 2.3 Les tableaux 

pour créer un tableau par exemple :

```
const fruits = ["apple","banana","orange"];
```

Pour ajouter un élément dans un tableau : 
```
fruits.push("nomElement");
```

## 2.4 Les objets

La syntaxe pour créer un objet : 

```
const utilisateur = {
    firstname:"Balthazar",
    lastname : "Vaillant",
    age : 19 ,
    isStudent: true,
    hobbies : ["guitar","programming","gaming"],
};
```
La commande pour appeller un élement d'un objet : 

```
console.log(bal.firstname) //Balthazar
console.log(bal.hobbies[1]) //Progaming
```

## 2.5 Modules

En JS, un module est un morceau de code réutilisable qui peut être exporté d'un fichier et importé dans un autre fichier, permettant ainsi de partager des variables, des fonctions, des classes, etc..., entre différents fichiers. Cela aide à organiser et à mantenir le code, surtout dans les grands projets.

Il existe deux types de syntaxes pour les imports/exports en JS : 
- la syntaxe CommonJS (utilisé dans node.js)
- la syntaxe ES6+ (utilisée dans les navigateurs), on parle du format ESM (ECMAScript Modules)

# Partie 3 : RegExp

Les expressions régulières, également appelées "RegExp" ou "regex", sont des motifs de recherche flexibles permettant de décrire un ensemble de chaînes de caractères selon certaines règles. Elles sont utilisées pour effectuer des opérations de recherche, de correspondance et de remplacement dans des chaînes de caractères.

## Callback
Qu'est ce qu'un callback ? *

C'est une fonction implémenté en paramètre dans une fonction

## Middleware

Qu'est ce qu'une route ? 

Une route est l'association d'une méthode HTTP et une URL.

Qu'est ce qu'une requête middleware pour Express ?

 
