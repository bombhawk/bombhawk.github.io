console.log(opuses, games, software);
//HTML VARIABLES
//GAMES
//Left game Div
let gameLeft = document.getElementById("gameLeft");
let gameLeftLink = document.getElementById("gameLeftLink");
let gameLeftImg = document.getElementById("gameLeftImg");
let gameLeftName = document.getElementById("gameLeftName");
let gameLeftDesc = document.getElementById("gameLeftDesc");
//Mid game div
let gameMid = document.getElementById("gameMid");
let gameMidImg = document.getElementById("gameMidImg");
let gameMidName = document.getElementById("gameMidName");
let gameMidDesc = document.getElementById("gameMidDesc");
//Right game div
let gameRight = document.getElementById("gameRight");
let gameRightImg = document.getElementById("gameRightImg");
let gameRightName = document.getElementById("gameRightName");
let gameRightDesc = document.getElementById("gameRightDesc");
//SOFTWARE
//Left sw Div
let swLeft = document.getElementById("swLeft");
let swLeftLink = document.getElementById("swLeftLink");
let swLeftImg = document.getElementById("swLeftImg");
let swLeftName = document.getElementById("swLeftName");
let swLeftDesc = document.getElementById("swLeftDesc");
//Mid sw div
let swMid = document.getElementById("swMid");
let swMidImg = document.getElementById("swMidImg");
let swMidName = document.getElementById("swMidName");
let swMidDesc = document.getElementById("swMidDesc");
//Right sw div
let swRight = document.getElementById("swRight");
let swRightImg = document.getElementById("swRightImg");
let swRightName = document.getElementById("swRightName");
let swRightDesc = document.getElementById("swRightDesc");


//js variables
//Opus Carousel
let opusIndex = 0;
let opusLeftIndex;
let opusMidIndex;
let opusRightIndex;
//Game Carousel
let gameIndex = 0;
let leftIndex;
let midIndex;
let rightIndex;
//Software Carousel
let swIndex = 0;
let swLeftIndex;
let swMidIndex;
let swRightIndex;

//FUNCTIONS
//Draw page on load
window.onload = function drawPage() {
  //Draw Carousells on load
  slideLeft();
  slideSoftwareLeft();
  slideOpusLeft();

  //Fill dropdowns on load
  fillOpusDropdown();
  fillGamesDropdown();
  fillSoftwareDropdown();
}

//Update items in opuses carousel//////////////////////////////////////////////////////////////////////////////
function drawOpuses() {
  //Update indices
  leftIndex = (opusIndex + 2) % opuses.length;
  midIndex = (opusIndex + 1) % opuses.length;
  rightIndex = opusIndex % opuses.length;

  //Update left column
  document.getElementById("opusLeftLink").href = opuses[leftIndex].link;
  document.getElementById("opusLeftImg").src = opuses[leftIndex].image;
  document.getElementById("opusLeftName").innerText = opuses[leftIndex].name;
  document.getElementById("opusLeftDesc").innerText = opuses[leftIndex].description;

  //Update mid column
  document.getElementById("opusMidLink").href = opuses[midIndex].link;
  document.getElementById("opusMidImg").src = opuses[midIndex].image;
  document.getElementById("opusMidName").innerText = opuses[midIndex].name;
  document.getElementById("opusMidDesc").innerText = opuses[midIndex].description;

  //Update right column
  document.getElementById("opusRightLink").href = opuses[rightIndex].link;
  document.getElementById("opusRightImg").src = opuses[rightIndex].image;
  document.getElementById("opusRightName").innerText = opuses[rightIndex].name;
  document.getElementById("opusRightDesc").innerText = opuses[rightIndex].description;
}

//Move index back by one
function slideOpusLeft() {
  opusIndex--;
  if (opusIndex < 0) {
    opusIndex = opuses.length - 1;
  }
  drawOpuses();
}

//Move index forward by one
function slideOpusRight() {
  opusIndex++;
  if (opusIndex >= opuses.length) {
    opusIndex = 0;
  }
  drawOpuses();
}


//Update items in games carousel//////////////////////////////////////////////////////////////////////////////
function drawGames() {
  //Update indices
  leftIndex = (gameIndex + 2) % games.length;
  midIndex = (gameIndex + 1) % games.length;
  rightIndex = gameIndex % games.length;

  //Update left column
  document.getElementById("gameLeftLink").href = games[leftIndex].link;
  document.getElementById("gameLeftImg").src = games[leftIndex].image;
  document.getElementById("gameLeftName").innerText = games[leftIndex].name;
  document.getElementById("gameLeftDesc").innerText = games[leftIndex].description;

  //Update mid column
  document.getElementById("gameMidLink").href = games[midIndex].link;
  document.getElementById("gameMidImg").src = games[midIndex].image;
  document.getElementById("gameMidName").innerText = games[midIndex].name;
  document.getElementById("gameMidDesc").innerText = games[midIndex].description;

  //Update right column
  document.getElementById("gameRightLink").href = games[rightIndex].link;
  document.getElementById("gameRightImg").src = games[rightIndex].image;
  document.getElementById("gameRightName").innerText = games[rightIndex].name;
  document.getElementById("gameRightDesc").innerText = games[rightIndex].description;
}

//Move index back by one
function slideLeft() {
  gameIndex--;
  if (gameIndex < 0) {
    gameIndex = games.length - 1;
  }
  drawGames();
}

//Move index forward by one
function slideRight() {
  gameIndex++;
  if (gameIndex >= games.length) {
    gameIndex = 0;
  }
  drawGames();
}

//Update items in software carousel////////////////////////////////////////////////////////////////////////////
function drawSoftware() {
  //Update indices
  swLeftIndex = (swIndex + 2) % software.length;
  swMidIndex = (swIndex + 1) % software.length;
  swRightIndex = swIndex % software.length;

  //Update left column
  document.getElementById("swLeftLink").href = software[swLeftIndex].link;
  document.getElementById("swLeftImg").src = software[swLeftIndex].image;
  document.getElementById("swLeftName").innerText = software[swLeftIndex].name;
  document.getElementById("swLeftDesc").innerText = software[swLeftIndex].description;

  //Update mid column
  document.getElementById("swMidLink").href = software[swMidIndex].link;
  document.getElementById("swMidImg").src = software[swMidIndex].image;
  document.getElementById("swMidName").innerText = software[swMidIndex].name;
  document.getElementById("swMidDesc").innerText = software[swMidIndex].description;

  //Update right column
  document.getElementById("swRightLink").href = software[swRightIndex].link;
  document.getElementById("swRightImg").src = software[swRightIndex].image;
  document.getElementById("swRightName").innerText = software[swRightIndex].name;
  document.getElementById("swRightDesc").innerText = software[swRightIndex].description;
}

//Move index back by one
function slideSoftwareLeft() {
  swIndex--;
  if (swIndex < 0) {
    swIndex = software.length - 1;
  }
  drawSoftware();
}

//Move index forward by one
function slideSoftwareRight() {
  swIndex++;
  if (swIndex >= software.length) {
    swIndex = 0;
  }
  drawSoftware();
}

//Dropdown menus
//Fill opus dropdown
function fillOpusDropdown() {
  let dropdown = document.getElementById('opusDropdownContent');

  for (let i = 0; i < opuses.length; i++) {
    let currItem = document.createElement('div');
    currItem.innerHTML = "-" + '<a href="' + opuses[i].link + '">' + opuses[i].name + '</a><br>';
    dropdown.appendChild(currItem);
  }
}

//Fill games dropdown
function fillGamesDropdown() {
  let dropdown = document.getElementById('gamesDropdownContent');

  for (let i = 0; i < games.length; i++) {
    let currItem = document.createElement('div');
    currItem.innerHTML = "-" + '<a href="' + games[i].link + '">' + games[i].name + '</a><br>';
    dropdown.appendChild(currItem);
  }
}

//Fill software dropdown
function fillSoftwareDropdown() {
  let dropdown = document.getElementById('softwareDropdownContent');

  for (let i = 0; i < software.length; i++) {
    let currItem = document.createElement('div');
    currItem.innerHTML = "- " + '<a href="' + software[i].link + '">' + software[i].name + '</a><br>';
    dropdown.appendChild(currItem);
  }
}

//Show dropdown on mouse hover
function openDropdown(name) {
  let dropdown = document.getElementById(name + "DropdownContent");
  if (dropdown) {
    dropdown.classList.toggle("show");
  } else {
    console.log("Dropdown not found:", name + "DropdownContent");
  }
}

//Close dropdown when mouse is outside of it
function hideDropdown(name) {
  let dropdown = document.getElementById(name + "DropdownContent");
  if (dropdown) {
    dropdown.classList.remove("show");
  } else {
    console.log("Dropdown not found:", name + "DropdownContent");
  }
}
