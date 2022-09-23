import React, { useState } from 'react';
import AlertCustom from '../../atoms/AlertCustom';

const ComponentsAlert = () => {
  const [alertInfo, setAlertInfo] = useState(true);
  const [alertSuccess, setAlertSuccess] = useState(true);
  const [alertWarning, setAlertWarning] = useState(true);
  const [alertError, setAlertError] = useState(true);

  return (
    <div>
      <AlertCustom
        open={alertInfo}
        setOpen={setAlertInfo}
        title="Información"
        description="Descripción de información"
        severity="info"
      />
      <AlertCustom
        open={alertSuccess}
        setOpen={setAlertSuccess}
        title="Exitoso"
        description="Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso"
        severity="success"
      />
      <AlertCustom
        open={alertWarning}
        setOpen={setAlertWarning}
        title="Advertencia"
        description="Descripción de advertencia"
        severity="warning"
      />
      <AlertCustom
        open={alertError}
        setOpen={setAlertError}
        title="Error"
        description="Descripción de error"
        severity="error"
      />
    </div>
  );
};

export default ComponentsAlert;
