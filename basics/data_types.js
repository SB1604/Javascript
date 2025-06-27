// alert() - can be used in browsers not in node js

"use strict"; //to make sure new version if javascript is used

// ======== PRIMITIVE DATA TYPES =========

// 1. Number
let age = 25;
console.log("Number:", age); // Output: 25

// 2. String
let name = "Alice";
console.log("String:", name); // Output: Alice

// 3. Boolean
let isStudent = true;
console.log("Boolean:", isStudent); // Output: true

// 4. Undefined
let city;
console.log("Undefined:", city); // Output: undefined

// 5. Null (intentional empty value)
let score = null;
console.log("Null:", score); // Output: null

// 6. Symbol (unique identifier)
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log("Symbol:", sym1 === sym2); // false (every symbol is unique)

// 7. BigInt (for very large integers)
let bigNum = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigNum); // Output: 1234567890123456789012345678901234567890n


// ======== NON-PRIMITIVE (REFERENCE) DATA TYPES =========

// 8. Object
let person = {
  name: "Alice",
  age: 25
};
console.log("Object:", person);

// 9. Array (a special kind of object)
let colors = ["red", "green", "blue"];
console.log("Array:", colors);

// 10. Function (also an object in JavaScript)
function greet() {
  console.log("Hello there!");
}
console.log("Function:", greet);
greet(); // call the function

// ======== TYPE CHECKING =========
console.log("typeof age:", typeof age);         // number
console.log("typeof name:", typeof name);       // string
console.log("typeof isStudent:", typeof isStudent); // boolean
console.log("typeof city:", typeof city);       // undefined
console.log("typeof score:", typeof score);     // object (weird JS quirk!)
console.log("typeof sym1:", typeof sym1);       // symbol
console.log("typeof bigNum:", typeof bigNum);   // bigint
console.log("typeof person:", typeof person);   // object
console.log("typeof colors:", typeof colors);   // object (yes! arrays are objects!)
console.log("typeof greet:", typeof greet);     // function
