import { BOOKS, BOOK } from "./api";
import { once } from "@curi/router";

export default [
  {
    name: "Home",
    path: "",
    resolve: {
      body: () => import("./components/Home")
        .then(module => module.default),
      books: once(() => BOOKS())
    },
    response({ resolved }) {
      return {
        body: resolved.body,
        data: { books: resolved.books }
      };
    }
  },
  {
    name: "Book",
    path: "book/:id",
    params: {
      id: id => parseInt(id, 10)
    },
    resolve: {
      body: () => import("./components/Book")
        .then(module => module.default),
      book: ({ params }) => BOOK(params.id)
    },
    response({ resolved }) {
      return {
        body: resolved.body,
        data: { book: resolved.book }
      };
    }
  },
  {
    name: "Checkout",
    path: "checkout",
    resolve: {
      body: () => import("./components/Checkout")
        .then(module => module.default)
    },
    response({ resolved }) {
      return {
        body: resolved.body
      };
    }
  },
  {
    name: "Catch All",
    path: "(.*)",
    resolve: {
      body: () => import("./components/NotFound")
        .then(module => module.default)
    },
    response({ resolved }) {
      return {
        body: resolved.body
      };
    }
  }
];