import books from "./books";

export const BOOKS = () => new Promise(resolve => {
  // artificial delay
  setTimeout(() => {
    resolve(books);
  }, 1000);
});

const BOOK_CACHE = {};
export const BOOK = id => new Promise(resolve => {
  if (BOOK_CACHE[id]) {
    resolve(BOOK_CACHE[id]);
    return;
  }
  const intID = parseInt(id, 10);
  // artificial delay on first call
  setTimeout(() => {
    const book = books.find(b => b.id === intID);
    BOOK_CACHE[id] = book;
    resolve(book);
  }, 2500);
});
