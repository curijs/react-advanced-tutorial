import { prepareRoutes } from "@curi/router";
import { preferDefault } from "@curi/helpers";

export default prepareRoutes([
  {
    name: "Home",
    path: "",
    resolve: {
      body: () => import("./components/Home")
        .then(preferDefault),
      books: (match, external) => external.bookAPI.BOOKS()
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
    resolve: {
      body: () => import("./components/Book")
        .then(preferDefault),
      book: ({ params }, external) => external.bookAPI.BOOK(params.id)
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
        .then(preferDefault)
    },
    response({ resolved }) {
      return { body: resolved.body };
    }
  },
  {
    name: "Catch All",
    path: "(.*)",
    resolve: {
      body: () => import("./components/NotFound")
        .then(preferDefault)
    },
    response({ resolved }) {
      return { body: resolved.body };
    }
  }
]);
