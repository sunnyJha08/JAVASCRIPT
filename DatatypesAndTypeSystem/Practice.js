// 🧪 Practice Zone
// . Predict the output:
console.log(null + 1);
console.log("5" + 3);
console.log("5" - 3);
console.log(true + false);

// . Check types:
console.log(typeof []);
console.log(typeof null);
console.log(typeof 123n);

// . Truthy or Falsy?

console.log(Boolean(0)); // falsy
console.log(Boolean("0")); // truthy
console.log(Boolean([])); // truthy
console.log(Boolean(undefined));// falsy

// . Write a function isEmpty(value) that checks if a given value is null , undefined , or "" .

// . Compare with loose vs strict:
console.log(5 == "5"); // ?
console.log(5 === "5"); // ?