var user = {name: "Alice", age: 30};

console.log(user);

// Below code will give error as user is defined with name and age but age is missing.
//user = {name: "Alice"};


//Extra properties can be added to the object in TypeScript
user = {name: "Alice", age: 45, address: {"city": "New York", "country": "USA"}};

console.log(user);

// In TS below code will give error as user is defined as object with name and age properties.
//user = {age:45};


//user = {age:45};

//user = {address: {"city": "New York", "country": "USA"}};

//console.log(user);