import React, { useState } from 'react';

// Components
import { Divider } from '@mui/material';
import { SelectCustom, TextCustom } from '../../atoms';

// Const
import { constGeneros } from '../../../common/constants';

const ComponentsInputs4 = () => {
  const [genero, setGenero] = useState('');

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
            required
          />
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default ComponentsInputs4;
