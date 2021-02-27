import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const initStore = () => {
  return createStore(rootReducer, bindMiddleware([thunkMiddleware]))
};

const withReduxStore = createWrapper(initStore);

export default withReduxStore;