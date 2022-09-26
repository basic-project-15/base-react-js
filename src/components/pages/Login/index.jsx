import React, { useContext, useState } from 'react';

// Hooks
import { AuthContext } from '../../../hooks/context';
import { useForm } from '../../../hooks/others';

// Components
import {
  AlertCustom,
  ButtonCustom,
  TextCustom,
  TextInputCustom,
} from '../../atoms';

// Const
import { typesActionsAuth } from '../../../common/types';

// Core
import { formValidLogin } from '../../../core/validations';

const { authLogin } = typesActionsAuth;

const Login = () => {
  const { dispatchAuth } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Validations
  const [showAlert, setShowAlert] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);
  const [formErrors, setFormErrors, resetFormErrors] = useForm({
    email: '',
    password: '',
  });
  const [formSuccess, setFormSuccess, resetFormSuccess] = useForm({
    email: false,
    password: false,
  });
  const [alert, setAlert, resetAlert] = useForm({
    title: '',
    description: '',
    severity: '',
  });

  const resetForm = () => {
    resetFormErrors();
    resetFormSuccess();
    resetAlert();
    setEmail('');
    setPassword('');
  };

  const handleLogin = () => {
    if (isValidForm) {
      const params = { email, password };
      const payload = {
        personalInfo: params,
        token: 'test',
      };
      dispatchAuth({ type: authLogin, payload });
      resetForm();
    }
  };

  const handleValidForm = () => {
    const params = { email, password };
    const responseValid = formValidLogin(params);
    const { isValid, msgValid } = responseValid;
    setFormErrors(msgValid.errors);
    setFormSuccess(msgValid.success);
    setIsValidForm(isValid);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-700">
      <div className="bg-white w-96 px-6 py-8 flex flex-col gap-4 rounded-xl">
        <TextCustom
          text="Inicio de sesión"
          className="self-center text-2xl fontPBold color-general rounded-lg"
        />
        <AlertCustom
          title={alert.title}
          description={alert.description}
          open={showAlert}
          resetValues={setShowAlert}
          severity={alert.severity}
        />
        <TextInputCustom
          name="Correo"
          type="email"
          value={email}
          setValue={setEmail}
          onBlur={handleValidForm}
          msgError={formErrors.email}
          success={formSuccess.email}
        />
        <TextInputCustom
          name="Contraseña"
          type="password"
          value={password}
          setValue={setPassword}
          onBlur={handleValidForm}
          onEnter={handleLogin}
          msgError={formErrors.password}
          success={formSuccess.password}
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
