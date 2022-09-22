import React, { memo } from 'react';

// Components
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { CheckBoxCustom, TextCustom } from '../';

const SelectCustom = ({
  className = '',
  disabled = false,
  multiple = false,
  required = false,
  inputClassName = '',
  name = '',
  options = [],
  setValue = () => null,
  size = 'large',
  value = '',
  msgError = '',
  success = false,
}) => {
  const handleChange = event => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  const renderValue = selected => {
    if (typeof selected === 'string' || typeof selected === 'number') {
      const optionSelected = options.find(option => option?.id === selected);
      return optionSelected?.label;
    } else {
      const result = selected.map(select => {
        const optionSelected = options.find(option => option?.id === select);
        return optionSelected?.label;
      });
      return result.join(', ');
    }
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <FormControl
        size={size}
        required={required}
        fullWidth
        sx={{
          '& .MuiInputLabel-asterisk': {
            display: 'none',
          },
          '& .MuiInputLabel-shrink': {
            marginLeft: 2,
            color: 'black',
            fontWeight: '600',
            '& .MuiInputLabel-asterisk': {
              color: 'red',
              display: 'inline',
            },
          },
          marginTop: 1,
        }}
      >
        <InputLabel id="demo-simple-select-label" style={{ fontSize: 18 }}>
          {name}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label={name}
          value={value}
          onChange={handleChange}
          className={`w-full ${inputClassName}`}
          size={size}
          multiple={multiple}
          disabled={disabled}
          renderValue={renderValue}
          sx={{
            '& svg': {
              marginTop: -0.5,
              width: 24,
              height: 24,
            },
            '& MuiPaper-root': {
              marginTop: 1,
            },
            '& legend': {
              marginLeft: 2,
            },
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
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#0078FF',
              color: 'black',
            },
            backgroundColor: disabled ? '#e9ecef' : '#FFFFFF',
            borderRadius: 2,
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={index}
              value={option?.id}
              className="fontPRegular"
              sx={{
                '&: hover': {
                  backgroundColor: '#3e99ff',
                  color: '#fff',
                },
                '&.Mui-selected': {
                  backgroundColor: '#64AFFF',
                  color: '#fff',
                },
                '&.Mui-selected:hover': {
                  backgroundColor: '#3e99ff',
                  color: '#fff',
                },
              }}
            >
              {multiple && (
                <CheckBoxCustom value={value.indexOf(option?.id) > -1} />
              )}
              {option?.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextCustom
        text={msgError}
        style={{ color: 'red' }}
        className="text-xs ml-1 mr-1 fontPRegular"
      />
    </div>
  );
};

export default memo(SelectCustom);
