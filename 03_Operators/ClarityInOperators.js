// 🧪 typeof Operator

typeof 123 // "number"
typeof "hi" // "string"
typeof null // "object" (JS bug)
typeof [] // "object"
typeof {} // "object"
typeof function(){} // "function"

/* 🧠 Mindset
Operators make logic happen.
They help you make decisions, combine values, and create expressions.
Try to:
Use === instead of == to avoid type bugs.
Use ternary for quick decisions, not complex ones.
Think in truthy/falsy when using && , || , ! .

❓ Common Confusions
"5" + 1 is "51" (string concat), but "5" - 1 is 4 (number subtract)
!!value is a quick trick to convert anything into a boolean
Pre-increment ( ++i ) vs post-increment ( i++ ) return different results */