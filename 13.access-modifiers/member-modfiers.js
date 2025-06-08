var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * In TS all the class by default are public. Other than public no other access modifiers are applicable for classee.
 *
 * Each class members (properties and methods) can have its own access modifier.
 *
 * Possible access modifiers for class members are:
 *   - public: Members are accessible from anywhere.
 *   - private: Members are accessible only within the class. Value can be changed once initialized.
 *   - protected: Members are accessible within the class and its subclasses.
 *   - readonly: Value can be assigned only once at time of declaration or in constructor. After that it cannot be changed. But it can be accessed from anywhere.
 *
 */
var BookDetails = /** @class */ (function () {
    function BookDetails(title, author, year, isbn) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isbn = isbn; // readonly property can be assigned only once
    }
    BookDetails.prototype.getDetails = function () {
        return "".concat(this.title, " by ").concat(this.author, ", published in ").concat(this.year, ". ISBN: ").concat(this.isbn);
    };
    return BookDetails;
}());
var ExtendedBookDetails = /** @class */ (function (_super) {
    __extends(ExtendedBookDetails, _super);
    function ExtendedBookDetails(title, author, year, isbn, genre) {
        var _this = _super.call(this, title, author, year, isbn) || this;
        _this.genre = genre;
        return _this;
    }
    ExtendedBookDetails.prototype.getExtendedDetails = function () {
        return "".concat(this.getDetails(), ", Genre: ").concat(this.genre);
    };
    return ExtendedBookDetails;
}(BookDetails));
// Example usage
var book = new BookDetails("TypeScript Basics", "John Doe", 2023, "123-456-789");
console.log(book.getDetails());
var extendedBook = new ExtendedBookDetails("Advanced TypeScript", "Jane Smith", 2024, "987-654-321", "Programming");
console.log(extendedBook.getExtendedDetails());
// Trying to access private and protected members will result in an error
// console.log(book.author); // Error: Property 'author' is private and only accessible within class 'BookDetails'.
// console.log(book.year); // Error: Property 'year' is protected and only accessible within class 'BookDetails' and its subclasses.
// console.log(book.isbn); // This is allowed as isbn is readonly and can be accessed from anywhere.
// Trying to change readonly property will result in an error
// book.isbn = "111-222-333"; // Error: Cannot assign to 'isbn' because it is a read-only property.
// Trying to access private member from subclass will result in an error
// console.log(extendedBook.author); // Error: Property 'author' is private and only accessible within class 'BookDetails'.
// console.log(extendedBook.year); // Error: Property 'year' is protected and only accessible within class 'BookDetails' and its subclasses.
// console.log(extendedBook.isbn); // This is allowed as isbn is readonly and can be accessed from anywhere.
// Trying to change readonly property in subclass will result in an error
// extendedBook.isbn = "222-333-444"; // Error: Cannot assign to 'isbn' because it is a read-only property.
// Trying to access private member from outside the class will result in an error
// console.log(book.genre); // Error: Property 'genre' is private and only accessible within class 'ExtendedBookDetails'.
// console.log(extendedBook.genre); // Error: Property 'genre' is private and only accessible within class 'ExtendedBookDetails'.
// Trying to access protected member from outside the class will result in an error
// console.log(book.year); // Error: Property 'year' is protected and only accessible within class 'BookDetails' and its subclasses.
// console.log(extendedBook.year); // Error: Property 'year' is protected and only accessible within class 'BookDetails' and its subclasses.
// Trying to access public member from outside the class will work
console.log(book.title); // This is allowed as title is public and can be accessed from anywhere.
console.log(extendedBook.title); // This is allowed as title is public and can be accessed from anywhere.
// Trying to change public member from outside the class will work
book.title = "TypeScript Advanced"; // This is allowed as title is public and can be changed from anywhere.
extendedBook.title = "Advanced TypeScript Pro"; // This is allowed as title is public and can be changed from anywhere.
console.log(book.getDetails()); // This is allowed as getDetails() is public and can be accessed from anywhere.
console.log(extendedBook.getExtendedDetails()); // This is allowed as getExtendedDetails() is public and can be accessed from anywhere.
// Trying to change private member from outside the class will result in an error
// book.author = "Jane Doe"; // Error: Property 'author' is private and only accessible within class 'BookDetails'.
// extendedBook.author = "John Smith"; // Error: Property 'author' is private and only accessible within class 'BookDetails'.
// Trying to change protected member from outside the class will result in an error
// book.year = 2025; // Error: Property 'year' is protected and only accessible within class 'BookDetails' and its subclasses.
// extendedBook.year = 2026; // Error: Property 'year' is protected and only accessible within class 'BookDetails' and its subclasses.
// Trying to change readonly member from outside the class will result in an error
// book.isbn = "111-222-333"; // Error: Cannot assign to 'isbn' because it is a read-only property.             
