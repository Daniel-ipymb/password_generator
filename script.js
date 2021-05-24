// Assignment Code
var generateBtn = document.querySelector("#generate");

var genNumber = "0123456789".split("")
var genUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var genLowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var genSymbols =  "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("")



function generatePassword() {
  var finalPasscode = []
  var passcode = []
  var userInputs = {
   characterlength: window.prompt("Password length (8~128)?"),
   num: window.confirm("numbers?"),
   upp: window.confirm("Uppercase?"),
   low: window.confirm("Lowercase?"),
   symbol: window.confirm("Special Characters?")
  }
  if (userInputs.characterlength < 8 || userInputs.characterlength >128) {
    console.log(userInputs.characterlength)
  return;
  }
  if (userInputs.num) {
    passcode = passcode.concat(genNumber)
    console.log(userInputs.num)
  }
  if (userInputs.upp) {
    passcode = passcode.concat(genUpperCase)
    console.log(userInputs.upp)
  }
  if (userInputs.low) {
    passcode = passcode.concat(genLowerCase)
    console.log(userInputs.low)
  }
  if (userInputs.symbol) {
    passcode = passcode.concat(genSymbols)
    console.log(userInputs.symbol)
  }
  console.log(passcode)


  for (i = 0 ; i < userInputs.characterlength; i++) {
    
    var randIndex = Math.floor(Math.random() * passcode.length);
    var randElement = passcode[randIndex]
    finalPasscode.push(randElement)
    console.log(finalPasscode)
  }
  
  return finalPasscode.join("")  
  

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  
