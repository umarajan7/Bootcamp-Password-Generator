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
              if (!charCheck){
                alert("Please select at leastone type of character.");
                }
            }
        return 
        {
          console.log(passwordLen);
          console.log(charType);
          password_length:passwordLen;
          //charType:  charType ;
        };
        }
      }
 
 }

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

password = getPasswordOptions();
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);