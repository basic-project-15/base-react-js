import React, { useState } from 'react';

// Components
import { Divider } from '@mui/material';
import {
  CheckBoxCustom,
  ControlLabelCustom,
  RadioCustom,
  TextCustom,
} from '../../atoms';

const ComponentsInputs3 = () => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(true);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(true);
  const [radio1, setRadio1] = useState(false);
  const [radio2, setRadio2] = useState(true);
  const [radio3, setRadio3] = useState(false);
  const [radio4, setRadio4] = useState(true);

  return (
    <div className="pb-4 flex flex-col">
      <TextCustom text="CheckBox" className="text-6xl" />
      <Divider />
      {/* Estados */}
      <div className="px-4 pt-4">
        <TextCustom text="Estados" className="text-3xl" />
        <Divider />
        <div className="flex flex-row gap-1">
          <CheckBoxCustom value={check1} setValue={setCheck1} />
          <CheckBoxCustom value={check2} setValue={setCheck2} />
          <CheckBoxCustom value={check3} setValue={setCheck3} disabled />
          <CheckBoxCustom value={check4} setValue={setCheck4} disabled />
        </div>
        <Divider />
      </div>
      {/* Tamaños */}
      <div className="px-4 pt-4">
        <TextCustom text="Tamaños" className="text-3xl" />
        <Divider />
        <div className="flex flex-row items-center gap-1">
          <CheckBoxCustom value size="small" />
          <CheckBoxCustom value />
          <CheckBoxCustom value fontSize={10} />
          <CheckBoxCustom value fontSize={20} />
          <CheckBoxCustom value fontSize={30} />
          <CheckBoxCustom value fontSize={40} />
        </div>
        <Divider />
      </div>
      {/* Colores */}
      <div className="px-4 pt-4">
        <TextCustom text="Colores" className="text-3xl" />
        <Divider />
        <div className="flex flex-row items-center gap-1">
          <CheckBoxCustom value />
          <CheckBoxCustom />
          <CheckBoxCustom value typeColor="primary" />
          <CheckBoxCustom typeColor="primary" />
          <CheckBoxCustom value typeColor="secondary" />
          <CheckBoxCustom typeColor="secondary" />
          <CheckBoxCustom value typeColor="success" />
          <CheckBoxCustom typeColor="success" />
          <CheckBoxCustom value typeColor="danger" />
          <CheckBoxCustom typeColor="danger" />
          <CheckBoxCustom value typeColor="warning" />
          <CheckBoxCustom typeColor="warning" />
          <CheckBoxCustom value typeColor="default" />
          <CheckBoxCustom typeColor="default" />
        </div>
        <Divider />
      </div>
      {/* Etiquetas */}
      <div className="px-4 pt-4">
        <TextCustom text="Etiquetas" className="text-3xl" />
        <Divider />
        <div className="flex flex-row items-center gap-1">
          <ControlLabelCustom name={'Default'}>
            <CheckBoxCustom value />
          </ControlLabelCustom>
          <ControlLabelCustom name={'Top'} align="top">
            <CheckBoxCustom value />
          </ControlLabelCustom>
          <ControlLabelCustom name={'Start'} align="start">
            <CheckBoxCustom value />
          </ControlLabelCustom>
          <ControlLabelCustom name={'Bottom'} align="bottom">
            <CheckBoxCustom value />
          </ControlLabelCustom>
          <ControlLabelCustom name={'End'} align="end">
            <CheckBoxCustom value />
          </ControlLabelCustom>
        </div>
        <Divider />
      </div>
      <Divider />
      <TextCustom text="RadioButtons" className="text-6xl mt-4" />
      <Divider />
      {/* Estados */}
      <div className="px-4 pt-4">
        <TextCustom text="Estados" className="text-3xl" />
        <Divider />
        <div className="flex flex-row gap-1">
          <RadioCustom value={radio1} setValue={setRadio1} />
          <RadioCustom value={radio2} setValue={setRadio2} />
          <RadioCustom value={radio3} setValue={setRadio3} disabled />
          <RadioCustom value={radio4} setValue={setRadio4} disabled />
        </div>
        <Divider />
      </div>
      {/* Tamaños */}
      <div className="px-4 pt-4">
        <TextCustom text="Tamaños" className="text-3xl" />
        <Divider />
        <div className="flex flex-row items-center gap-1">
          <RadioCustom value size="small" />
          <RadioCustom value />
          <RadioCustom value fontSize={10} />
          <RadioCustom value fontSize={20} />
          <RadioCustom value fontSize={30} />
          <RadioCustom value fontSize={40} />
        </div>
        <Divider />
      </div>
      {/* Etiquetas */}
      <div className="px-4 pt-4">
        <TextCustom text="Etiquetas" className="text-3xl" />
        <Divider />
        <div className="flex flex-row items-center gap-1">
          <ControlLabelCustom name={'Default'}>
            <RadioCustom value />
          </ControlLabelCustom>
          <ControlLabelCustom name={'Top'} align="top">
            <RadioCustom value />
          </ControlLabelCustom>
          <ControlLabelCustom name={'Start'} align="start">
            <RadioCustom value />
          </ControlLabelCustom>
          <ControlLabelCustom name={'Bottom'} align="bottom">
            <RadioCustom value />
          </ControlLabelCustom>
          <ControlLabelCustom name={'End'} align="end">
            <RadioCustom value />
          </ControlLabelCustom>
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default ComponentsInputs3;
