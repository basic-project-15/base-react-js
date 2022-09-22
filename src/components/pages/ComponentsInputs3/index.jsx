import React from 'react';

// Components
import { Divider } from '@mui/material';
import { TextCustom } from '../../atoms';

const ComponentsInputs3 = () => {
  return (
    <div className="pb-4">
      <TextCustom text="CheckBox y RadioButtons" className="text-6xl" />
      <Divider />
      {/* CheckCustom */}
      <div className="px-4 pt-4">
        <TextCustom text="CheckCustom" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1"></div>
        <Divider />
      </div>
    </div>
  );
};

export default ComponentsInputs3;
