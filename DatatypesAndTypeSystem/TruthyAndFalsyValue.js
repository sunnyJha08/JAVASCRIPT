/* 🔦 Truthy and Falsy Values

Falsy values:
false , 0 , "" , null , undefined , NaN

Everything else is truthy, including:
"0" , "false" , [] , {} , function(){} */

// Example:
if ("0") {
  console.log("Runs"); // "0" is a non-empty string = truthy
}

/*     🧠 Mindset
    JavaScript will often auto-convert types behind the scenes.
    Always stay aware of what data type you’re working with.
    
    ❓ Common Confusions
typeof null is "object" — this is a bug.
undefined means the variable was never assigned.
null means you intentionally set it to "nothing".
'5' + 1 is "51" but '5' - 1 is 4 . */
