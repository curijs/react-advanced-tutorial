import React from 'react';
import ReactDOM from 'react-dom';
import curi from '@curi/router';
import Browser from '@hickory/browser';
import prefetch from '@curi/route-prefetch';
import { CuriProvider } from '@curi/react';

import './index.css';
import routes from './routes';
import NavMenu from './components/NavMenu';
import registerServiceWorker from './registerServiceWorker';

const history = Browser();
const router = curi(history, routes, {
  route: [prefetch()]
});

router.respond(() => {
  ReactDOM.render((
    <CuriProvider router={router}>
      {({ response, router }) => {
        const { body:Body } = response;
        return (
          <div>
            <header>
              <NavMenu />
            </header>
            <main>
              <Body response={response} router={router} />
            </main>
          </div>
        );
      }}
    </CuriProvider>
  ), document.getElementById('root'));
});

registerServiceWorker();
