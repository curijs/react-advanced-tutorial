import React from 'react';
import ReactDOM from 'react-dom';
import { createRouter } from '@curi/router';
import { browser } from '@hickory/browser';
import { createRouterComponent } from '@curi/react-dom';

import routes from './routes';
import './index.css';
import App from './components/App';
import * as bookAPI from './api';
import registerServiceWorker from './registerServiceWorker';

const router = createRouter(browser, routes, {
  external: {
    bookAPI
  }
});
const Router = createRouterComponent(router);

router.once(() => {
  ReactDOM.render((
    <Router>
      <App />
    </Router>
  ), document.getElementById('root'));
});

registerServiceWorker();
