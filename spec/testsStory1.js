import { assertEquals } from "./testFramework/testFramework.js";
import basket from "../src/basket.js";
//import item from "../src/item.js";

const reset = () =>  {
    expected = undefined;
    actual = undefined;
    result = undefined;
    basket.items = [];
}


//Test 1

console.log("Test 1");
console.log("=================");
console.log("Add item to basket, and have items array length increase")
console.log("=================");

//Arrange
let expected = basket.items.length + 1;
let actual, result;
let testBagel = {};

//Act
basket.addItem(testBagel);
actual = basket.items.length;
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
testBagel = {};

//Act
basket.addItem(testBagel);
actual = basket.items.includes(testBagel);
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
testBagel = {};
let testBagel2 = {};

//Act
basket.addItem(testBagel);
basket.addItem(testBagel2);
actual = basket.items.includes(testBagel) && basket.items.includes(testBagel2);
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
testBagel = null;

//Act
basket.addItem(testBagel);
actual = basket.items.includes(testBagel);

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