/* 🧠 What are Functions?
Functions are blocks of reusable logic.
Instead of repeating the same task again and again, wrap it in a function and reuse it with
different inputs.

Think of a function like a vending machine:
Input: you give money + item code
Output: it gives you the item
Logic: hidden inside */

// -------------------------------------------------------------------------

// ️ Function Declarations

function greet() {
  console.log("Welcome to Sheryians!");
}
greet();

// You define it once, then call it whenever needed.

// -------------------------------------------------------------------------

// 🧾 Parameters vs Arguments

function greet(name) {
  console.log("Hello " + name);
}
greet("Harsh");

/* name is a parameter
"Harsh" is the argument you pass
 */
// -------------------------------------------------------------------------

// 🌀 Return Values

function sum(a, b) {
  return a + b;
}
let total = sum(5, 10); // total is 15

/* return sends back a result to wherever the function was called
After return , function exits */

// -------------------------------------------------------------------------

// 🧰 Function Expressions

const greet = function () {
  console.log("Hello!");
};

/* Functions stored in variables
Cannot be hoisted (you can’t call them before they’re defined)
 */
// -------------------------------------------------------------------------

// 🏹 Arrow Functions

const greet = () => {
  console.log("Hi!");
};

/* Cleaner syntax
No own this , no arguments object */
