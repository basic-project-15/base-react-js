import React, { useState, useEffect } from 'react';

// Components
import { Divider } from '@mui/material';
import { AlertCustom, ButtonCustom, TextCustom } from '../../atoms';
import { DialogUserDelete, DialogUserEdit } from '../../organisms';
import { TableCustom } from '../../templates';

// Const
import { columnsUsers } from '../../../common/tables';
import { typesTableActions } from '../../../common/types';

// Services
import { apiGetUsers } from '../../../services/apis';

const { tableEdit } = typesTableActions;

const Configuration = () => {
  const [users, setUsers] = useState([]);
  const [idUser, setIdUser] = useState('');
  const [showEdit, setShowEdit] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState({
    title: '',
    description: '',
    severity: 'info',
  });

  useEffect(() => {
    loadUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetForm = () => {
    setShowAlert(false);
  };

  const loadUsers = async () => {
    resetForm();
    const response = await apiGetUsers();
    const { success, message, data } = response;
    if (success) {
      // Setear lista de usuarios
    } else {
      // Mostrar Alerta
    }
    // Detener Loader
  };

  const handleTableActions = (action, id, obj) => {
    setIdUser(id);
    switch (action) {
      case tableEdit:
        setShowEdit(true);
        break;
      default:
        setIdUser('');
        break;
    }
  };

  return (
    <div className="pb-4 flex flex-col">
      <TextCustom text="Configuración de usuarios" className="text-3xl" />
      <Divider />
      <div className="flex justify-end">
        <ButtonCustom
          text="Crear Usuario"
          className="my-3"
          onClick={() => console.log('Crear usuario')}
        />
      </div>
      <div className="px-4">
        <AlertCustom
          title={alert.title}
          description={alert.description}
          open={showAlert}
          setOpen={setShowAlert}
          severity={alert.severity}
        />
        <div className="flex flex-col relative">
          <TableCustom
            data={users}
            columns={columnsUsers}
            actions={[tableEdit]}
            actionClick={handleTableActions}
            // Ordenar registros por nombre por defecto
            identifierHidden="id"
            identifierAction="id"
          />
          {/* Loader? */}
        </div>
      </div>
      <DialogUserEdit
        idUser={idUser}
        open={showEdit}
        setOpen={setShowEdit}
        onDismiss={loadUsers}
      />
      <DialogUserDelete
        idUser={''}
        onDismiss={() => console.log('Actualizar tabla')}
      />
    </div>
  );
};

export default Configuration;
