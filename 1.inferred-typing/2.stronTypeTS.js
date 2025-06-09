// TypeScript is a strongly typed language. Here var langName is implicitly defied as type of string.
var langName = "TypeScript";
console.log("Language Name: " + langName);
console.log("We cannot use langName variable other than String" + langName + 1);
// In javaScript, we can able to assign a string variable to number of any other data type.
// But in TypeScript its not allowed. As its strongly typed.
//langName = 10; 
// // Below function definition is not allowed in TypeScript.
// // As the function is defined to return a string, but it is returning a number.
// langName = function(numb1, numb2) {
//     return numb1 + numb2;
// }
