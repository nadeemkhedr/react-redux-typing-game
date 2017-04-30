import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import routes from './config/routes';
import configureStore from './store/configureStore';
import testData from './constants/testData';
import './styles/index.css';

const store = configureStore(testData);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
