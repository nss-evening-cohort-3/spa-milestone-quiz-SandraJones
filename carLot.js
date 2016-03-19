"use strict";
var CarLot = (function () {
  var inventory = [];
  return {
    loadInventory: function (callBTI) {
    	console.log("	loadInventory works");
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "inventory.json");
      loader.send();
      inventoryLoader.addEventListener("load", function () {
      inventory = JSON.parse(this.responseText).inventory.cars;
      callBTI(inventory);	
      console.log("this works", inventory);
      });
    }
  };
})();

