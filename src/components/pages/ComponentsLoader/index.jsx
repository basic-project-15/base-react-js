import React from 'react';

// Components
import { Divider } from '@mui/material';
import { Loader, TextCustom } from '../../atoms';

const ComponentsLoader = () => {
  return (
    <div className="pb-4 flex flex-col">
      <TextCustom text="Loaders" className="text-6xl" />
      <Divider />
      {/* Estados */}
      <div className="px-4 pt-4">
        <TextCustom text="Estados" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <TextCustom text="Repetitivo:" />
            <Loader loop={true} />
          </div>
          <div className="flex items-center">
            <TextCustom text="Solo una vez:" />
            <Loader />
          </div>
        </div>
        <Divider />
      </div>
      {/* Tamaños */}
      <div className="px-4 pt-4">
        <TextCustom text="Tamaños" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <TextCustom text="32px:" />
            <Loader loop={true} size={32} />
          </div>
          <div className="flex items-center">
            <TextCustom text="48px:" />
            <Loader loop={true} />
          </div>
          <div className="flex items-center">
            <TextCustom text="64px:" />
            <Loader loop={true} size={64} />
          </div>

          <div className="flex items-center">
            <TextCustom text="1rem:" />
            <Loader loop={true} size="1rem" />
          </div>
          <div className="flex items-center">
            <TextCustom text="2rem:" />
            <Loader loop={true} size="2rem" />
          </div>
          <div className="flex items-center">
            <TextCustom text="3rem:" />
            <Loader loop={true} size="3rem" />
            <TextCustom text="por defecto" className="color-red" />
          </div>
          <div className="flex items-center">
            <TextCustom text="4rem:" />
            <Loader loop={true} size="4rem" />
          </div>
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default ComponentsLoader;
