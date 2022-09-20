import React from 'react';

// Components
import { Divider } from '@mui/material';
import { TextCustom } from '../../atoms';

const ComponentsText = () => {
  return (
    <div>
      <TextCustom text="Componentes para textos" className="text-6xl" />
      <Divider />
      <div className="px-4 pt-4">
        <TextCustom text="Variantes" className="text-2xl" />
        <Divider />
        <div className="flex flex-col">
          <TextCustom text="Variante h1" variant="h1" />
          <TextCustom text="Variante h2" variant="h2" />
          <TextCustom text="Variante h3" variant="h3" />
          <TextCustom text="Variante h4" variant="h4" />
          <TextCustom text="Variante h5" variant="h5" />
          <TextCustom text="Variante h6" variant="h6" />
        </div>
        <Divider />
      </div>
      <div className="px-4 pt-4">
        <TextCustom text="Tamaños" className="text-2xl" />
        <Divider />
        <div className="flex flex-col">
          <TextCustom text="text-xs" className="text-xs" />
          <TextCustom text="text-sm" className="text-sm" />
          <TextCustom text="text-base" className="text-base" />
          <TextCustom text="text-lg" className="text-lg" />
          <TextCustom text="text-xl" className="text-xl" />
          <TextCustom text="text-2xl" className="text-2xl" />
          <TextCustom text="text-3xl" className="text-3xl" />
          <TextCustom text="text-4xl" className="text-4xl" />
          <TextCustom text="text-5xl" className="text-5xl" />
          <TextCustom text="text-6xl" className="text-6xl" />
          <TextCustom text="text-7xl" className="text-7xl" />
          <TextCustom text="text-8xl" className="text-8xl" />
          <TextCustom text="text-8xl" className="text-8xl" />
          <TextCustom text="text-9xl" className="text-9xl" />
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default ComponentsText;
