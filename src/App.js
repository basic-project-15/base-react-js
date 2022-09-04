import React, { useReducer } from 'react';

// Hooks
import { AuthContext, authReducer } from './hooks';

// Components
import { Typography } from '@mui/material';

const App = () => {
  const [auth, dispatchAuth] = useReducer(authReducer, {});

  return (
    <AuthContext.Provider value={{ auth, dispatchAuth }}>
      <div className="flex w-full bg-blue-400 h-screen justify-center items-center">
        <Typography
          variant="h1"
          component="h2"
          style={{ fontFamily: 'Poppins-Regular' }}
        >
          Hola Mundo
        </Typography>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
