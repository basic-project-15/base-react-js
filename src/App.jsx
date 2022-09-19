import React, { useReducer } from 'react';

// Hooks
import { AuthContext, authReducer } from './hooks';

// Components
import { AppRouter } from './components/routes';

const App = () => {
  const [auth, dispatchAuth] = useReducer(authReducer, {});

  return (
    <AuthContext.Provider value={{ auth, dispatchAuth }}>
      <AppRouter isAuth={auth?.isLogin} />
    </AuthContext.Provider>
  );
};

export default App;
