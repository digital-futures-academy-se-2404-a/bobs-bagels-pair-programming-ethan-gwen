import { assertEquals } from "./testFramework.js";



//Test 1

//Arrange
let Bagel = item();
let Basket = basket();
let result = "";

//Act
Basket.additem(item);

//Assert
result = Basket.getItems();

//Report
console.log(result);