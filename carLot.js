"use strict";
var CarLot = (function () {
  console.log("CarLot");
  var privateInventory = [];

  return {
    // getInventory: function () {
    //   return privateInventory;
    //    console.log("inventory");
    // }, 
    loadInventory: function (callback) {
      console.log("loadInventory function");
      var invLoader = new XMLHttpRequest();

      invLoader.addEventListener("load", function () {
      console.log("listener");
      //set the value of the private array
        privateInventory = JSON.parse(this.responseText);
        console.log("privateInventory", privateInventory);
      });
      invLoader.open("GET", "inventory.json");
      invLoader.send();
      console.log(this);
      // callback();
   }
  } 
  populate(inventory);
  //list cars in the DOM
      // var list = document.getElementByClassName("output");
      // return 
})();
CarLot.loadInventory();




// var CarLot = (function (newCarLot) {
//   var inventory = [];
//   console.log("first step");
//   return {
//     getInventory: function() {
//       return inventory;
//     },   
//     loadInventory: function () {
//       var invLoader = new XMLHttpRequest();
//       invLoader.addEventListener("load", function() { 
//       var dealer = JSON.parse(this.responseText);
//       inventory = dealer.cars;
//       CarLot.populatePage(inventory);
//       });          
//       invLoader.open("GET", "carLot.json");
//       invLoader.send();
//       console.log("inventory", inventory);
//     }
//   }
// })(CarLot);
