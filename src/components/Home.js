import React from 'react';
import { AsyncLink } from '@curi/react-dom';
import Spinner from "react-spinkit";

export default function Home({ response }) {
  return (
    <div>
      <ul>
        {response.data.books.map(book => (
          <li key={book.id}>
            <AsyncLink name="Book" params={{ id: book.id }} >
              {navigating => (
                <React.Fragment>
                  {book.title} by {book.author}
                  {navigating ? <Spinner /> : null}
                </React.Fragment>
              )}
            </AsyncLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
