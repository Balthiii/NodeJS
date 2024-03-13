//Importation de toutes les fonctions de l'exercice sur les fonctions.

import { addition, returnLargeNumber, returnVowelDeleted, returnAlphabeticalOrder, returnNumberToWords, returnObjectPropertyValue,
returnDecreasingNumber, returnVowelUpperCase,returnCountVowel,returnConsonentUpperCase} from "./src/utils/exerciceFunction"


// 1. Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.

const a = 45;
const b =44;
console.log(addition(a, b));

// 2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.

const array = [45,235,2,69,48];
console.log(returnLargeNumber(array))

/*3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères 
dont toutes les voyelles ont été supprimées.*/


const characters = "Sur terre comme au ciel, moi seul mérite d'être vénéré."
console.log(returnVowelDeleted(characters))

/*4 Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de 
chaînes de caractères triées par ordre alphabétique.*/

const string = ["y","t","e","u","o","p","j","v","n","w","b","g","z","q","a","m","s","l","r",]
console.log(returnAlphabeticalOrder(string))

/*5 Écrivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères
 représentant ce nombre en mots. Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux". */
 
  const number = 78
  console.log(returnNumberToWords(number))

  /*6 Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et 
  renvoie un tableau des valeurs de cette propriété dans chaque objet.*/
  const property = "age";
  const user = [
    { nom: 'Balthazar', age: 20},
    { nom: 'Swan', age: 19},
    { nom: 'Micka', age: 24},
];
console.log( returnObjectPropertyValue(user,property));

// 7 Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant.

const arrayRandomNumber = [5,9,84,629,321,98,326,982,652,74,1,3,566]
console.log(returnDecreasingNumber(arrayRandomNumber))

// 8 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.
const stringUpperCase= "La vie sans musique est tout simplement une erreur, une fatigue, un exil."
console.log(returnVowelUpperCase(stringUpperCase))

//9 Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.

const stringCountVowel = "Quoi qu’il arrive, ne perdez jamais espoir face aux adversités du monde qui vous entoure ! Soyez assez forts pour pouvoir rire de tout, ne vous préoccupez pas du regard des autres."
console.log(returnCountVowel(stringCountVowel))

//10 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules.
const sentences = "Les fous ce sont ceux qui acceptent de vivre comme du bétail."
console.log(returnConsonentUpperCase(sentences))

//Importation de toutes les fonctions de l'exercice sur les tableaux 

import { displayArray, displayFirstDayWeek,sumArray,arrayAddFruit,NoteAverage,SearchBird } from "./src/utils/exerciceArray.js";

//1 Créez un tableau contenant les nombres de 1 à 10. Écrivez un programme qui affiche chaque élément du tableau à la console.

const tableauNombre = displayArray()
tableauNombre.forEach(function(nombre){
  console.log(nombre)
})

//2 Créez un tableau contenant les jours de la semaine. Écrivez un programme qui affiche le premier jour de la semaine à la console.
const arrayWeek = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]
console.log(displayFirstDayWeek(arrayWeek))

/*3 Créez un tableau contenant les nombres pairs de 2 à 10. Écrivez un programme 
qui calcule la somme des nombres du tableau et l'affiche à la console.*/
const arrayPairNumber = [2,4,6,8,10]
console.log(sumArray(arrayPairNumber))

/*4 Créez un tableau contenant les noms de cinq fruits. Écrivez un programme 
qui ajoute un sixième fruit à la fin du tableau et affiche le tableau complet à la console.*/

const arrayFruits = ["banane","fraise","cerise","kiwi","orange"]
console.log(arrayAddFruit(arrayFruits))

/*5 Créez un tableau contenant les notes de cinq étudiants. Écrivez un programme qui calcule 
la moyenne des notes et l'affiche à la console.*/

const arrayNote = [14.5,17,12,7,10.5]
console.log(NoteAverage(arrayNote))

/*6 Créez un tableau contenant des noms d'oiseaux. Écrivez un programme qui recherche si un nom 
spécifique d'oiseau est présent dans le tableau.*/
const arrayBird = ["Aigle","Alouette","Pirolle","Cygne","Rossignol"]
const bird = "Pirolle"
console.log(SearchBird(arrayBird,bird))

//7 Créez un tableau contenant des noms de pays. Écrivez un programme qui trie le tableau par ordre alphabétique et l'affiche à la console.

//8 Créez un tableau contenant les noms des mois de l'année. Écrivez un programme qui affiche le troisième élément du tableau.

//9 Créez un tableau contenant des nombres aléatoires. Écrivez un programme qui calcule la valeur minimale et la valeur maximale du tableau et les affiche à la console.

//10 Créez un tableau contenant des phrases. Écrivez un programme qui cherche la phrase la plus longue du tableau et l'affiche à la console.