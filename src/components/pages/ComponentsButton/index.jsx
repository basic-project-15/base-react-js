import React from 'react';

// Components
import { Divider } from '@mui/material';
import { ButtonCustom, TextCustom } from '../../atoms';

// Assets
import SendIcon from '@mui/icons-material/Send';
import ReplyIcon from '@mui/icons-material/Reply';

const ComponentsButton = () => {
  return (
    <div>
      <TextCustom text="Componentes para botones" className="text-6xl" />
      <Divider />
      <ButtonCustom text="Por defecto" />
      {/* Variante de Botones */}
      <div className="px-4 pt-4">
        <TextCustom text="Variantes" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <ButtonCustom text="Contained" variant="contained" />
            <ButtonCustom text="Contained" variant="contained" disabled />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Outlined" variant="outlined" />
            <ButtonCustom text="Outlined" variant="outlined" disabled />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Text" variant="text" />
            <ButtonCustom text="Text" variant="text" disabled />
          </div>
        </div>
        <Divider />
      </div>
      {/* Colores para Botones */}
      <div className="px-4 pt-4">
        <TextCustom text="Colores" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <ButtonCustom text="Por defecto" />
            <ButtonCustom text="Por defecto" variant="outlined" />
            <ButtonCustom text="Por defecto" variant="text" />
            <ButtonCustom text="Por defecto" disabled />
            <ButtonCustom text="Por defecto" variant="outlined" disabled />
            <ButtonCustom text="Por defecto" variant="text" disabled />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Primario" typeColor="primary" />
            <ButtonCustom
              text="Primario"
              typeColor="primary"
              variant="outlined"
            />
            <ButtonCustom text="Primario" typeColor="primary" variant="text" />
            <ButtonCustom text="Primario" typeColor="primary" disabled />
            <ButtonCustom
              text="Primario"
              typeColor="primary"
              variant="outlined"
              disabled
            />
            <ButtonCustom
              text="Primario"
              typeColor="primary"
              variant="text"
              disabled
            />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Secundario" typeColor="secondary" />
            <ButtonCustom
              text="Secundario"
              typeColor="secondary"
              variant="outlined"
            />
            <ButtonCustom
              text="Secundario"
              typeColor="secondary"
              variant="text"
            />
            <ButtonCustom text="Secundario" typeColor="secondary" disabled />
            <ButtonCustom
              text="Secundario"
              typeColor="secondary"
              variant="outlined"
              disabled
            />
            <ButtonCustom
              text="Secundario"
              typeColor="secondary"
              variant="text"
              disabled
            />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Exitoso" typeColor="success" />
            <ButtonCustom
              text="Exitoso"
              typeColor="success"
              variant="outlined"
            />
            <ButtonCustom text="Exitoso" typeColor="success" variant="text" />
            <ButtonCustom text="Exitoso" typeColor="success" disabled />
            <ButtonCustom
              text="Exitoso"
              typeColor="success"
              variant="outlined"
              disabled
            />
            <ButtonCustom
              text="Exitoso"
              typeColor="success"
              variant="text"
              disabled
            />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Alerta" typeColor="danger" />
            <ButtonCustom text="Alerta" typeColor="danger" variant="outlined" />
            <ButtonCustom text="Alerta" typeColor="danger" variant="text" />
            <ButtonCustom text="Alerta" typeColor="danger" disabled />
            <ButtonCustom
              text="Alerta"
              typeColor="danger"
              variant="outlined"
              disabled
            />
            <ButtonCustom
              text="Alerta"
              typeColor="danger"
              variant="text"
              disabled
            />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Advertencia" typeColor="warning" />
            <ButtonCustom
              text="Advertencia"
              typeColor="warning"
              variant="outlined"
            />
            <ButtonCustom
              text="Advertencia"
              typeColor="warning"
              variant="text"
            />
            <ButtonCustom text="Advertencia" typeColor="warning" disabled />
            <ButtonCustom
              text="Advertencia"
              typeColor="warning"
              variant="outlined"
              disabled
            />
            <ButtonCustom
              text="Advertencia"
              typeColor="warning"
              variant="text"
              disabled
            />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Gris" typeColor="default" />
            <ButtonCustom text="Gris" typeColor="default" variant="outlined" />
            <ButtonCustom text="Gris" typeColor="default" variant="text" />
            <ButtonCustom text="Gris" typeColor="default" disabled />
            <ButtonCustom
              text="Gris"
              typeColor="default"
              variant="outlined"
              disabled
            />
            <ButtonCustom
              text="Gris"
              typeColor="default"
              variant="text"
              disabled
            />
          </div>
        </div>
        <Divider />
      </div>
      {/* Iconos en botones */}
      <div className="px-4 pt-4">
        <TextCustom text="Iconos" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <ButtonCustom
            text="Contained"
            variant="contained"
            endIcon={<SendIcon className="text-white" />}
          />
          <ButtonCustom
            text="Outlined"
            variant="outlined"
            endIcon={<SendIcon className="text-gray-600" />}
          />
          <ButtonCustom
            text="Text"
            variant="text"
            endIcon={<SendIcon className="text-gray-600" />}
          />
          <ButtonCustom
            text="Contained"
            variant="contained"
            startIcon={<ReplyIcon className="text-white" />}
          />
          <ButtonCustom
            text="Outlined"
            variant="outlined"
            startIcon={<ReplyIcon className="text-gray-600" />}
          />
          <ButtonCustom
            text="Text"
            variant="text"
            startIcon={<ReplyIcon className="text-gray-600" />}
          />
        </div>
        <Divider />
      </div>
      {/* TextTransform de Botones */}
      <div className="px-4 pt-4">
        <TextCustom text="TextTransform" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <TextCustom
            text="Texto por defecto: Por defecto"
            className="text-lg"
          />
          <div className="flex gap-1">
            <TextCustom text="none:" className="text-lg" />
            <ButtonCustom text="Por defecto" textTransform="none" />
          </div>
          <div className="flex gap-1">
            <TextCustom text="capitalize:" className="text-lg" />
            <ButtonCustom text="Por defecto" textTransform="capitalize" />
          </div>
          <div className="flex gap-1">
            <TextCustom text="lowercase:" className="text-lg" />
            <ButtonCustom text="Por defecto" textTransform="lowercase" />
          </div>
          <div className="flex gap-1">
            <TextCustom text="uppercase:" className="text-lg" />
            <ButtonCustom text="Por defecto" textTransform="uppercase" />
          </div>
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default ComponentsButton;
