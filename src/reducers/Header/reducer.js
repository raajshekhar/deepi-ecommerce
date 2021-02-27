import { SET_SITE_NAME } from "./action";


const initialState = {
    siteName: 'Deepi Eommerce'
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SITE_NAME:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export const getHeader = state => state.headerReducer;

export default headerReducer;

