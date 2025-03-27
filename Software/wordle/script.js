//VARIABLES
let currRow = 1; //Tracks the current row
let currCol = 1; //Tracks the current column
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //A list of valid letters
let hiddenWord = ""; //Stores the word the user is trying to guess
let guesses = [""]; //Stores the guesses the user has made

//LISTENERS
//Get input on key press
document.addEventListener('keydown', (event) => {
  const key = event.key;
  keyPressed(key);
  console.log("Key pressed: " + key);
});

//FUNCTIONS
//Load game properly
window.onload = function onLoad() {
  fillBlanks();
  pickWord();
}

//Fill spaces with blanks
function fillBlanks() {
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 5; j++) {
      document.getElementById("" + i + j).innerHTML = "";
    }
  }
}

//Randomly pick a new word
function pickWord() {
  let min = 0;
  let max = wordList.length - 1;
  hiddenWord = wordList[Math.floor(Math.random() * (max - min + 1)) + min];
  console.log(hiddenWord);
}

//React to key press; either display new letter, remove letter, or enter word
function keyPressed(key) {
  //Key pressed is a letter
  if (letters.includes(key)) {
    document.getElementById("" + currRow + currCol).innerHTML = key.toUpperCase();
    if (currCol < 6) {
      currCol++;
    }
  }
  //Key pressed is backspace
  else if (key == 'Backspace') {
    if (currCol > 1) {
        currCol--;
      document.getElementById("" + currRow + currCol).innerHTML = "";
    } else if (currCol == 1) {
      document.getElementById("" + currRow + currCol).innerHTML = "";
    }
    if (currCol < 5) {
    }
    console.log(currCol);
  }
  //Key pressed is enter
  else if (key == 'Enter') {
    let word = getWord();
    if (wordList.includes(word) && !guesses.includes(word)) {
      currRow++;
      currCol = 1;
      updateVKB(word);
      changeColors();
      guesses += word;
      checkWord(word);
    }
  }
}

//Return the word from player input
function getWord() {
  let word = "";
  for (let i = 1; i <= 5; i++) {
    word += document.getElementById("" + currRow + i).innerHTML.toLowerCase();
  }
  return word;
}

//Change the color of the letters based on the hidden word
function changeColors() {
  for (let i = 1; i <= 5; i++) {
    if (document.getElementById("" + (currRow - 1) + i).innerHTML.toLowerCase() == hiddenWord[i - 1]) {
      document.getElementById("" + (currRow - 1) + i).style.backgroundColor = "#73aa62";
      document.getElementById("" + (currRow - 1) + i).style.border = "1px solid #73aa62";
      document.getElementById("" + (currRow - 1) + i).style.color = "#FFFFFF";
    } else if (hiddenWord.includes(document.getElementById("" + (currRow - 1) + i).innerHTML.toLowerCase())) {
      document.getElementById("" + (currRow - 1) + i).style.backgroundColor = "#c5b353";
      document.getElementById("" + (currRow - 1) + i).style.border = "1px solid #c5b353";
      document.getElementById("" + (currRow - 1) + i).style.color = "#FFFFFF";
    } else {
      document.getElementById("" + (currRow - 1) + i).style.backgroundColor = "#797c7e";
      document.getElementById("" + (currRow - 1) + i).style.border = "1px solid #797c7e";
      document.getElementById("" + (currRow - 1) + i).style.color = "#FFFFFF";
    }
  }
}

//Reset all squares
function clearColors() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 6; j++) {
      document.getElementById("" + j + i).style.backgroundColor = "#121213";
      document.getElementById("" + j + i).style.border = "2px solid #3a3a3c";
    }
  }
}

//Reset the game
function reset() {
  fillBlanks();    
  clearColors();  
  clearVKB();    
  pickWord();      
  guesses = [""];  
  currRow = 1;     
  currCol = 1;    
}


//Change virtual keyboard colors
function updateVKB(pWord) {
  for (let i = 0; i < pWord.length; i++) {
    if (pWord[i] == hiddenWord[i]) {
      document.getElementById('' + pWord[i]).style.backgroundColor = "#73aa62";
      document.getElementById('' + pWord[i]).style.color = "#FFFFFF";
    } else if (hiddenWord.includes(pWord[i])) {
      document.getElementById('' + pWord[i]).style.backgroundColor = "#c5b353";
      document.getElementById('' + pWord[i]).style.color = "#FFFFFF";
    } else {
      document.getElementById('' + pWord[i]).style.backgroundColor = "#595c5e";
      document.getElementById('' + pWord[i]).style.color = "#FFFFFF";
    }
  }
}

//Reset virtual keyboard colors
function clearVKB() {
  for (let i = 0; i < letters.length; i++) {
    document.getElementById('' + letters[i]).style.backgroundColor = "#818384";
  }
}

//Alert the player when the guess the correct word or run out of guesses
function checkWord(pWord) {
  if (pWord == hiddenWord) {
    alert("Congratulations! You guessed the word " + hiddenWord + " in " + currRow + " guesses! Click 'New Word' to play again!");
  } else if (currRow == 7) {
    alert("Sorry! You ran out of guesses! The word was " + hiddenWord + ". Click 'New Word' to play again!");
  }
}