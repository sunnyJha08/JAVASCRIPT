// 🧂 Default + Rest + Spread

function multiply(a = 1, b = 1) {
  return a * b;
}
function sum(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}
let nums = [1, 2, 3];
console.log(sum(...nums)); // Spread

/* a = 1 → default parameter
...nums → rest parameter
...nums (in call) → spread operator */

// ---------------------------------------------------------------------------------------------

// 🎯 First-Class Functions

/* JavaScript treats functions as values:
Assign to variables
Pass as arguments
Return from other functions */

function shout(msg) {
  return msg.toUpperCase();
}
function processMessage(fn) {
  console.log(fn("hello"));
}
processMessage(shout);

// ---------------------------------------------------------------------------------------------

/* 🧠 Higher-Order Functions (HOF)
Functions that accept other functions or return functions. */

function createMultiplier(x) {
  return function (y) {
    return x * y;
  };
}
let double = createMultiplier(2);
console.log(double(5)); // 10

// ---------------------------------------------------------------------------------------------

/* 🔐 Closures & Lexical Scope
Closures = when a function remembers its parent scope, even after the parent has finished. */

function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
let counter = outer();
counter(); // 1
counter(); // 2

// Even after outer is done, counter still remembers count .

// ---------------------------------------------------------------------------------------------

// ⚡ IIFE – Immediately Invoked Function Expression

(function () {
  console.log("Runs immediately");
})();

// Used to create private scope instantly.

// ---------------------------------------------------------------------------------------------

// 🚀 Hoisting: Declarations vs Expressions

hello(); // works
function hello() {
  console.log("Hi");
}
greet(); // error
const greet = function () {
  console.log("Hi");
};

/* Declarations are hoisted
Expressions are not */

// ---------------------------------------------------------------------------------------------

/* ⚠️Common Confusions
Arrow functions don’t have their own this
You can’t break out of forEach
Closures often trap old variable values
Return vs console.log – don't mix them up

🧠 Mindset
Functions are your logic blocks + memory holders (via closure).
They keep your code clean, DRY, and reusable. */