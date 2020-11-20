// Exercice 1 : L’objet String - inverser un nombre [facile]
// Ecrire une fonction javascript qui inverse un nombre.
// Exemple : 2016 => résultat 6102

let num = prompt("please enter a number");
parseInt(num);
let res = num.split('').reverse().join('');
alert(res);