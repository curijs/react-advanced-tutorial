import React from 'react';
import { Prefetch, Link } from '@curi/react';

export default () => (
  <nav>
    <ul>
      <li>
        <Prefetch match={{ name: "Home" }}>
          {ref => <Link to="Home" ref={ref}>Home</Link>}
        </Prefetch>
      </li>
      <li>
        <Link to="Checkout">Checkout</Link>
      </li>
    </ul>
  </nav>
);
