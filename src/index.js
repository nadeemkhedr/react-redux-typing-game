import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import routes from './config/routes';
import configureStore from './store/configureStore';
import testData from './constants/testData';
import './styles/index.css';

const store = configureStore(testData);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
