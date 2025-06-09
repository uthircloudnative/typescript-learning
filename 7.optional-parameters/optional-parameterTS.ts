var concatinateStrings = function(a, b, c) {
    return a + b + c;
}

console.log(concatinateStrings("Hello, ", "world", "!")); // Output: Hello, world!

// This will throw an error as the third parameter is not optional.
//console.log(concatinateStrings("Hello, ", "world"));


var concatinateStringsWithOptional = function(a, b, c?) {
    return a + b + c;
}

// This will work as we made third parameter optional.
console.log(concatinateStringsWithOptional("Hello, ", "world"));

// This will work as we declard our function with out any type for arguments. So it can accept ant type of values.
console.log(concatinateStringsWithOptional("Hello, ", 1, "world"));


var concatinateStringsWithOptionalWithType = function(a:string, b:string, c?:string) {
    return a + b + c;
}

console.log(concatinateStringsWithOptional("Hello, ", "world"));

console.log(concatinateStringsWithOptional("Hello, ", 1, "world"));


