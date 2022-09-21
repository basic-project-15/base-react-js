import { colors } from '../../components/styles/theme';

const { primary, secondary, green, red, orange, gray } = colors;

export const renderColor = (typeColor = '') => {
  let customColor = undefined;
  switch (typeColor) {
    case 'primary':
      customColor = primary;
      break;
    case 'secondary':
      customColor = secondary;
      break;
    case 'success':
      customColor = green;
      break;
    case 'danger':
      customColor = red;
      break;
    case 'warning':
      customColor = orange;
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
