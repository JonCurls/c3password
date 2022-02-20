// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

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


  var getLength = function () {
    var length = "";
    while (length === "" || length < 8 || length > 128) {
      length = prompt("Enter length of password (between 8 - 128 characters)");
    };
    console.log("Your password length is " + length);
    return length;
  };


  var upperChoice = function () {
    var confirmUpper = window.confirm("Would you like UPPERCASE letters?");
    if (confirmUpper == true) {
      passwordGen.push("cap");
    };
    return confirmUpper;
  };
  var lowerChoice = function () {
    var confirmlower = window.confirm("Would you like lowercase letters?");
    if (confirmlower == true) {
      passwordGen.push("low");
    };
    return confirmlower;
  };
  var numericChoice = function () {
    var confirmNumeric = window.confirm("Would you like numbers?");
    if (confirmNumeric == true) {
      passwordGen.push("num");
    };
    return confirmNumeric;
  };
  var specCharChoice = function () {
    var confirmSpecChar = window.confirm("Would you like special characters?");
    if (confirmSpecChar == true) {
      passwordGen.push("spec");
    };
    return confirmSpecChar;
  };

  var passwordBits = {
    howMany: getLength(),
    upperCase: upperChoice(),
    lowerCase: lowerChoice(),
    numeric: numericChoice(),
    specChar: specCharChoice(),
  };

  if (passwordBits.upperCase == false && passwordBits.lowerCase == false && passwordBits.numeric == false && passwordBits.specChar == false) {
    window.alert("Please select at least 1 option.");
    writePassword();
  };


  // for (var i = 0; i < passwordBits.howMany; i++) {
  //   switch (passwordGen[randomNumber(0, passwordGen.length)]) {
  //     case 'cap':
  //       password.push(upperCaseSet[randomNumber(1, 26)]);
  //       //console.log(password);
  //       break;
  //     case 'low':
  //       password.push(lowerCaseSet[randomNumber(1, 26)]);
  //       break;
  //     case 'num':
  //       password.push(numericSet[randomNumber(1, 9)]);
  //       break;
  //     case 'spec':
  //       password.push(specCharSet[randomNumber(1, 14)]);
  //       break;
  //   };
  // };

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

  var finalPassword = password.join("");

  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword.slice(0, passwordBits.howMany);


  // console.log(passwordBits.howMany);
  // console.log(passwordBits.upperCase);
  // console.log(passwordBits.lowerCase);
  // console.log(passwordBits.numeric);
  // console.log(passwordBits.specChar);
  // console.log(passwordGen.length);
  // console.log(passwordGen);
  // console.log(password.slice(0, passwordBits.howMany));
  // console.log(finalPassword.slice(0, passwordBits.howMany));
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






