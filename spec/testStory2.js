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
console.log("Check if the array length decreases")
console.log("=================");

//Arrange

let actual, result;
let testBagel = new Item("Bagel");
let testBasket = new Basket();
let expected = testBasket.getItems().length;

//Act
testBasket.addItem(testBagel);
testBasket.removeItem(testBagel);
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
console.log("Remove item from basket, make sure the item removed is the correct item")
console.log("=================");

//Arrange
expected = false;
testBagel = new Item("Bagel");
testBasket = new Basket();

//Act
testBasket.addItem(testBagel);
testBasket.removeItem();
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
console.log("Choose which item to remove")
console.log("=================");

//Arrange
expected = true;
testBagel = new Item("Plain Bagel");
let testBagel2 = new Item("Seeded Bagel");
testBasket = new Basket();

//Act
testBasket.addItem(testBagel);
testBasket.addItem(testBagel2);
testBasket.removeItem(testBagel2);
actual = testBasket.getItems().includes(testBagel) && !testBasket.getItems().includes(testBagel2);
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