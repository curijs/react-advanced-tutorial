import { once } from "@curi/helpers";
import books from "./books";

// artificial delay on initial load
export const BOOKS = once(() => new Promise(resolve => {
  setTimeout(() => {
    resolve(books);
  }, 1000);
}));

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
