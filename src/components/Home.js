import React from 'react';
import { Link } from '@curi/react';
import Spinner from "react-spinkit";

export default ({ response }) => (
  <div>
    <ul>
      {response.data.books.map(book => (
        <li key={book.id}>
          <Link to="Book" params={{ id: book.id }} >
            {navigating => (
              <React.Fragment>
                {book.title} by {book.author}
                {navigating ? <Spinner /> : null}
              </React.Fragment>
            )}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
