//App: Password Generator

//Date: 2/25/22


//DOCUMENT OBJECTS
var passLengthDropdown = document.getElementById("passLength");
var radioMix = document.getElementById("radioMix");
var radioLetter = document.getElementById("radioLetter");
var radioNumber = document.getElementById("radioNumber");
var outPassword = document.getElementById("outPassword");


//VARIABLES
var password = [];
var passLength = "";
var capsSetting = "mix";
var letters;


//INIT
init();


//FUNCTIONS
//Start program by running the setLength and fillDropdowns functions
function init() {
  fillDropdowns();
  setLength();
}


//Cycle through the three dropdowns (letters, numbers, and specials), and fill them with numbers up to 50.
function fillDropdowns() {
  for (i = 0; i < 51; i++)
  {
    var lengthChild = document.createElement("option");
    lengthChild.innerHTML = i;	
    letterNumber.appendChild(lengthChild);
  }
  for (i = 0; i < 51; i++)
  {
    var lengthChild = document.createElement("option");
    lengthChild.innerHTML = i;	
    numberNumber.appendChild(lengthChild);
  }
  for (i = 0; i < 51; i++)
  {
    var lengthChild = document.createElement("option");
    lengthChild.innerHTML = i;	
    speacialNumber.appendChild(lengthChild);
  }   
}


//Make sure there are multiple letters when mix is checked, clear current password, and start the function to generate a new one
function setLength(radioState) {
  if (document.getElementById("radioMix").checked && letterNumber.value == 1) {
    letterNumber.value = 2;
  }
  outPassword.value = "";

  //Run "createletters" with the argument the user has selected
  if (document.getElementById("radioMix").checked) {
    createLetters("mix");
  } else if (document.getElementById("radioLower").checked) {
    createLetters("lows");
  } else {
    createLetters("caps");
  }
}


//The start of the main portion of the program. It generates a list of random letters in the number of the user's input. It then checks to see what the desired case of the letters is and racts by either leaving the letters untouched, randomly changing some to lowercase, or changing all to lowercase. If a mix of capitilization is chosen the function also checks to make sure there is at least one capital and one lowercase letter, and if there is not it randomly changes one letter's capitilization to accordingly.
function createLetters(radioState) {
var charList = [];

  if ((parseInt(letterNumber.value) > 0)) {
    for (i = 0; i < parseInt(letterNumber.value); i++) {
      charList.push(letters[Math.floor(Math.random() * letters.length)]);
    }

  var tempLetters = "";

  if (radioState == "mix") {
    //generate list of letters. Generate random number, and if 1 leave it if 2 lowercase it. Make sure there is at least 1 upper and 1 lower.
    var lowNumb = 0;
    for (i = 0; i < charList.length; i++) {
      var randomNumb = Math.floor((Math.random() * 2) + 1);
      if (randomNumb == 1) {
        var givenLetter = charList[i];
        givenLetter = givenLetter.toLowerCase();
        charList.splice(i, 1, givenLetter);
        lowNumb += 1;
      }
    }

    //If there are no lowercase letters replace one capital letter with a lowercase one
    if (lowNumb == 0) {
      var tempNumb = (parseInt(charList.length) - 1);
      var temp = charList[tempNumb];

      temp = temp.toLowerCase(); 
      charList.splice(tempNumb);
      charList.push(temp);
    }

    //If there are no capital letters change one letter to be captal
    if (lowNumb == charList.length) {
      var tempNumb = (parseInt(charList.length) - 1);
      var temp = charList[tempNumb];
      console.log(temp);
      temp = temp.toUpperCase();
      charList.splice(tempNumb);
      charList.push(temp);
    }

  //If lowercase only is selected assign all letters to lowercase
  } else if (radioState == "lows") {
    for (i = 0; i < charList.length; i++) {
      tempLetters += charList[i];
    }
    tempLetters = tempLetters.toLowerCase();
    console.log(tempLetters + " (lowercase)");
    charList = [];
    for (i = 0; i < tempLetters.length; i++) {
      charList.push(tempLetters[i]);
    }
  }
  }

createNumbers(charList);
}


//The function adds a random sequence of numbers to charList in the number that is chosen by the user.
function createNumbers(charList) {
  if ((parseInt(numberNumber.value) > 0)) {
    for (i = 0; i < parseInt(numberNumber.value); i++) {
      charList.push(Math.floor(Math.random() * 9) + 1);
    }
  }

createSpecial(charList);
}


//The function adds a number (selected by the user) of random "special characters" from the speacialChars array to the charList function.
function createSpecial(charList) {
  if ((parseInt(speacialNumber.value) > 0)) {
    for (i = 0; i < parseInt(speacialNumber.value); i++) {
      charList.push(speacialChars[Math.floor(Math.random() * speacialChars.length)]);
    }
  }

randomizePassword(charList);
}


//Loop through the list of characters for the password (charList), and randomly re-order it, then run cleanPassword()
function randomizePassword(charList) {
  for (i = 0; i < charList.length; i++) {
    var j = Math.floor(Math.random() * (i + 1));
    var tempStore = charList[i];
    charList[i] = charList[j];
    charList[j] = tempStore;
  }
  console.log(charList);
  cleanPasword(charList);
}


//Copy each value from the array to a new string and display it on the screen.
function cleanPasword(charList) {
  var drawnPass = "";
  for (i = 0; i < charList.length; i++) {
    console.log(charList[i]);
    drawnPass += charList[i];
  }
  outPassword.value = drawnPass;
}


//On "Copy" button click select the password text and copy it to the clipboard
function copyPassword() {
  outPassword.select();
  navigator.clipboard.writeText(outPassword.value);
}