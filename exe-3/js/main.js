// Exercice 5 : L’objet String - Mettre la première lettre d'un mot en majuscule [facile]
// Ecrire une fonction qui met en majuscule la première lettre de chaque mot d'une phrase
// Exemple : le corbeau et le renard => Le Corbeau Et Le Renard


let letters = prompt("please enter a sentence");
let res = letters.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
alert(res);