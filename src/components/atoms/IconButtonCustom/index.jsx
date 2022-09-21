import React from 'react';

// Components
import { IconButton } from '@mui/material';

// Core
import { renderColor } from '../../../core/utils';

const IconButtonCustom = ({
  ariaLabel = 'twitter',
  onClick = () => null,
  size = 32,
  className = '',
  icon = null,
  disabled = false,
  typeColor = '',
}) => {
  return (
    <IconButton
      color="primary"
      aria-label={ariaLabel}
      disabled={disabled}
      className={className}
      onClick={onClick}
      sx={{
        width: size * 1.5,
        height: size * 1.5,
        '&:hover, &.Mui-focusVisible': {
          backgroundColor: `${renderColor(typeColor)}0F`,
        },
        '&.MuiButtonBase-root svg': {
          color: `${renderColor(typeColor)}`,
          width: size,
          height: size,
        },
        '&.MuiTouchRipple-root': {
          backgroundColor: 'red',
        },
        color: renderColor(typeColor),
      }}
    >
      {icon}
    </IconButton>
  );
};

export default IconButtonCustom;
