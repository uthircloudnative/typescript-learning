var Book = /** @class */ (function () {
    function Book(id, title, yearPublished, rating) {
        this.id = id;
        this.title = title;
        this.yesrPublished = yearPublished;
        this.rating = rating;
    }
    Book.prototype.getBookDetails = function () {
        return "Book ID: ".concat(this.id, ", \n                Title: ").concat(this.title, ",\n                Year Published: ").concat(this.yesrPublished, ",\n                Rating: ").concat(this.rating !== undefined ? this.rating : 'Not Rated');
    };
    Book.prototype.getBookById = function (id) {
        if (this.id === id) {
            return this.getBookDetails();
        }
        else {
            return "Book with ID ".concat(id, " not found.");
        }
    };
    return Book;
}());
var book1 = new Book(1, "TypeScript Basics", 2023, 4.5);
var book2 = new Book(2, "Advanced TypeScript", 2024);
console.log(book1.getBookDetails());
console.log(book2.getBookDetails());
console.log(book1.getBookById(1));
console.log(book2.getBookById(2));
console.log(book1.getBookById(3));
