// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var pswLength = Number(prompt("How many characters would you like your password to be?"));
  while (isNaN(pswLength) || pswLength < 8 || pswLength > 128) {
    pswLength = Number(prompt("Length must be 8-128 characters. How many characters would you like in your password?"));
  };

  console.log(pswLength);

  var uppers = confirm("would like to use uppercase letter?");
  console.log(uppers);

  var lowers = confirm("Would you like to use lower case letters?");
  console.log(lowers);

  var numbers = confirm("would you like to use numbers?");
  console.log(numbers);

  var symbols = confirm("would you like to use special characters?");
  console.log(symbols);

  while (!uppers && !lowers && !numbers && !symbols) {
    alert("You must select at least one character type!");
    var uppers = confirm("would like to use uppercase letter?");
    var lowers = confirm("Would you like to use lower case letters?");
    var numbers = confirm("would you like to use numbers?");
    var symbols = confirm("would you like to use special characters?");
  };

  var password = [];

  var allowed = {};

  if (uppers) 
  allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM";
  upArray = allowed.uppers.split("");



  if (lowers) 
  allowed.lowers = "qwertyuiopasdfghjklzxcvbnm";
  lowArray = allowed.lowers.split("");
  

  if (numbers)
  allowed.numbers = "123456789";
  numArray = allowed.numbers.split("");
  
  if (symbols) 
  allowed.symbols = "!@#$%^&*()_+=-{}[]?<>";
  symbolArray= allowed.symbols.split("");

  password = upArray + lowArray + numArray + symbolArray
  
  
  
  var userPassword = []
  
  for (var i = 0; i < pswLength; i++) {
    userPassword.push(password[Math.floor(Math.random() * password.length)]);
  };
  
  return userPassword.join("");

  };
  

  


  

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;
  };



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
