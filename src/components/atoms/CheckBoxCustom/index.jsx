import React from 'react';

// Components
import { Checkbox } from '@mui/material';

// Core
import { renderColor } from '../../../core/utils';

const CheckBoxCustom = ({
  value = false,
  setValue = () => null,
  disabled = false,
  size = undefined,
  typeColor = '',
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
        sx={{
          '& .MuiSvgIcon-root': { fontSize },
          '&.Mui-checked': {
            color: renderColor(typeColor),
          },
          color: renderColor(typeColor),
          fontFamily: 'fontPRegular',
        }}
      />
    </div>
  );
};

export default CheckBoxCustom;
