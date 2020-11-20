// Exercice 2 : Les expressions régulières - palindrome [facile]
// Ecrire une fonction javascript qui vérifie si une chaîne de caractères 
// est un palindrome.
// Vérifier si php, Éric notre valet alla te laver ton ciré et 
// javascript se lisent dans les deux sens ( de droite à gauche ou de gauche à droite).





// function showPalin() {
  
//     let palin = prompt("please enter an expression");
//     let palspl = palin.split('');
//     let res = palin.split('').sort().join('');
        
//       if (palspl === res){
        
//         alert("C'est une palindrome");
//     }
//      else {
//          alert("Ce n'est pas un palindrome");
//     }
//     }


function checkPalindrome(str) {

  // find the length of a string
  let len = string.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {

      // check if first and last string are the same letter
      if (string[i] !== string[len - 1 - i]) {
          return 'It is not a palindrome';
      }
  }
  return 'It is a palindrome';
}

// prompt user input
let string = prompt('Enter a string: ');

// call the function
let value = checkPalindrome(string);

alert(value);