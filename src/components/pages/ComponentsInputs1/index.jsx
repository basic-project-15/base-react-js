import React, { useState } from 'react';

// Components
import { Divider } from '@mui/material';
import { TextCustom, TextInputCustom } from '../../atoms';

// Assets
import SendIcon from '@mui/icons-material/Send';
import ReplyIcon from '@mui/icons-material/Reply';

const ComponentsInputs1 = () => {
  const [nombre, setNombre] = useState('');

  return (
    <div>
      <TextCustom text="Componentes para TextInputs" className="text-6xl" />
      <Divider />
      {/* Variante de TextInputs */}
      <div className="px-4 pt-4">
        <TextCustom text="Variantes" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <TextInputCustom name="Por defecto" />
          <TextInputCustom name="Nombre" value={nombre} setValue={setNombre} />
          <TextInputCustom
            name="Nombre"
            value={nombre}
            setValue={setNombre}
            iconStart={<ReplyIcon />}
            iconEnd={<SendIcon />}
            msgError="hola"
            required
          />
          <TextInputCustom
            name="Nombre"
            value={nombre}
            setValue={setNombre}
            iconStart={<ReplyIcon />}
            iconEnd={<SendIcon />}
            iconMode="button"
            success
            required
          />
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default ComponentsInputs1;
