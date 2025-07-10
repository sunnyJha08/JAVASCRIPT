/* 📦 What Are Data Types?
In JavaScript, every value has a type.
These types define what kind of data is being stored — a number, text, boolean, object, etc.
There are two categories:
Primitive types – stored directly.
Reference types – stored as memory references.

--------------------------------------------------------------------------------------------
🔹 Primitive Data Types

. String → Text
"hello" , 'Sheryians'

. Number → Any numeric value
3 , -99 , 3.14

. Boolean → True or false
true , false

. Undefined → Variable declared but not assigned
let x; → x is undefined

. Null → Intentional empty value
let x = null;

. Symbol → Unique identifier (rarely used)

. BigInt → Very large integers
123456789012345678901234567890n

--------------------------------------------------------------------------------------------
🔹 Reference Data Types
Object → { name: "Harsh", age: 26 }

Array → [10, 20, 30]

Function → function greet() {}
These are not copied directly, but by reference.

🔍 typeof Operator
Used to check the data type of a value:*/

typeof "Sheryians" // "string"
typeof 99 // "number"
typeof true // "boolean"
typeof undefined // "undefined"
typeof null // "object" ← known bug
typeof [] // "object"
typeof {} // "object"
typeof function(){} // "function"

// Note: typeof null === "object" is a bug, but has existed since the early days of JS.