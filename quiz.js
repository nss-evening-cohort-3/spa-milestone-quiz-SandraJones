"use strict";
var CarLot = (function (newCarLot) {
//populate the DOM function  which is what u pass into getInventory
  function populatePage(CarLot) {
    // Loop over the inventory and populate the page
    for (var i=0; i< inventory.length; i++) {
    	var currentInventory = inventory[];
       //as we go thru the function we are going to build one car at a time
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
	//need to create a border and focus on input when border is clicked
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
//we only want to have one car selected at a time, so:
function removeSelected(){
	for (let i=0; inventory.length; i++) {
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
})(CarLot);