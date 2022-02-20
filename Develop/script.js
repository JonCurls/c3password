// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;


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
      passwordGen.push("a");
    };
    return confirmUpper;
  };
  var lowerChoice = function () {
    var confirmlower = window.confirm("Would you like lowercase letters?");
    if (confirmlower == true) {
      passwordGen.push("b");
    };
    return confirmlower;
  };
  var numericChoice = function () {
    var confirmNumeric = window.confirm("Would you like numbers?");
    if (confirmNumeric == true) {
      passwordGen.push("c");
    };
    return confirmNumeric;
  };
  var specCharChoice = function () {
    var confirmSpecChar = window.confirm("Would you like special characters?");
    if (confirmSpecChar == true) {
      passwordGen.push("d");
    };
    return confirmSpecChar;
  };

  // var randomUpper = Math.floor(Math.random() * upperCaseSet.length);
  // var randomLower = Math.floor(Math.random() * lowerCaseSet.length);
  // var randomNumeric = Math.floor(Math.random() * numericSet.length);
  // var randomSpecChar = Math.floor(Math.random() * specCharSet.length);

  var passwordBits = {
    howMany: getLength(),
    upperCase: upperChoice(),
    lowerCase: lowerChoice(),
    numeric: numericChoice(),
    specChar: specCharChoice(),
  };

  if (passwordBits.upperCase == false && passwordBits.lowerCase == false && passwordBits.num == false && passwordBits.spec == false) {
    window.alert("Please select at least 1 option.");
    writePassword();
  };

//debugger;
  for (var i = 0; i < passwordBits.howMany; i++) {
    switch (passwordGen[randomNumber(1, passwordGen.length)]) {
      case "a":
        password.push(upperCaseSet[randomNumber(1, 26)]);
        //console.log(password);
        break;
      case "b":
        password.push(lowerCaseSet[randomNumber(1, 26)]);
        break;
      case "c":
        password.push(numericSet[randomNumber(0, 9)]);
        break;
      case "d":
        password.push(specCharSet[randomNumber(0, 14)]);
        break;
    };
  };



  var finalPassword = password.join("");


  //   console.log(passwordBits.howMany);
  //   console.log(passwordBits.upperCase);
  //   console.log(passwordBits.lowerCase);
  //   console.log(passwordBits.numeric);
  //   console.log(passwordBits.specChar);

  console.log(passwordGen.length);
  console.log(passwordGen);
  console.log(password);
  console.log(finalPassword);

  //   console.log(upperCaseSet[randomUpper]);
  //   console.log(lowerCaseSet[randomLower]);
  //   console.log(numericSet[randomNumeric]);
  //   console.log(specCharSet[randomSpecChar]);
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






