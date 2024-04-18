import { assertEquals } from "./testFramework/testFramework.js";
import basket from "../src/basket.js";



//Test 1

console.log("Test 1");
console.log("=================");
console.log("Add item to basket, and have item's array increase")

//Arrange
let Bagel = item();
let Basket = basket();
let expected = Basket.items.length + 1;
let actual, result;

//Act
Basket.additem(Bagel);
actual = Basket.items().length;

//Assert
result = assertEquals(actual, expected);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);