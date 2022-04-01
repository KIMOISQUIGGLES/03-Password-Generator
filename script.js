function generatePassword(){

  //establish the strings we will be using in this function
  var lowerList = 'abcdefghijklmnopqrstuvwxyz';
  var upperList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numberList = '1234567890'
  var specialList = '@#$&%!~';
  //the string of selected character types
  var randomPassword = '';
  //user's password
  var finalPassword = '';

  //password length (set min and max)
  var charNum = prompt("Please choose a password length of 8-128 characters");
  //make sure that user inputs valid length
  if ((charNum < 8)||(charNum>128)) {
    console.log('INVALID INPUT.  ASK USER TO TRY AGAIN');
    while ((charNum < 8)||(charNum>128)) {
      var charNum = prompt("You have selected an invalid length.  Please enter again.")
      console.log('INVALID INPUT.  ASK USER TO TRY AGAIN');
    }
  }
  
  //console logs number of chars selected
  console.log('number of characters for password: ' + charNum)
  
  //loops to make sure that user selects at least one character type
  while (randomPassword === '') {
    var lowerChar = confirm("Would you like to use lowercase letters in your password?");
    if (lowerChar == true) {
      randomPassword = randomPassword.concat(lowerList);
      console.log("available characters: " + randomPassword);
    } else {
      console.log("lowercase: DECLINED");
    }
    //uppercase? 
    var upperChar = confirm("Would you like to use uppercase letters in your password?");
    if (upperChar == true) {
      randomPassword = randomPassword.concat(upperList);
      console.log("available characters: " + randomPassword);
    } else {
      console.log("uppercase: DECLINED");
    }
    //numbers? 
    var numChar = confirm("Would you like to use numbers in your password?");
    if (numChar == true) {
      randomPassword = randomPassword.concat(numberList);
      console.log("available characters: " + randomPassword);
    } else {
      console.log("numbers: DECLINED");
    }
    //special chars? 
    var specialChar = confirm("Would you like to use special characters in your password?");
    if (specialChar == true) {
      randomPassword = randomPassword.concat(specialList);
      console.log("available characters: " + randomPassword);
    } else {
      console.log("special characters: DECLINED");
    }
    //asks user questions again if they do not choose any character type
    if (randomPassword === ''){
      alert('You have declined all character types.  Please choose at least one.')
      console.log('INVALID INPUT.  ASK USER TO TRY AGAIN');
    }

  }

  //create randomized password with our string!
  //use a for loop to repeat our process of adding letters
  for (let i=0;i<charNum;i++) {
    finalPassword = finalPassword.concat(randomPassword[Math.floor(Math.random()*(randomPassword.length))]);
    console.log("generated password, step " + i + ": " + finalPassword);
  }

  //return user's randomized password
  return finalPassword;

}














//===============================================================================


// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
