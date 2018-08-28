import createHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createStore } from 'redux';

import reducers from './containers/reducers';
import Routes from './containers/routes';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers);
const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

registerServiceWorker();
