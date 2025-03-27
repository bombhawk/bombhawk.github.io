console.log(opuses, games, software);
//FUNCTIONS
//Draw page on load
window.onload = function drawPage() {
  //Fill dropdowns on load
  fillOpusDropdown();
  fillGamesDropdown();
  fillSoftwareDropdown();
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
