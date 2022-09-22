import React, { useState } from 'react';

// Components
import { Divider } from '@mui/material';
import { TextCustom, TextInputCustom } from '../../atoms';

// Const
import { typesValidation } from '../../../common/types';

const ComponentsInputs2 = () => {
  const [inputDefault, setInputDefault] = useState('');
  const [iOnlyNumbers, setIOnlyNumbers] = useState('');
  const [iOnlyLetters, setIOnlyLetters] = useState('');
  const [iOnlyLettersExtend, setIOnlyLettersExtend] = useState('');
  const [iOnlyAlphanumeric, setIOnlyAlphanumeric] = useState('');
  const [iOnlyAlphanumericExtend, setIOnlyAlphanumericExtend] = useState('');

  return (
    <div className="pb-4">
      <TextCustom text="Validaciones para TextInputs" className="text-6xl" />
      <Divider />
      {/* Validaciones de TextInputs */}
      <div className="px-4 pt-4">
        <TextCustom text="Validaciones de escritura" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <TextInputCustom
            value={inputDefault}
            setValue={setInputDefault}
            name="Cualquier caracter"
          />
          <TextInputCustom
            value={iOnlyNumbers}
            setValue={setIOnlyNumbers}
            name="Solo números"
            typesValidation={typesValidation.onlyNumber}
          />
          <TextInputCustom
            value={iOnlyLetters}
            setValue={setIOnlyLetters}
            name="Solo letras"
            typesValidation={typesValidation.onlyLetters}
          />
          <TextInputCustom
            value={iOnlyLettersExtend}
            setValue={setIOnlyLettersExtend}
            name="Solo letras (extendido)"
            typesValidation={typesValidation.onlyLettersExtend}
          />
          <TextInputCustom
            value={iOnlyAlphanumeric}
            setValue={setIOnlyAlphanumeric}
            name="Solo números y letras"
            typesValidation={typesValidation.onlyAlphanumeric}
          />
          <TextInputCustom
            value={iOnlyAlphanumericExtend}
            setValue={setIOnlyAlphanumericExtend}
            name="Solo números y letras (extendido)"
            typesValidation={typesValidation.onlyAlphanumericExtend}
          />
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default ComponentsInputs2;
