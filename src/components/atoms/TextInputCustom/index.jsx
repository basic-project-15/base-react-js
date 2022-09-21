import React, { memo } from 'react';

// Components
import { TextField } from '@mui/material';
import { TextCustom } from '../';

const TextInputCustom = ({
  name = '',
  value = '',
  setValue = () => null,
  placeholder = '',
  type = 'text',
  maxLength = null,
  className = '',
  msgError = '',
  disabled = false,
  multiline = false,
  required = false,
  success = false,
}) => {
  const handleOnChange = e => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <TextField
        label={name}
        value={value}
        onChange={handleOnChange}
        variant="outlined"
        size="large"
        multiline={multiline}
        minRows={multiline ? '3' : '1'}
        maxRows={multiline ? '4' : '1'}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        required={required}
        inputProps={{
          maxLength: maxLength,
          style: { textAlign: 'left' },
        }}
        sx={{
          '& legend': {
            marginLeft: 2,
          },
          '& .MuiInputBase-root': {
            '& fieldset': {
              borderRadius: 2,
              border: msgError.length > 0 || success ? 2 : 1,
              borderColor:
                msgError.length > 0
                  ? '#FB3030'
                  : success
                  ? '#2DA54B'
                  : '#858C94',
              color: '#000',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0078FF',
              color: 'black',
              fontSize: 18,
            },
          },
          '& .MuiInputLabel-asterisk': {
            display: 'none',
          },
          '& .MuiInputLabel-shrink': {
            marginLeft: 2,
            color: 'black',
            fontSize: 18,
            fontWeight: '600',
            '& .MuiInputLabel-asterisk': {
              color: 'red',
              display: 'inline',
            },
          },
          backgroundColor: disabled ? '#e9ecef' : '#FFFFFF',
          borderRadius: 2,
          marginTop: 1,
        }}
      />
      <TextCustom
        text={msgError}
        style={{ color: 'red' }}
        className="text-xs ml-1 mt-1 fontPRegular"
      />
    </div>
  );
};

export default memo(TextInputCustom);
