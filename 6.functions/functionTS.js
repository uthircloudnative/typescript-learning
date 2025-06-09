function addNumbers(a, b) {
    return a + b;
}
var result = addNumbers(5, 10);
console.log("Result of addition: " + result);
// This will throw an error as addNumbers will only accepet type numer.
//result = addNumbers(20, '30');
function numberFun(a, b) {
    return a + b;
}
var result2 = numberFun(5, 10);
console.log("Result of addition with any type: " + result2);
var result3 = numberFun(5, '10');
console.log("Result of addition with any type: " + result3);
