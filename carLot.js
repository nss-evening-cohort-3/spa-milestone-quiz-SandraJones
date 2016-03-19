"use strict";
var CarLot = (function () {
  var inventory = [];
  return {
    // getInventory: function () {
    // },
    loadInventory: function (callBTI) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GRT", "inventory.json");
      loader.send();
      inventoryLoader.addEventListener("load", function () {
      inventory = JSON.parse(this.responseText).inventory;
      callBTI(inventory);	
      });
    }
  };
})();


//may not even use the getInventory function