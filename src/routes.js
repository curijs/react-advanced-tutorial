import { prepareRoutes } from "@curi/router";
import { preferDefault } from "@curi/helpers";

export default prepareRoutes([
  {
    name: "Home",
    path: "",
    resolve(_, external) {
      const body = import("./components/Home").then(preferDefault);
      const books = external.bookAPI.BOOKS();
      return Promise.all([ body, books ]);
    },
    respond({ resolved }) {
      const [body, books] = resolved;
      return {
        body,
        data: { books }
      };
    }
  },
  {
    name: "Book",
    path: "book/:id",
    resolve({ params }, external) {
      const body = import("./components/Book").then(preferDefault);
      const book = external.bookAPI.BOOK(params.id);
      return Promise.all([ body, book ]);
    },
    respond({ resolved }) {
      const [body, book] = resolved;
      return {
        body,
        data: { book }
      };
    }
  },
  {
    name: "Checkout",
    path: "checkout",
    resolve() {
      return import("./components/Checkout").then(preferDefault);
    },
    respond({ resolved }) {
      return { body: resolved };
    }
  },
  {
    name: "Catch All",
    path: "(.*)",
    resolve() {
      return import("./components/NotFound").then(preferDefault);
    },
    respond({ resolved }) {
      return { body: resolved };
    }
  }
]);
