interface Book {
    id: number;
    title: string;
    author: string;
    yearPublished: number;
    // Optional property
    rating?: number;
}

function displayBookDetails(book: Book) {
    console.log(`Book ID: ${book.id}, 
                 Title: ${book.title},
                 Authodr: ${book.author},
                 Year Published: ${book.yearPublished},
                 Rating: ${book.rating? book.rating : 'Not Rated'}`);
}

displayBookDetails(
    {   id: 1,
        title: "TypeScript Basics",
        author: "Person A",
        yearPublished: 2023,
        rating: 4.5             
}
)

// Calling without optional property
displayBookDetails(
    {   id: 1,
        title: "TypeScript Basics",
        author: "Person A",
        yearPublished: 2023,
             
}
)


// This will give compile time error as we are missing one mandatory property in Book Object.
// displayBookDetails(
//     {   id: 1,
//         title: "TypeScript Basics",
//         author: "Person A",
                
// }
// )