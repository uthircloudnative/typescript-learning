// What is an intersection type in TypeScript?
// An intersection type in TypeScript allows you to combine multiple types into one. This means that a variable of an intersection type will have all the properties and methods of the combined types. Intersection types are created using the `&` operator.
// This is useful when you want to create a type that has the properties of multiple types, ensuring that the variable adheres to all of them.
// Example of intersection type in TypeScript
interface AuthorData {
    name: string;
    age: number;
}
interface BookData {
    title: string;
    yearPublished: number;
}

type BookDetailsInfo = AuthorData & BookData;

let bookDetailsInfo: BookDetailsInfo = {
    name: "John Doe",
    age: 45,
    title: "TypeScript Basics",
    yearPublished: 2023
}

console.log(bookDetailsInfo);
console.log(`Author: ${bookDetailsInfo.name}, Age: ${bookDetailsInfo.age}, Title: ${bookDetailsInfo.title}, Year Published: ${bookDetailsInfo.yearPublished}`);
// In this example, `BookDetailsInfo` is an intersection type that combines `AuthorData` and `BookData`.
// The `bookDetailsInfo` variable must have all the properties from both interfaces, ensuring that it contains complete information about the author and the book.
// This allows for more flexible and reusable code, as you can create complex types that represent multiple aspects of your data model.
// Intersection types can also be used with classes, functions, and other complex types, providing a powerful way to model relationships between different data structures in TypeScript.
// You can also use intersection types with functions to ensure that the function parameters adhere to multiple type contracts.
function displayBookDetails(book: BookDetailsInfo) {
    console.log(`Author: ${book.name}, Age: ${book.age}, Title: ${book.title}, Year Published: ${book.yearPublished}`);
}



