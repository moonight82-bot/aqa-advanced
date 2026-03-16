class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (value.length === 0) {
      throw new Error("Title cannot be empty");
    }
    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (value.length === 0) {
      throw new Error("Author cannot be empty");
    }
    this._author = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (value <= 0) {
      throw new Error("Year must be greater than 0");
    }
    this._year = value;
  }

  printInfo() {
    console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}`);
  }

  static getOldestBook(books) {
    let oldest = books[0];

    for (const book of books) {
      if (book.year < oldest.year) {
        oldest = book;
      }
    }

    return oldest;
  }
}

module.exports = Book;