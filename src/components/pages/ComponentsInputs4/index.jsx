import React from 'react';

// Components
import { Divider } from '@mui/material';
import { TextCustom } from '../../atoms';

const ComponentsInputs4 = () => {
  return (
    <div className="pb-4 flex flex-col">
      <TextCustom text="Selects" className="text-6xl" />
      <Divider />
      {/* Estados */}
      <div className="px-4 pt-4">
        <TextCustom text="Estados" className="text-3xl" />
        <Divider />
        <div className="flex flex-row gap-1"></div>
        <Divider />
      </div>
    </div>
  );
};

export default ComponentsInputs4;
