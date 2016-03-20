"use strict";
// You operate a used car lot, and need to have an application where you can update the description and availability of each car in your inventory. You are going to using the Bootstrap grid to lay out your HTML structure.
// Create an array of cars in the inventory.json file (see example structure below). Put at least three cars in the array.
// // When your page first loads, you need to use an XHR to load the contents of the JSON file, and parse them into a native JavaScript object.
// Loop over your array of cars and build up an HTML string to build a card for each car.
//  Also, use Bootstrap to create rows. Each row should contain 3 columns. Make sure you have a parent element with a class of container.

// // Make sure you display all properties of the car in the DOM. Basic styling is up to you.
// // Put a border around the car information that matches the color of the car. To make this easier, set the color property value to an existing named CSS color.
// // Put a standard Bootstrap navbar element at the top of your page.
// // Put only two elements in the navbar.
// // A text input field.
// / // A button.

// Create one global variable (e.g. CarLot) and use the IIFE pattern to augment it two times in separate JavaScript files.

// // The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file and stores the inventory in a private variable. It should also expose a public getter to read the array of cars (e.g. getInventory).

// // The second IIFE should augment the original one with a function that creates all of the eventHandlers that you need for the application. Name the function activateEvents.


// // When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.


// // Also, on click of the car element, clear the value of the text input in the navbar, and put the cursor in the text input.
// // When you start typing into the navbar's text input, the description of the currently selected car should be bound to what you are typing in and match it exactly.
// // Technical Requirements



// // The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
// // A car DOM element that was clicked on.
// // A color name.

//populateDOM function  which is what u pass into getInventory
function populatePage(CarLot) {
	console.log("populatePageFunctionWorks!", populatePage);
  // Loop over the inventory and populate the page
  for (var i=0; i< inventory.length; i++) {
  	var currentInventory = inventory[];
     //as we go thru the function we are going to build one card at a time
	  buildCarList(inventory);
	  } 
	addClickEvent();
}
function buildCarList() {
  outputString += `<h1>${currentInventory.make}</h1>
  	<h2>${currentInventory.model}</h2><h3>${currentInventory.year}</h3>${currentInventory.price}</h3><h4>${currentInventory.color}</h4>
  	<h5>${currentInventory.purchased}</h5><h6>${currentInventory.description}</h6>`;
  output.innerHTML = outputString;
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();//the .activateEvents is wrong, unsure what to replace it with.
}
// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);


function addClickEvent(currentInventory) {
	//need to create a border and focus on input when border is clicked(
			for (let i=0; i<inventory.length; i++) {
				let currentInventory = inventory[i];
			  currentInventory.addEventListener("click", function() {
			    removeSelected();
			    input.value = "";
			    input.focus();
			    currentInventory.classList.add("row"); 
			    keyEvent(currentInventory);
		  	});  
  		}
}
//we only want to have one card selected at a time, so:
function removeSelected(){
	for (let i=0; i<card.length; i++) {
    inventory[i].classList.remove("row");
  }
}


//when user clicks on a car
function keyEvent(currentInventory, currentDescription){
  input.addEventListener("keyup", function(event) {
  	//if returns a boolean, so check if currentCard
    if (currentInventory.classList.contains("row")) {
    	let newDescription = event.currentTarget.value;
      currentDescription.innerHTML = newDescription; 
      if (event.keyCode === 13) {
      	 currentDescription.innerHTML = newDescription;
         input.value = "";
      }   
    }
  });
}


//event.target etc  properties on the event object


populatePage();
