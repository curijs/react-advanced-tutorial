import React from 'react';
import { useRouter } from '@curi/react-dom';

import cart from '../cart';

export default function Book({ response }) {
  const router = useRouter();
  const { book } = response.data;
  if (!book) {
    return <div>The requested book could not be found</div>;
  }
  return (
    <div>
      <h1>{book.title}</h1>
      <h2>by {book.author}</h2>
      <p>Published in {book.published}</p>
      <p>{book.pages} pages</p>
      <button
        type="button"
        onClick={() => {
          cart.add(book, 1);
          const url = router.url({ name: "Checkout" });
          router.navigate({ url });
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
