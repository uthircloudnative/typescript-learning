var concatStringWithDefault = function (a, b = "World") {
    return a + b;
}

console.log(concatStringWithDefault("Hello, ")); // Output: Hello, World

console.log(concatStringWithDefault("Hello, ", "TypeScript!")); // Output: Hello, TypeScript!

//console.log(concatStringWithDefault("Hello, ", 1)); // wont allow due to default type of b is string

console.log(concatStringWithDefault(1, 'World')); // Output: 1World