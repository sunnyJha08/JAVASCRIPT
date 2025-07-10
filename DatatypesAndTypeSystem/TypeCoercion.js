/* 🔁 Type Coercion (Auto-Conversion)
JavaScript auto-converts types in some operations: */

"5" + 1 // "51" → number converted to string
"5" - 1 // 4 → string converted to number
true + 1 // 2
null + 1 // 1
undefined + 1 // NaN

/* 🚨 Loose vs Strict Equality

== compares value with type conversion
=== compares value + type (no conversion) */

5 == "5" // true
5 === "5" // false

// Always prefer === for accurate comparisons.

// ---------------------------------------------------------------------
// 🧪 NaN – Not a Number

typeof NaN // "number"

/* Even though it means “Not a Number”, NaN is actually of type number .
This is because operations like 0 / 0 or parseInt("abc") still produce a numeric result —
just an invalid one. */
