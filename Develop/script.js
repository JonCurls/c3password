// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;


  // prompt: How many chars
  // confirm: special chars Y/N
  // confirm: numeric Y/N
  // confirm: lowercase Y/N
  // confirm: uppercase Y/N
  const upperCaseSet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const lowerCaseSet = "abcdefhijklmnopqrstuvwxyz";
  const numericSet = "1234567890";
  const specCharsSet = "!@#$%^&*()_+=-";


//Random Generator function
  var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
  }



  var getLength = function () {
    var length = "";
    while (length === "" || length === null || length < 8 || length > 128) {
      length = prompt("Enter length of password (between 8 - 128 characters)");
    };
    console.log("Your password length is " + length);
    return length;
  };

  var upperChoice = function () {
    var confirmUpper = window.confirm("Would you like UPPERCASE letters?");
    return confirmUpper;
  };
  var lowerChoice = function () {
    var confirmlower = window.confirm("Would you like lowercase letters?");
    return confirmlower;
  };
  var numericChoice = function () {
    var confirmNumeric = window.confirm("Would you like numbers?");
    return confirmNumeric;
  };
  var specCharChoice = function () {
    var confirmSpecChar = window.confirm("Would you like special characters?");
    return confirmSpecChar;
  };

  var randomUpper = Math.floor(Math.random() * upperCaseSet.length);

  var passwordBits = {
    howMany: getLength(),
    upperCase: upperChoice(),
    lowerCase: lowerChoice(),
    numeric: numericChoice(),
    specChar: specCharChoice()
  };
  console.log(passwordBits.howMany);
  console.log(passwordBits.upperCase);
  console.log(passwordBits.lowerCase);
  console.log(passwordBits.numeric);
  console.log(passwordBits.specChar);
  console.log(upperCaseSet[randomUpper]);


};




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






