// Exercice 4 : L’objet String - classer les lettres dans l'ordre alphabétique [facile]
// Ecrire une fonction javascript qui retourne toutes les lettres d'une chaîne de caractères dans l'ordre alphabétique
// Exemple : développeur => deeloppruvé

let letters = prompt("please enter a word");
let res = letters.split('').sort().join('');
alert(res);