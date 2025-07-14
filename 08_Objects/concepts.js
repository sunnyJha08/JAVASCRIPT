/* 🧠 What is an Object?

Objects in JavaScript are like real-world records – a collection of key-value pairs.
They help us store structured data (like a student, a product, or a user profile). */

let student = {
  name: "Ravi",
  age: 21,
  isEnrolled: true,
};

// ------------------------------------------------------------------------------------------------

/*  🔑 Key-Value Structure
    Keys are always strings (even if you write them as numbers or identifiers)
    Values can be anything – string, number, array, object, function, etc. */

console.log(student["name"]); // Ravi
console.log(student.age); // 21

// ------------------------------------------------------------------------------------------------

/* 📍 Dot vs Bracket Notation
Use dot notation for fixed key names
Use bracket notation for dynamic or multi-word keys */

student["full name"] = "Ravi Kumar"; // ✅
student.course = "JavaScript"; // ✅

// ------------------------------------------------------------------------------------------------

/* ️ Nesting and Deep Access
Objects can have nested objects (objects inside objects) */

let user = {
  name: "Amit",
  address: {
    city: "Delhi",
    pincode: 110001,
  },
};
console.log(user.address.city); // Delhi

// ------------------------------------------------------------------------------------------------

/* ✂️ Object Destructuring
You can extract values directly: */

let { name, age } = student;

// For nested objects:

let {
  address: { city },
} = user;

// ------------------------------------------------------------------------------------------------

/* 🔁 Looping Through Objects
for-in loop */

for (let key in student) {
  console.log(key, student[key]);
}

// Object.keys(), Object.values(), Object.entries();

Object.keys(student); // ["name", "age", "isEnrolled"]
Object.entries(student); // [["name", "Ravi"], ["age", 21], ...]

// ------------------------------------------------------------------------------------------------

/* 📦 Copying Objects
Shallow Copy (one level deep) */

let newStudent = { ...student };
let newOne = Object.assign({}, student);

// Deep Copy (nested levels)

let deepCopy = JSON.parse(JSON.stringify(user));

// ❗ Note: JSON-based copy works only for plain data (no functions, undefined, etc.)

// ------------------------------------------------------------------------------------------------

/* ❓ Optional Chaining
Avoids errors if a nested property is undefined: */

console.log(user?.address?.city); //Delhi
console.log(user?.profile?.email); //undefined (no error)

// ------------------------------------------------------------------------------------------------

/* 🧠 Computed Properties
You can use variables as keys: */

let key = "marks";
let report = {
  [key]: 89,
};

/* ⚠️ Common Confusions

Shallow copy copies only the first level
for-in includes inherited keys (be cautious!)
delete obj.key removes the property
Spread ≠ deep copy

--------------------------------------------------------------------------------------

🧠 Mindset

Objects are structured state – perfect for modeling anything complex: a user, a form, a product,
etc.
Use destructuring, chaining, and dynamic keys wisely. */
