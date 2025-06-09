function displayBookDetails(book) {
    console.log("Book ID: ".concat(book.id, ", \n                 Title: ").concat(book.title, ",\n                 Authodr: ").concat(book.author, ",\n                 Year Published: ").concat(book.yearPublished, ",\n                 Rating: ").concat(book.rating ? book.rating : 'Not Rated'));
}
displayBookDetails({ id: 1,
    title: "TypeScript Basics",
    author: "Person A",
    yearPublished: 2023,
    rating: 4.5
});
// Calling without optional property
displayBookDetails({ id: 1,
    title: "TypeScript Basics",
    author: "Person A",
    yearPublished: 2023,
});
// This will give compile time error as we are missing one mandatory property in Book Object.
// displayBookDetails(
//     {   id: 1,
//         title: "TypeScript Basics",
//         author: "Person A",
// }
// )
