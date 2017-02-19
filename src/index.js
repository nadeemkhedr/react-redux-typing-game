import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import testData from './constants/testData';
import './styles/index.css';

import App from './components/App';

const store = configureStore(testData);

ReactDOM.render(
  <Provider store={store}>
    <App>React</App>
  </Provider>,
  document.getElementById('root')
);
