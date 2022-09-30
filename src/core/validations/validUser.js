import { typesValidation } from '../../common/types';
import { validInputEmail } from './validateInput';

const { validateEmail } = typesValidation;

export const formValidUser = user => {
  const dataResponse = {
    isValid: true,
    msgValid: {
      errors: null,
      success: null,
    },
  };
  let isValid = true;
  let inputsError = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  let inputsSuccess = {
    name: true,
    email: true,
    password: true,
    confirmPassword: true,
  };
  if (!user.name) {
    inputsError.name = 'Nombre no ha sido asignado.\n';
    inputsSuccess.name = false;
    isValid = false;
  }
  if (!user.email) {
    inputsError.email = 'Correo no ha sido asignado.\n';
    inputsSuccess.email = false;
    isValid = false;
  }
  if (!user.password) {
    inputsError.password = 'Contraseña no ha sido asignada.\n';
    inputsSuccess.password = false;
    isValid = false;
  }
  if (!user.confirmPassword) {
    inputsError.confirmPassword = 'Contraseña no ha sido asignada.\n';
    inputsSuccess.confirmPassword = false;
    isValid = false;
  }
  if (!inputsError.email && !validInputEmail(user.email, validateEmail)) {
    inputsError.email = 'Correo no válido.\n';
    inputsSuccess.email = false;
    isValid = false;
  }
  if (!inputsError.confirmPassword && user.password !== user.confirmPassword) {
    inputsError.confirmPassword = 'Las contraseñas no coinciden.\n';
    inputsSuccess.confirmPassword = false;
    isValid = false;
  }
  dataResponse.isValid = isValid;
  dataResponse.msgValid.errors = inputsError;
  dataResponse.msgValid.success = inputsSuccess;
  return dataResponse;
};
