import React from 'react';
import { useRouter } from '@curi/react-dom';

import cart from '../cart';

export default function Checkout({ response }) {
  const router = useRouter();
  const books = cart.items();
  if (!books.length) {
    return response.location.hash === 'thanks'
      ? <div>Thanks for your purchase!</div>
      : <div>The cart is currently empty</div>;
  }
  return (
    <div>
      <h1>Checkout</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.title}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        onClick={() => {
          cart.reset();
          const url = router.url({
            name: "Checkout",
            hash: "thanks"
          });
          router.navigate({ url, method: "replace" });
        }}
      >
        Buy
      </button>
    </div>
  );
};