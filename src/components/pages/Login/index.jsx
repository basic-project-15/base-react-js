import React, { useContext, useState } from 'react';

// Hooks
import { AuthContext } from '../../../hooks/context';

// Components
import { ButtonCustom, TextCustom, TextInputCustom } from '../../atoms';

// Const
import { typesActionsAuth } from '../../../common/types';

const Login = () => {
  const { dispatchAuth } = useContext(AuthContext);
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatchAuth({ type: typesActionsAuth.authLogin });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-700">
      <div className="bg-white w-96 px-6 py-8 flex flex-col gap-4 rounded-xl">
        <TextCustom
          text="Inicio de sesión"
          className="self-center text-2xl fontPBold color-general rounded-lg"
        />
        <TextInputCustom
          name="Correo"
          type="email"
          value={correo}
          setValue={setCorreo}
        />
        <TextInputCustom
          name="Contraseña"
          type="password"
          value={password}
          setValue={setPassword}
        />
        <ButtonCustom
          text="Ingresar"
          onClick={handleLogin}
          className="w-full"
          typeColor="primary"
        />
      </div>
    </div>
  );
};

export default Login;
