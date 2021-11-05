// Assignment code here
function generatePassword(){
//  var userAdjective = prompt("Please provide an Adjective");
  alert ("You clicked the button");
  

  //var passwordCriteria = prompt("Please enter a password length between 8 and 128 characters");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  let passwordCriteria = prompt("Please enter a password length between 8 and 128 characters");
  //  let input = document.getElementById("passwordCriteria").value;
  console.log(passwordCriteria)


  

  //if (passwordCriteria >= 8 && passwordCriteria <= 128 == true) {
  //  true = "You met this requirement";
  //}
  //else {
  //  false = "Please try again";
  //}



  passwordText.value = password;


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


