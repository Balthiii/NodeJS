
// 1. Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.

const a = 45;
const b =44;
import { addition} from "./src/utils/exerciceFunction"
console.log(addition(a, b));

// 2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.

const array = [45,235,2,69,48];
import { returnLargeNumber } from "./src/utils/exerciceFunction";
console.log(returnLargeNumber(array))

/*3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères 
dont toutes les voyelles ont été supprimées.*/

const characters = "Sur terre comme au ciel, moi seul mérite d'être vénéré."
import { returnVowelDeleted } from "./src/utils/exerciceFunction";
console.log(returnVowelDeleted(characters))

/*4 Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de 
chaînes de caractères triées par ordre alphabétique.*/

const string = ["y","t","e","u","o","p","j","v","n","w","b","g","z","q","a","m","s","l","r",]
import { returnAlphabeticalOrder } from "./src/utils/exerciceFunction";
console.log(returnAlphabeticalOrder(string))

/*5 Écrivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères
 représentant ce nombre en mots. Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux". */
 
  const number = 78
  import { returnNumberToWords } from "./src/utils/exerciceFunction";
  console.log(returnNumberToWords(number))

  /*6 Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et 
  renvoie un tableau des valeurs de cette propriété dans chaque objet.*/
  const property = "age";
  const user = [
    { nom: 'Balthazar', age: 20},
    { nom: 'Swan', age: 19},
    { nom: 'Micka', age: 24},
];

import { returnObjectPropertyValue } from "./src/utils/exerciceFunction";

console.log( returnObjectPropertyValue(user,property));

// 7 Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant.

const arrayRandomNumber = [5,9,84,629,321,98,326,982,652,74,1,3,566]
import { returnDecreasingNumber } from "./src/utils/exerciceFunction";
console.log(returnDecreasingNumber(arrayRandomNumber))

// 8 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.
const stringUpperCase= "La vie sans musique est tout simplement une erreur, une fatigue, un exil."
import { returnVowelUpperCase } from "./src/utils/exerciceFunction";
console.log(returnVowelUpperCase(stringUpperCase))

//9 Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.

const stringCountVowel = "Quoi qu’il arrive, ne perdez jamais espoir face aux adversités du monde qui vous entoure ! Soyez assez forts pour pouvoir rire de tout, ne vous préoccupez pas du regard des autres."
import { returnCountVowel } from "./src/utils/exerciceFunction";
console.log(returnCountVowel(stringCountVowel))

//10 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules.
const sentences = "Les fous ce sont ceux qui acceptent de vivre comme du bétail."
import { returnConsonentUpperCase } from "./src/utils/exerciceFunction";
console.log(returnConsonentUpperCase(sentences))