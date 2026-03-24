const Book = require("./book");
const EBook = require("./ebook");

const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const ebook1 = new EBook("Clean Code", "Robert C. Martin", 2008, "PDF");


book1.printInfo();
book2.printInfo();
ebook1.printInfo();

console.log("-----");


book1.title = "Animal Farm";
book1.author = "George Orwell";
book1.year = 1945;

ebook1.fileFormat = "EPUB";

console.log(book1.title);
console.log(book1.author);
console.log(book1.year);
console.log(ebook1.fileFormat);

console.log("-----");


const books = [
  book1,
  book2,
  ebook1
];

const oldestBook = Book.getOldestBook(books);
console.log("Найдавніша книга:");
oldestBook.printInfo();

console.log("-----");


const ebook2 = EBook.fromBook(book2, "MOBI");
ebook2.printInfo();