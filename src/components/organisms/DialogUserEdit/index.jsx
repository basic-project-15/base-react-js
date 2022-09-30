import React, { useState, useEffect } from 'react';

// Hooks
import { useForm } from '../../../hooks/others';

// Components
import { DialogActions, DialogContent } from '@mui/material';
import { DialogCustom } from '../../templates';
import {
  AlertCustom,
  ButtonCustom,
  Loader,
  TextInputCustom,
} from '../../atoms';

// Const
import { typesValidation } from '../../../common/types';

// Core
import { formValidEditUser } from '../../../core/validations';
import { apiGetUser, apiPatchUser } from '../../../services/apis';

const DialogUserEdit = ({
  idUser = '',
  open = false,
  setOpen = () => null,
  onDismiss = () => null,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loader, setLoader] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState({
    title: '',
    description: '',
    severity: 'info',
  });
  const [formErrors, setFormErrors, resetFormErrors] = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [formSuccess, setFormSuccess, resetFormSuccess] = useForm({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  useEffect(() => {
    if (open) {
      loadUser();
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setLoader(false);
    setShowAlert(false);
    resetFormErrors();
    resetFormSuccess();
  };

  const loadUser = async () => {
    setLoader(true);
    const params = { idUser };
    const response = await apiGetUser(params);
    const { success, message, data } = response;
    if (success) {
      setName(data.user.name);
      setEmail(data.user.email);
      setPassword('');
      setConfirmPassword('');
    } else {
      setShowAlert(true);
      setAlert({
        title: 'Error',
        description: message,
        severity: 'warning',
      });
    }
    setLoader(false);
  };

  const handleAccept = async () => {
    setShowAlert(false);
    if (handleValidForm()) {
      setLoader(true);
      const params = {
        idUser,
        name,
        email,
        password,
      };
      const response = await apiPatchUser(params);
      const { success, message } = response;
      if (success) {
        setOpen(false);
        onDismiss();
      } else {
        setShowAlert(true);
        setAlert({
          title: 'Error',
          description: message,
          severity: 'error',
        });
      }
      setLoader(false);
    }
  };

  const handleValidForm = () => {
    const params = {
      name,
      email,
      password,
      confirmPassword,
    };
    const response = formValidEditUser(params);
    setFormErrors(response.msgValid.errors);
    setFormSuccess(response.msgValid.success);
    return response.isValid;
  };

  const handleCancel = () => {
    setOpen(false);
    resetForm();
  };

  const handleDismiss = () => {
    resetForm();
  };

  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Editar Usuario"
      onDismiss={handleDismiss}
    >
      <DialogContent style={{ width: 500 }}>
        <AlertCustom
          title={alert.title}
          description={alert.description}
          open={showAlert}
          setOpen={setShowAlert}
          severity={alert.severity}
        />
        <div className="flex flex-col relative">
          <TextInputCustom
            name="Nombre"
            value={name}
            setValue={setName}
            className="mt-2"
            maxLength={50}
            required
            typesValidation={typesValidation.onlyLettersExtend}
            msgError={formErrors.name}
            success={formSuccess.name}
          />
          <TextInputCustom
            name="Email"
            value={email}
            setValue={setEmail}
            className="mt-2"
            maxLength={30}
            required
            msgError={formErrors.email}
            success={formSuccess.email}
          />
          <TextInputCustom
            name="Contraseña"
            value={password}
            setValue={setPassword}
            className="mt-2"
            type="password"
            maxLength={25}
            msgError={formErrors.password}
            success={formSuccess.password}
          />
          <TextInputCustom
            name="Confirmar contraseña"
            value={confirmPassword}
            setValue={setConfirmPassword}
            className="mt-2"
            type="password"
            maxLength={25}
            msgError={formErrors.confirmPassword}
            success={formSuccess.confirmPassword}
          />
          {loader && <Loader mode="modal" />}
        </div>
      </DialogContent>
      <DialogActions>
        <ButtonCustom
          text="Cancelar"
          typeColor="secondary"
          onClick={handleCancel}
        />
        <ButtonCustom
          text="Guardar"
          typeColor="primary"
          onClick={handleAccept}
        />
      </DialogActions>
    </DialogCustom>
  );
};

export default DialogUserEdit;
