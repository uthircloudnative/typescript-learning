var bookDetailsInfo = {
    name: "John Doe",
    age: 45,
    title: "TypeScript Basics",
    yearPublished: 2023
};
console.log(bookDetailsInfo);
console.log("Author: ".concat(bookDetailsInfo.name, ", Age: ").concat(bookDetailsInfo.age, ", Title: ").concat(bookDetailsInfo.title, ", Year Published: ").concat(bookDetailsInfo.yearPublished));
// In this example, `BookDetailsInfo` is an intersection type that combines `AuthorData` and `BookData`.
// The `bookDetailsInfo` variable must have all the properties from both interfaces, ensuring that it contains complete information about the author and the book.
// This allows for more flexible and reusable code, as you can create complex types that represent multiple aspects of your data model.
// Intersection types can also be used with classes, functions, and other complex types, providing a powerful way to model relationships between different data structures in TypeScript.
// You can also use intersection types with functions to ensure that the function parameters adhere to multiple type contracts.
function displayBookDetails(book) {
    console.log("Author: ".concat(book.name, ", Age: ").concat(book.age, ", Title: ").concat(book.title, ", Year Published: ").concat(book.yearPublished));
}
