// Assignment Code
var generateBtn = document.querySelector("#generate");

var genNumber = ['0', '1', '2','3','4','5','6','7','8','9']
var genUpperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')]
var genLowerCase = ['abcdefghijklmnopqrstuvwxyz'.split('')]
var genSymbols = [" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ".split("")]


function generatePassword() {
  var userInputs = {
   characterlength: window.prompt("Length of password?"),
   num: window.prompt("numbers?"),
   upp: window.prompt("Uppercase?"),
   low: window.prompt("Lowercase?"),
   symbol: window.prompt("Special Characters?")
  }
  if (num) {
    
  }
  var userChoice = {
    
  }

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
