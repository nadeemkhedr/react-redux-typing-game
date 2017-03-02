import React from 'react';
import App from '../components/App';
import Game from '../components/Game';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Game} />
  </Route>
);
