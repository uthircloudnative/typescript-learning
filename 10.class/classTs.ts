class Book {

    id: number;
    title: string;
    yesrPublished: number;
    rating?: number; // Optional property

    constructor(id: number, title: string, yearPublished: number, rating?: number) {
        this.id = id;
        this.title = title;
        this.yesrPublished = yearPublished;
        this.rating = rating;
    }


    getBookDetails(){
        return `Book ID: ${this.id}, 
                Title: ${this.title},
                Year Published: ${this.yesrPublished},
                Rating: ${this.rating !== undefined ? this.rating : 'Not Rated'}`;
    }

    getBookById(id: number) {
        if (this.id === id) {
            return this.getBookDetails();
        } else {
            return `Book with ID ${id} not found.`;
        }
    }

}

let book1 = new Book(1, "TypeScript Basics", 2023, 4.5);
let book2 = new Book(2, "Advanced TypeScript", 2024);


console.log(book1.getBookDetails());
console.log(book2.getBookDetails());
console.log(book1.getBookById(1));
console.log(book2.getBookById(2));
console.log(book1.getBookById(3));

