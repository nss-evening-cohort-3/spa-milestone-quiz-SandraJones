"use strict";
var CarLot = (function (newCarLot) {
  var inventory = [];
  console.log("first step");
  return {
    getInventory: function() {
      return inventory;
    },   
    loadInventory: function () {
      var invLoader = new XMLHttpRequest();
      invLoader.addEventListener("load", function() { 
      var dealer = JSON.parse(this.responseText);
      inventory = dealer.cars;
      CarLot.populatePage(inventory);
      });          
      invLoader.open("GET", "carLot.json");
      invLoader.send();
      console.log("inventory", inventory);
    }
  }
})(CarLot);
