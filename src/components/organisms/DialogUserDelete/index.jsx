import React, { useState } from 'react';

// Components
import { DialogActions, DialogContent } from '@mui/material';
import { DialogCustom } from '../../templates';
import { ButtonCustom, TextCustom } from '../../atoms';

const DialogUserDelete = ({
  open = false,
  setOpen = () => null,
  onDismiss = () => null,
}) => {
  const [loader, setLoader] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Eliminar Usuario"
      onDismiss={onDismiss}
    >
      <DialogContent style={{ width: 500 }}>
        <div className="flex flex-col relative items-center mt-4">
          {/* Cuerpo de la ventana modal */}
          <TextCustom text="Buena suerte!!!" className="text-3xl" />
        </div>
      </DialogContent>
      <DialogActions>
        <ButtonCustom
          text="Cancelar"
          typeColor="secondary"
          onClick={handleCancel}
        />
        {/* Botón Eliminar */}
      </DialogActions>
    </DialogCustom>
  );
};

export default DialogUserDelete;
