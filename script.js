// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var charactersLength =0;
var counter = 0;
var passwordresult ='';

// Function to prompt user for password options
function getPasswordOptions() 
{
    var passwordLen=0;
    var error = true;
      passwordLen= prompt("How many characters would you like in your password? Enter betwen 8 and 128 inclusive");
      while (error)
      {
          if(passwordLen < 8 || passwordLen > 128)
          {
            alert("please input a number between 8 and 128.");
            passwordLen = prompt("How many characters would you like in your password? Enter betwen 8 and 128 inclusive");
          }
          else 
          {
          
            charactersLength= passwordLen;
            error = false;
            var charType = [{
              type:"special characters",
              character: specialCharacters,
              incl_char_type:false
            },
            {
              type:"numeric characters",
              character: numericCharacters,
              incl_char_type:false
            },
            {
              type:"lowercase characters",
              character: lowerCasedCharacters,
              incl_char_type:false
            },
            {
              type:"uppercase characters",
              character: upperCasedCharacters,
              incl_char_type:false
            }];
            var charCheck = false;
            while (!charCheck) 
            {
              // check whether password to include characters as specified
              for (let i=0; i< charType.length;i++)
              {
                charType[i].incl_char_type = confirm("Would you like your password to include " + charType[i].type + "?");
              };
              for (let i=0; i<charType.length;i++)
              {
                if (charType[i].incl_char_type === true)
                {
                  charCheck = true;
                }
              };
              // alert the user to enter atleast one type of character
              if (!charCheck){
                alert("Please select at least one type of character.");
                }
            }

            // checks the charType of the user input and use random function to generate the password
            while (counter < charactersLength)
            {
              for (let i=0; i<charType.length;i++)
              {
                if (charType[i].incl_char_type === true)
                {
                   if (charType[i].type === "uppercase characters")
                   {
                   passwordstr = charType[i].character
                   passwordresult += upperCasedCharacters[Math.Random()* upperCasedCharacters.length-1];
                   alert("passwordresult :  `${passwordresult}`");
                  }
                  if (charType[i].type === "lowercase characters")
                  {
                  passwordstr = charType[i].character
                  passwordresult += lowerCasedCharacters[Math.Random()* lowerCasedCharacters.length-1];
                  alert("passwordresult :  `${passwordresult}`");
                 }
                 if (charType[i].type === "numeric characters")
                 {
                 passwordstr = charType[i].character
                 passwordresult += numericCharacters[Math.Random()* numericCharacters.length-1];
                 alert("passwordresult :  `${passwordresult}`");
                }
                if (charType[i].type === "special characters")
                {
                 passwordstr = charType[i].character
                passwordresult += specialCharacters[Math.Random() * specialCharacters.length-1];
                alert("passwordresult :  `${passwordresult}`");
               }
                }else
                {
                alert("passwordresult :  `${passwordresult}`");
                }
              };
            }
        return 
        {
          
          password_len:passwordLen;
          char_Types:  charType 
        };
        }
      }
       var passwordCharacters = [passwordLen];
       console.log(passwordCharacters);
 }

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}
var error = true;
password = getPasswordOptions();

console.log(password);
console.log(charType);
while (error)
{
  
  /*for (var i = 0; i <password.length; i++)
  {
    
    /* if (password.charType.incl_char_type() === true && password.charType(i).charCheck)
     {
      console.log password.charType.incl_char_type();
     } 
     
  } */
  break;
}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
 
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);