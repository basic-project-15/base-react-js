import { colors } from '../../components/styles/theme';

const { primary, secondary, success, danger, warning, gray } = colors;

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
