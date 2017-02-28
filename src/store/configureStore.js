import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleware = [thunk];
let applyMiddlewareConfig = applyMiddleware(...middleware);

if (process.env.NODE_ENV !== 'production') {
  applyMiddlewareConfig = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
}

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddlewareConfig);
}
