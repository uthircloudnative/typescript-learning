var externalSchema:any = {name: 'John', age: 30};

// externalSchema will hold any type of values as its defined with type of any.
console.log(externalSchema);


externalSchema = {name: 'Alice', age: 25, address: {city: 'Wonderland', country: 'Fantasy'}};

console.log(externalSchema);


var mixedValues: any[] = [1, 'two', true, {key: 'value'}, [1, 2, 3]];

//Above declaration is valid as we defined mixedValues as type of any so it can hold any type of values.
console.log(mixedValues);

mixedValues = [42, 'forty-two', false, {anotherKey: 'anotherValue'}, ['a', 'b', 'c']];

console.log(mixedValues);