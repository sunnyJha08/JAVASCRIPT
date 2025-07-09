/* 🧨 Hoisting
JavaScript prepares memory before running code.
It moves all declarations to the top — this is called hoisting.

But:
var is hoisted and set to undefined
let and const are hoisted but not initialized — so accessing them early gives ReferenceError */

console.log(a); // undefined
var a = 10;

console.log(b); // ❌ ReferenceError
let b = 20;


/* ⚠️ Common Confusions (JS Reality Checks)
const doesn't make things fully constant. It protects the variable, not the value.
var is outdated — it's better to use let and const .
let and const behave similarly, but const gives more safety — use it when you're not
planning to reassign.

Mindset Rule :-
Use const by default. Use let only when you plan to change the value.
Avoid var — it belongs to the past.
*/
