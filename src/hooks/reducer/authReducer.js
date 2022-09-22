import { typesActionsAuth } from '../../common/types';

const initialState = {
  isLogin: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesActionsAuth.authLogin:
      const newState = {
        ...state,
        isLogin: true,
      };
      return newState;
    case typesActionsAuth.authLogout:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
