import { createStore, applyMiddleware, compose } from 'redux';
import authMiddleware from 'src/middleware/auth';
import logMiddleware from 'src/middleware/log';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, /* preloadedState, */
  composeEnhancers(
    applyMiddleware(
      logMiddleware,
      authMiddleware,
    ),
  ),
  // eslint-disable-next-line no-underscore-dangle
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
