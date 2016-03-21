"use strict";

var CarLot = (function (newCarLot) {
  console.log("inventoryinCarlotjsworks!", inventory);
  var inventory = [];
  return {
    loadInventory: function (callback) {
    	console.log("	loadInventory works");
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "inventory.json");
      loader.send();
      inventoryLoader.addEventListener("load", function () {
      inventory = JSON.parse(this.responseText).inventory.cars;
      callback(inventory);	
      console.log("this works", inventory);
      });
    }
    newCarLot.Inventory = function() {
      return inventory;
    };
  };
  return newCarLot;
})(CarLot);
CarLot.loadInventory(newCarLot);
console.log(CarLot, Carlot.loadInventory);

