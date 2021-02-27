import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import headerReducer from './Header/reducer';

const appReducer = combineReducers({
    headerReducer
});

const rootReducer = (state, action) => {
  if (action.type === HYDRATE || action.type === '__NEXT_REDUX_STORE__') {
    const nextState = {
      ...state, // use previous state
      ...action.payload // apply delta from hydration
    };
    return nextState;
  } else {
    return appReducer(state, action);
  }
};

export default rootReducer;