import React, { useContext } from 'react';

// Hooks
import { AuthContext } from '../../../hooks/context';

// Components
import { Button } from '@mui/material';

// Const
import { typesActionsAuth } from '../../../common/types';

const Login = () => {
  const { dispatchAuth } = useContext(AuthContext);

  const handleLogin = () => {
    dispatchAuth({ type: typesActionsAuth.authLogin });
  };

  return (
    <div>
      <h1 className="mb-4">Login</h1>
      <Button variant="outlined" onClick={handleLogin}>
        Iniciar sesión
      </Button>
    </div>
  );
};

export default Login;
