import { authTypes } from '../../common/types';

const initialState = {
  isLogin: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.login:
      const newState = {
        ...state,
        isLogin: true,
      };
      return newState;
    case authTypes.logout:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
