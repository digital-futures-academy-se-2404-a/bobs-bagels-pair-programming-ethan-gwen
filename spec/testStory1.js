import { assertEquals } from "./testFramework/testFramework.js";
import Basket from "../src/basket.js";
import Item from "../src/item.js";

const reset = () =>  {
    expected = undefined;
    actual = undefined;
    result = undefined;
    testBasket = null;
    testBagel = null;
}


//Test 1

console.log("Test 1");
console.log("=================");
console.log("Add item to basket, and have items array length increase")
console.log("=================");

//Arrange
let actual, result;
let testBagel = new Item("Bagel");
let testBasket = new Basket();
let expected = testBasket.getItems().length + 1;

//Act
testBasket.addItem(testBagel);
actual = testBasket.getItems().length;

//Assert
result = assertEquals(actual, expected);

//Report
console.log(result ? `Pass` : `Fail`);
if (!result) {
    console.log(`Expected: ${expected}; Actual: ${actual}`);
}
//Clean up
reset();

//! End of Test 1

//Test 2
console.log("");
console.log("Test 2");
console.log("=================");
console.log("Add item to basket, make sure the item added is the correct item")
console.log("=================");

//Arrange
expected = true;
testBagel = new Item("Bagel");
testBasket = new Basket();

//Act
testBasket.addItem(testBagel);
actual = testBasket.getItems().includes(testBagel);
//Assert
result = assertEquals(actual, expected);

//Report
console.log(result ? `Pass` : `Fail`);
if (!result) {
    console.log(`Expected: ${expected}; Actual: ${actual}`);
}
//Clean up
reset();

//! End of Test 2

//Test 3
console.log("");
console.log("Test 3");
console.log("=================");
console.log("Add item to basket, when the basket already has an item in it")
console.log("=================");

//Arrange
expected = true;
testBagel = new Item("Plain Bagel");
let testBagel2 = new Item("Seeded Bagel");
testBasket = new Basket();


//Act
testBasket.addItem(testBagel);
testBasket.addItem(testBagel2);
actual = testBasket.getItems().includes(testBagel) && testBasket.getItems().includes(testBagel2);
//Assert
result = assertEquals(actual, expected);

//Report
console.log(result ? `Pass` : `Fail`);
if (!result) {
    console.log(`Expected: ${expected}; Actual: ${actual}`);
}
//Clean up
reset();

//! End of Test 3

//Test 4
console.log("");
console.log("Test 4");
console.log("=================");
console.log("Add item to basket, unless it is null")
console.log("=================");

//Arrange
expected = false;
testBagel = new Item(null);
testBasket = new Basket();

//Act
testBasket.addItem(testBagel);
actual = testBasket.getItems().includes(testBagel);

//Assert
result = assertEquals(actual, expected);

//Report
console.log(result ? `Pass` : `Fail`);
if (!result) {
    console.log(`Expected: ${expected}; Actual: ${actual}`);
}
//Clean up
reset();

//! End of Test 4