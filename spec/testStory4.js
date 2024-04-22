import { assertEquals } from "./testFramework/testFramework.js";
import Basket from "../src/basket.js";
import Item from "../src/item.js";

const reset = () =>  {
    expected = undefined;
    actual = undefined;
    result = undefined;
    testBasket = null;
}


//Test 1

console.log("Test 1");
console.log("=================");
console.log("Check if the manager can set the max capacity of the basket")
console.log("=================");

//Arrange
let actual, result;
let testBasket = new Basket(4);
//Assert
let expected = 4;

//Act
actual = testBasket.getMaxSize();

result = assertEquals(actual, expected);

//Report
console.log(result ? `Pass` : `Fail`);
if (!result) {
    console.log(`Expected: ${expected}; Actual: ${actual}`);
}
console.log("");
//Clean up
reset();

//Test 2

console.log("Test 2");
console.log("=================");
console.log("Check if the basket size changes when the manager tries to change the basket size")
console.log("=================");

//Arrange
actual, result;
testBasket = new Basket();

//Assert
expected = 4;

//Act
testBasket.setMaxSize(4);
actual = testBasket.getMaxSize();

result = assertEquals(actual, expected);

//Report
console.log(result ? `Pass` : `Fail`);
if (!result) {
    console.log(`Expected: ${expected}; Actual: ${actual}`);
}
console.log("");

//Clean up
reset();

//Test 3

console.log("Test 3");
console.log("=================");
console.log("Make sure the basket size cannot be a negative number")
console.log("=================");

//Arrange
actual, result;
testBasket = new Basket();

//Assert
expected = 5;

//Act
testBasket.setMaxSize(-1);
actual = testBasket.getMaxSize();

result = assertEquals(actual, expected);

//Report
console.log(result ? `Pass` : `Fail`);
if (!result) {
    console.log(`Expected: ${expected}; Actual: ${actual}`);
}
console.log("");

//Clean up
reset();

//Test 4

console.log("Test 4");
console.log("=================");
console.log("Make sure the user cannot add more items than the new max size")
console.log("=================");

//Arrange
actual, result;
testBasket = new Basket();
let testBagel = new Item("Plain Bagel");
let testBagel2 = new Item("Black Seeded Bagel");
let testBagel3 = new Item("White Seeded Bagel");
let testBagel4 = new Item("Brown Bagel");
let testBagel5 = new Item("Everything Bagel");
let testBagel6 = new Item("Cheese-topped Bagel");
let testBagel7 = new Item("Herb-topped Bagel");


//Assert
expected = false;

//Act
testBasket.setMaxSize(6);
testBasket.addItem(testBagel);
testBasket.addItem(testBagel2);
testBasket.addItem(testBagel3);
testBasket.addItem(testBagel4);
testBasket.addItem(testBagel5);
testBasket.addItem(testBagel6);
testBasket.addItem(testBagel7);
actual = testBasket.getItems().includes(testBagel7);

result = assertEquals(actual, expected);

//Report
console.log(result ? `Pass` : `Fail`);
if (!result) {
    console.log(`Expected: ${expected}; Actual: ${actual}`);
}
console.log("");

//Clean up
reset();
testBagel = null;
testBagel2 = null;
testBagel3 = null;
testBagel4 = null;
testBagel5 = null;
testBagel6 = null;

//Test 5

console.log("Test 5");
console.log("=================");
console.log("The manager can't make the basket size smaller than the number of items currently in the basket")
console.log("=================");

//Arrange
actual, result;
testBasket = new Basket(6);
testBagel = new Item("Plain Bagel");
testBagel2 = new Item("Black Seeded Bagel");
testBagel3 = new Item("White Seeded Bagel");
testBagel4 = new Item("Brown Bagel");
testBagel5 = new Item("Everything Bagel");
testBagel6 = new Item("Cheese-topped Bagel");

//Assert
expected = 6;

//Act
testBasket.addItem(testBagel);
testBasket.addItem(testBagel2);
testBasket.addItem(testBagel3);
testBasket.addItem(testBagel4);
testBasket.addItem(testBagel5);
testBasket.addItem(testBagel6);
testBasket.setMaxSize(5);
actual = testBasket.getMaxSize();

result = assertEquals(actual, expected);

//Report
console.log(result ? `Pass` : `Fail`);
if (!result) {
    console.log(`Expected: ${expected}; Actual: ${actual}`);
}
console.log("");

//Clean up
reset();