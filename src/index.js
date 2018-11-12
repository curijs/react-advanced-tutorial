import React from 'react';
import ReactDOM from 'react-dom';
import { curi } from '@curi/router';
import Browser from '@hickory/browser';
import { curiProvider } from '@curi/react-dom';

import routes from './routes';
import './index.css';
import NavMenu from './components/NavMenu';
import * as bookAPI from './api';
import registerServiceWorker from './registerServiceWorker';

const history = Browser();
const router = curi(history, routes, {
  external: {
    bookAPI
  }
});
const Router = curiProvider(router);

router.once(() => {
  ReactDOM.render((
    <Router>
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
    </Router>
  ), document.getElementById('root'));
});

registerServiceWorker();
