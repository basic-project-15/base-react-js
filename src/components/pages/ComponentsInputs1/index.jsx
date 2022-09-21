import React, { useState } from 'react';

// Components
import { Divider } from '@mui/material';
import { TextCustom, TextInputCustom } from '../../atoms';

const ComponentsInputs1 = () => {
  const [nombre, setNombre] = useState('');

  return (
    <div>
      <TextCustom text="Componentes para botones" className="text-6xl" />
      <Divider />
      {/* Variante de TextInputs */}
      <div className="px-4 pt-4">
        <TextCustom text="Variantes" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <TextInputCustom value={nombre} setValue={setNombre} />
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default ComponentsInputs1;
