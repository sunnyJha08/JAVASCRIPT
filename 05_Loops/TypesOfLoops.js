/* 🔄 Why Loops?
Loops help us repeat code without rewriting it.
If a task needs to be done multiple times (e.g., printing 1–10, going through an array, or
checking each character in a string), loops are the backbone. */

// 🔁 for Loop

for (let i = 0; i < 5; i++) {
console.log(i);
}

/* Start from i = 0
Run till i < 5
Increase i each time */

// ----------------------------------------------------------------------------------------

// 🔁 while Loop

let j = 0;
while (j < 5) {
console.log(j);
j++;
}

// Condition is checked before running

// ----------------------------------------------------------------------------------------

// 🔁 do-while Loop

let k = 0;
do {
console.log(k);
k++;
} while (k < 5);

// Runs at least once, even if condition is false

// ----------------------------------------------------------------------------------------

// 🌀 for-of – Arrays & Strings

for (let char of "Sheryians") {
console.log(char);
}

// Works on anything iterable (arrays, strings)

// ----------------------------------------------------------------------------------------

// 🧱 forEach – Arrays

let nums = [10, 20, 30];
nums.forEach((num) => {
console.log(num);
});

// Cleaner than for for arrays, but you can’t break/return

// ----------------------------------------------------------------------------------------

// 🧱 for-in – Objects (and arrays if needed)

let user = { name: "Harsh", age: 26 };
for (let key in user) {
console.log(key, user[key]);
}

// Goes over keys in objects

// ----------------------------------------------------------------------------------------

/* ⛔ break and continue
break : Exit loop completely
continue : Skip current iteration and move to next */

for (let i = 1; i <= 5; i++) {
if (i === 3) continue;
console.log(i); // Skips 3
}

/* ⚠️ Common Confusions
for-in is for objects, not arrays (may cause issues with unexpected keys)
forEach can't use break or continue
while and do-while work best when number of iterations is unknown

🧠 Mindset
Loops = data processor.
Use the right loop for the job:
for = best for numbers/indexes
for-of = for array values
for-in = for object keys
while = for unpredictable conditions */