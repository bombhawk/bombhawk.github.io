console.log("JS file loaded successfully!");

//Variables
const toDoList = [];
let index = 0;
let runningList = document.getElementById("list");
let gIndex = 0;
let itemName = "";

console.log("toDo.js loaded successfully!");

//Functions
//Add a new item to the toDoList array 
window.addItem = function () {
  let newItem = prompt("Enter the item you wish to add:");
  toDoList[index] = newItem;
  drawToDoList();
  index++;
}

//Remove an item from the toDoList array using it's number
window.removeNum = function (gindex) {
  prompt("Enter the number of the item you wish to remove:");
  removeByIndex(gIndex);
}

//Remove and item from the toDoList array using it's name
window.removeName = function (itemName) {
  prompt("Enter the task you wish to remove:");
  let tempIndex = toDoList.indexOf(itemName);
  removeByIndex(tempIndex - 1);
}

//Remove an item from the toDoList array using it's index
window.removeByIndex = function (gIndex) {
  if (toDoList.length == 1) {
    toDoList.splice(0, 1);
  } else {
    toDoList.splice(gIndex + 1, 1);
  }
  drawToDoList();
  index--;
}

//Draw the toDoList array to the screen
function drawToDoList() {

  document.getElementById("list").innerHTML = "";
  for (let i = 0; i < toDoList.length; i++) {
    document.getElementById("list").innerHTML += (i + 1) + ". " + toDoList[i] + "<br>";
  }
}