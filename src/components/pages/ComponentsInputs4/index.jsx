import React, { useState } from 'react';

// Components
import { Divider } from '@mui/material';
import { SelectCustom, TextCustom } from '../../atoms';

const ComponentsInputs4 = () => {
  const [genero, setGenero] = useState('');

  const constGeneros = [
    { id: 'F', label: 'Hombre' },
    { id: 'M', label: 'Mujer' },
    { id: 'T', label: 'Otro' },
  ];

  return (
    <div className="pb-4 flex flex-col">
      <TextCustom text="Selects" className="text-6xl" />
      <Divider />
      {/* Estados */}
      <div className="px-4 pt-4">
        <TextCustom text="Estados" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <SelectCustom
            name="Generos"
            options={constGeneros}
            value={genero}
            setValue={setGenero}
            className="mb-2"
            required
          />
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default ComponentsInputs4;
