// Assignment Code
var generateBtn = document.querySelector("#generate");

// list out arrays to be used in the generator
var specialArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", ".", ",", "~"];
var numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



// confirmation prompts
function generatePassword() {
  var confirmLength = window.prompt("How many characters would you like your password to contain? ");

  while (confirmLength < 8 || confirmLength > 128) {
    alert("Password must be between 8-128 characters. Try again! ");
    var confirmLength = window.prompt("How many characters would you like your password to contain? ");
  }

  var confirmSpecial = confirm("Click OK to confirm including special charaters");
  var confirmNumbers = confirm("Click OK to confirm including numeric charaters");
  var confirmLowerCase = confirm("Click OK to confirm including lowercase charaters");
  var confirmUpperCase = confirm("Click OK to confirm including uppercase charaters");

  // Validation alert to make sure user atleast chooses one character type
  while (confirmSpecial == false && confirmNumbers === false && confirmLowerCase === false && confirmUpperCase === false) {
    alert("You must have one selected character, Try again");

    confirmSpecial = confirm("Click OK to confirm including special charaters");
    confirmNumbers = confirm("Click OK to confirm including numeric charaters");
    confirmLowerCase = confirm("Click OK to confirm including lowercase charaters");
    confirmUpperCase = confirm("Click OK to confirm including uppercase charaters");
  }

}

function Options ()
{
  specialArr = confirmSpecial
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


