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
console.log("Check if the user can see the max capacity of the basket")
console.log("=================");

//Arrange
let actual, result;
let testBasket = new Basket();
let testBagel = null;
//Assert
let expected = 5;

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
console.log("Check if the user can add an item while not at max capacity")
console.log("=================");

//Arrange
actual, result;
testBasket = new Basket();
testBagel = new Item("Plain Bagel");
let testBagel2 = new Item("Black Seeded Bagel");
let testBagel3 = new Item("White Seeded Bagel");
let testBagel4 = new Item("Brown Bagel");
let testBagel5 = new Item("Everything Bagel");
let testBagel6 = new Item("Cheese-topped Bagel");

//Assert
expected = false;

//Act
testBasket.addItem(testBagel);
testBasket.addItem(testBagel2);
testBasket.addItem(testBagel3);
testBasket.addItem(testBagel4);
testBasket.addItem(testBagel5);
testBasket.addItem(testBagel6);
actual = testBasket.getItems().includes(testBagel6);

result = assertEquals(actual, expected);

//Report
console.log(result ? `Pass` : `Fail`);
if (!result) {
    console.log(`Expected: ${expected}; Actual: ${actual}`);
}
console.log("");
//Clean up
reset();


//test 3

console.log("Test 3");
console.log("=================");
console.log("Check if the user can add an item while at max capacity")
console.log("=================");

//Arrange
actual, result;
testBasket = new Basket();
testBagel = new Item("Plain Bagel");
testBagel2 = new Item("Black Seeded Bagel");
testBagel3 = new Item("White Seeded Bagel");

//Assert
expected = true;
//Act
testBasket.addItem(testBagel);
testBasket.addItem(testBagel2);
testBasket.addItem(testBagel3);
actual = testBasket.getItems().includes(testBagel3);

result = assertEquals(actual, expected);

//Report
console.log(result ? `Pass` : `Fail`);
if (!result) {
    console.log(`Expected: ${expected}; Actual: ${actual}`);
}
console.log("");

//Clean up
reset();