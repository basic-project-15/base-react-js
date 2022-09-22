import React from 'react';
import { Checkbox } from '@mui/material';

const CheckBoxCustom = ({
  value = false,
  setValue = () => null,
  disabled = false,
  size = undefined,
  color = undefined,
  customColor = '#0078FF',
  fontSize = null,
}) => {
  const handleChange = () => {
    setValue(!value);
  };

  return (
    <div>
      <Checkbox
        checked={value}
        onChange={handleChange}
        disabled={disabled}
        size={size}
        color={color}
        sx={{
          '& .MuiSvgIcon-root': { fontSize },
          '&.Mui-checked': {
            color: customColor,
          },
          color: customColor,
          fontFamily: 'fontPRegular',
        }}
      />
    </div>
  );
};

export default CheckBoxCustom;
