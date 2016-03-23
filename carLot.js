"use strict";

var CarLot = (function (newCarLot) {
  console.log("inventoryinCarlotjsworks!", inventory);
  var inventory = [];
  return {
    loadInventory: function (callback) {
      var invLoader = new XMLHttpRequest();
      invLoader.addEventListener("load", function() {
      var data = JSON.parse(this.responseText);
      inventory = data.cars;
      });
      invLoader.open("GET", "CarLot.json");
      chatLoader.send();
    }
  }
  return CarLot;
})(CarLot);
CarLot.loadInventory();




//     	console.log("	loadInventory works"); 
//       var inventoryLoader = new XMLHttpRequest();
//       inventoryLoader.open("GET", "inventory.json");
//       inventoryLoader.send();
//       inventoryLoader.addEventListener("load", function () {
//       inventory = JSON.parse(this.responseText).inventory.cars;
//       callback(inventory);	
//       console.log("this works", inventory);
//       });
//     }
//     newCarLot.Inventory = function() {
//       return inventory;
//     };
//   };
//   return newCarLot;
// })(CarLot);
// CarLot.loadInventory(newCarLot);
// console.log(CarLot, Carlot.loadInventory);

