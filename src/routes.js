import { BOOKS, BOOK } from "./api";

export default [
  {
    name: "Home",
    path: "",
    on: {
      initial: () => Promise.all([
        import("./components/Home")
          .then(module => module.default),
        BOOKS()
      ])
    },
    response({ resolved }) {
      const [body, books] = resolved.initial;
      return {
        body,
        data: { books }
      };
    }
  },
  {
    name: "Book",
    path: "book/:id",
    params: {
      id: id => parseInt(id, 10)
    },
    on: {
      initial: () => import("./components/Book")
        .then(module => module.default),
      every: ({ params }) => BOOK(params.id)
    },
    response({ resolved }) {
      return {
        body: resolved.initial,
        data: { book: resolved.every }
      };
    }
  },
  {
    name: "Checkout",
    path: "checkout",
    on: {
      initial: () => import("./components/Checkout")
      .then(module => module.default)
    },
    response({ resolved }) {
      return {
        body: resolved.initial
      };
    }
  },
  {
    name: "Catch All",
    path: "(.*)",
    on: {
      initial: () => import("./components/NotFound")
      .then(module => module.default)
    },
    response({ resolved }) {
      return {
        body: resolved.initial
      };
    }
  }
];