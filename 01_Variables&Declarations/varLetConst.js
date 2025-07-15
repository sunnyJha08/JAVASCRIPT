/* 🧠 What are Variables?
Variables are containers that hold data.
They help us store, reuse, and update information in JavaScript — from simple values like
numbers to complex data like arrays and objects.
Think of a variable as a box with a name on it. You can put something inside it (a value), and later
check or change what's inside.
In JavaScript, you create these boxes using keywords: var , let , or const . */

// ----------------------------------------------------------------------

/* 🧪 var, let, and const – Line-by-Line Comparison
🧓 var – Old and risky
Scoped to functions, not blocks
Can be redeclared and reassigned
Hoisted to the top with undefined value */

var score = 10;
var score = 20; // OK

// ----------------------------------------------------------------------

/* let – Modern and safe
Scoped to blocks ( {} )
Can be reassigned but not redeclared
Hoisted, but stays in the Temporal Dead Zone (TDZ) */

let age = 25;
age = 30; // ✅
let age = 40; // ❌ Error (same block)

// ----------------------------------------------------------------------

/* 🔐 const – Constant values
Scoped to blocks
Cannot be reassigned or redeclared
Value must be assigned at declaration
TDZ applies here too */

const PI = 3.14;
PI = 3.14159; // ❌ Error

// 👉 But: If const holds an object/array, you can still change its contents:

const student = { name: "Riya" };
student.name = "Priya"; // ✅ OK
student = {}; // ❌ Error

/* 🔥 Scope in Real Life
Block Scope → Code inside {} like in loops, if , etc.
Function Scope → Code inside a function
let and const follow block scope.
var ignores block scope — which leads to bugs. */

{
  var x = 5;
  let y = 10;
  const z = 15;
}
console.log(x); // ✅ 5
console.log(y); // ❌ ReferenceError
console.log(z); // ❌ ReferenceError
