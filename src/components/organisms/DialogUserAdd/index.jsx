import React, { useState, useEffect } from 'react';

// Components
import { DialogActions, DialogContent } from '@mui/material';
import { DialogCustom } from '../../templates';
import {
  AlertCustom,
  ButtonCustom,
  Loader,
  TextInputCustom,
} from '../../atoms';

const DialogUserAdd = ({
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

  useEffect(() => {
    if (!open) {
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
  };

  const handleAccept = async () => {
    setShowAlert(false);
    if (handleValidForm()) {
      setLoader(true);
      const params = {
        name,
        email,
        password,
      };
      // Llamar al endpoint de crear usuario
      // Dependiendo de la respuesta realizar las acciones correspondientes
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
    return true;
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
      title="Crear Usuario"
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
          />
          <TextInputCustom
            name="Email"
            value={email}
            setValue={setEmail}
            className="mt-2"
            maxLength={30}
          />
          <TextInputCustom
            name="Contraseña"
            value={password}
            setValue={setPassword}
            className="mt-2"
            type="password"
            maxLength={25}
          />
          <TextInputCustom
            name="Confirmar contraseña"
            value={confirmPassword}
            setValue={setConfirmPassword}
            className="mt-2"
            maxLength={25}
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

export default DialogUserAdd;
