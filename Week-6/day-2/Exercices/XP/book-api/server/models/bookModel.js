let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 }
];

let nextId = 3;

module.exports = {
  getBooks: () => books,
  getBookById: (id) => books.find(book => book.id === parseInt(id)),
  addBook: (book) => {
    const newBook = { id: nextId++, ...book };
    books.push(newBook);
    return newBook;
  }
};