import React from 'react';

import cart from '../cart';

export default ({ router, response }) => {
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
          router.navigate({
            name: "Checkout",
            hash: "thanks",
            method: "REPLACE"
          });
        }}
      >
        Buy
      </button>
    </div>
  );
};