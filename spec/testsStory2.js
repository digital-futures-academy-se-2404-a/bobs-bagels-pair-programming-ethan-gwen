import { assertEquals } from "./testFramework/testFramework.js";
import basket from "../src/basket.js";

const reset = () =>  {
    expected = undefined;
    actual = undefined;
    result = undefined;
    basket.items = [];
}


//Test 1

console.log("Test 1");
console.log("=================");
console.log("Check if the array length decreases")
console.log("=================");

//Arrange
let expected = basket.items.length;
let actual, result;
let testBagel = {};

//Act
basket.addItem(testBagel);
basket.removeItem(testBagel);
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
console.log("Remove item from basket, make sure the item removed is the correct item")
console.log("=================");

//Arrange
expected = false;
testBagel = {"bagel": 1};

//Act
basket.addItem(testBagel);
basket.removeItem();
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
console.log("Choose which item to remove")
console.log("=================");

//Arrange
expected = true;
testBagel = {"bagel": 1};
let testBagel2 = {"bagel": 2};

//Act
basket.addItem(testBagel);
basket.addItem(testBagel2);
basket.removeItem(testBagel2);
actual = basket.items.includes(testBagel) && !basket.items.includes(testBagel2);
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