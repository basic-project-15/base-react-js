import React from 'react';

// Components
import { Button } from '@mui/material';

// Styles
import { colors } from '../../styles/theme';

const { primary, secondary, success, danger, warning, gray } = colors;

const ButtonCustom = ({
  text = '',
  onClick = () => null,
  variant = 'contained',
  className = '',
  startIcon = null,
  endIcon = null,
  disabled = false,
  typeColor = '',
  textTransform = 'none',
}) => {
  const renderColor = () => {
    let customColor = undefined;
    switch (typeColor) {
      case 'primary':
        customColor = primary;
        break;
      case 'secondary':
        customColor = secondary;
        break;
      case 'success':
        customColor = success;
        break;
      case 'danger':
        customColor = danger;
        break;
      case 'warning':
        customColor = warning;
        break;
      case 'default':
        customColor = gray;
        break;
      default:
        customColor = undefined;
        break;
    }
    return customColor;
  };
  return (
    <div>
      <Button
        color="primary"
        variant={variant}
        onClick={onClick}
        className={`fontTWSemibold px-4 ${className}`}
        startIcon={startIcon}
        endIcon={endIcon}
        disabled={disabled}
        style={{
          textTransform: textTransform,
          backgroundColor:
            variant === 'contained' && !disabled ? renderColor() : undefined,
          borderColor:
            (variant === 'outlined' || variant === 'text') && !disabled
              ? renderColor()
              : undefined,
          color:
            (variant === 'outlined' || variant === 'text') && !disabled
              ? renderColor()
              : undefined,
          borderRadius: '8px',
          fontSize: '16px',
          boxShadow: 'none',
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export default ButtonCustom;
