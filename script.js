var generateBtn = document.querySelector("#generate");

// Writes password
function writePassword() {
  //Password character sets
  const upperCaseSet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const lowerCaseSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const numericSet = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const specCharSet = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-'];

  const passwordGen = [];
  const password = [];

  //Random Generator function
  var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
  }
  //Determines the length of the password and validated password length
  var getLength = function () {
    var length = "";
    while (length === "" || length < 8 || length > 128) {
      length = prompt("Enter length of password (between 8 - 128 characters)");
    };
    return length;
  };
  //Prompts for uppercase response
  var upperChoice = function () {
    var confirmUpper = window.confirm("Would you like UPPERCASE letters?");
    if (confirmUpper == true) {
      passwordGen.push("cap");
    };
    return confirmUpper;
  };
  //Prompts for lowercase response
  var lowerChoice = function () {
    var confirmlower = window.confirm("Would you like lowercase letters?");
    if (confirmlower == true) {
      passwordGen.push("low");
    };
    return confirmlower;
  };
  //Prompts for numbers response
  var numericChoice = function () {
    var confirmNumeric = window.confirm("Would you like numbers?");
    if (confirmNumeric == true) {
      passwordGen.push("num");
    };
    return confirmNumeric;
  };
  //Prompts for special chars response
  var specCharChoice = function () {
    var confirmSpecChar = window.confirm("Would you like special characters?");
    if (confirmSpecChar == true) {
      passwordGen.push("spec");
    };
    return confirmSpecChar;
  };
  //Stores users selection
  var passwordBits = {
    howMany: getLength(),
    upperCase: upperChoice(),
    lowerCase: lowerChoice(),
    numeric: numericChoice(),
    specChar: specCharChoice(),
  };
  //Validates user has selected at least 1 option
  if (passwordBits.upperCase == false && passwordBits.lowerCase == false && passwordBits.numeric == false && passwordBits.specChar == false) {
    window.alert("Please select at least 1 option.");
    writePassword();
  }
  //Generates password based on users selection
  for (var i = 0; i < passwordBits.howMany; i++) {
    if (passwordBits.upperCase == true && passwordBits.lowerCase == true && passwordBits.numeric == true && passwordBits.specChar == true) {
      password.push(upperCaseSet[randomNumber(1, 25)]);
      password.push(lowerCaseSet[randomNumber(1, 25)]);
      password.push(numericSet[randomNumber(1, 9)]);
      password.push(specCharSet[randomNumber(1, 13)]);
    } else if (passwordBits.upperCase == true && passwordBits.lowerCase == true && passwordBits.numeric == true && passwordBits.specChar == false) {
      password.push(upperCaseSet[randomNumber(1, 25)]);
      password.push(lowerCaseSet[randomNumber(1, 25)]);
      password.push(numericSet[randomNumber(1, 9)]);
    } else if (passwordBits.upperCase == true && passwordBits.lowerCase == true && passwordBits.numeric == false && passwordBits.specChar == true) {
      password.push(upperCaseSet[randomNumber(1, 25)]);
      password.push(lowerCaseSet[randomNumber(1, 25)]);
      password.push(specCharSet[randomNumber(1, 13)]);
    } else if (passwordBits.upperCase == true && passwordBits.lowerCase == false && passwordBits.numeric == true && passwordBits.specChar == true) {
      password.push(upperCaseSet[randomNumber(1, 25)]);
      password.push(numericSet[randomNumber(1, 9)]);
      password.push(specCharSet[randomNumber(1, 13)]);
    } else if (passwordBits.upperCase == true && passwordBits.lowerCase == true && passwordBits.numeric == false && passwordBits.specChar == false) {
      password.push(upperCaseSet[randomNumber(1, 25)]);
      password.push(lowerCaseSet[randomNumber(1, 25)]);
    } else if (passwordBits.upperCase == true && passwordBits.lowerCase == false && passwordBits.numeric == true && passwordBits.specChar == false) {
      password.push(upperCaseSet[randomNumber(1, 25)]);
      password.push(numericSet[randomNumber(1, 9)]);
    } else if (passwordBits.upperCase == true && passwordBits.lowerCase == false && passwordBits.numeric == false && passwordBits.specChar == true) {
      password.push(upperCaseSet[randomNumber(1, 25)]);
      password.push(specCharSet[randomNumber(1, 13)]);
    } else if (passwordBits.upperCase == true && passwordBits.lowerCase == false && passwordBits.numeric == false && passwordBits.specChar == false) {
      password.push(upperCaseSet[randomNumber(1, 25)]);
    } else if (passwordBits.upperCase == false && passwordBits.lowerCase == true && passwordBits.numeric == true && passwordBits.specChar == true) {
      password.push(lowerCaseSet[randomNumber(1, 25)]);
      password.push(numericSet[randomNumber(1, 9)]);
      password.push(specCharSet[randomNumber(1, 13)]);
    } else if (passwordBits.upperCase == false && passwordBits.lowerCase == true && passwordBits.numeric == false && passwordBits.specChar == true) {
      password.push(lowerCaseSet[randomNumber(1, 25)]);
      password.push(specCharSet[randomNumber(1, 13)]);
    } else if (passwordBits.upperCase == false && passwordBits.lowerCase == true && passwordBits.numeric == true && passwordBits.specChar == false) {
      password.push(lowerCaseSet[randomNumber(1, 25)]);
      password.push(numericSet[randomNumber(1, 9)]);
    } else if (passwordBits.upperCase == false && passwordBits.lowerCase == true && passwordBits.numeric == false && passwordBits.specChar == false) {
      password.push(lowerCaseSet[randomNumber(1, 25)]);
    } else if (passwordBits.upperCase == false && passwordBits.lowerCase == false && passwordBits.numeric == true && passwordBits.specChar == true) {
      password.push(numericSet[randomNumber(1, 9)]);
      password.push(specCharSet[randomNumber(1, 13)]);
    } else if (passwordBits.upperCase == false && passwordBits.lowerCase == false && passwordBits.numeric == true && passwordBits.specChar == false) {
      password.push(numericSet[randomNumber(1, 9)]);
    } else if (passwordBits.upperCase == false && passwordBits.lowerCase == false && passwordBits.numeric == false && passwordBits.specChar == true) {
      password.push(specCharSet[randomNumber(1, 13)]);
    }
  }
  //Compiles final password and prints
  var finalPassword = password.join("");
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword.slice(0, passwordBits.howMany);
};
//Event listener for generate button
generateBtn.addEventListener("click", writePassword);