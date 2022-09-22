import React, { memo } from 'react';

// Components
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { CheckBoxCustom, TextCustom } from '../';

// Core
import { colors } from '../../styles/theme';

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
  fontSize = 18,
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
        size="large"
        required={required}
        fullWidth
        sx={{
          marginTop: 1,
          '& .MuiInputLabel-asterisk': {
            display: 'none',
          },
          '& .MuiInputLabel-shrink': {
            marginLeft: 2,
            color: colors.black,
            fontWeight: '600',
            '& .MuiInputLabel-asterisk': {
              color: colors.red,
              display: 'inline',
            },
          },
        }}
      >
        <InputLabel id="demo-simple-select-label" style={{ fontSize }}>
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
              fontSize: fontSize * 0.82,
            },
            '& fieldset': {
              borderRadius: 2,
              border: msgError.length > 0 || success ? 2 : 1,
              borderColor:
                msgError.length > 0
                  ? colors.red
                  : success
                  ? colors.green
                  : colors.gray,
              color: colors.black,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.primary,
              color: colors.black,
            },
            backgroundColor: disabled ? colors.ligthGray : colors.white,
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
                  backgroundColor: colors.general,
                  color: colors.white,
                },
                '&.Mui-selected': {
                  backgroundColor: colors.primary,
                  color: colors.white,
                },
                '&.Mui-selected:hover': {
                  backgroundColor: colors.general,
                  color: colors.white,
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
        className="text-xs ml-1 mr-1 fontPRegular text-red"
      />
    </div>
  );
};

export default memo(SelectCustom);
