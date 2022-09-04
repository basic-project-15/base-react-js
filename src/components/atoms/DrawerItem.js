import React, { useEffect } from 'react';

// Components
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// Assets
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

// Styles
import './styles/index.css';

const DrawerItem = ({
  text = '',
  onClick = () => null,
  icon = null,
  isSelected = false,
  collapse = false,
  isCollapse = false,
}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <ListItem
      disablePadding
      onClick={handleClick}
      className={`drawer-item-color ${
        isSelected ? 'drawer-item-color-select' : ''
      }`}
    >
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText className="txt-nav" primary={text} />
        {isCollapse ? collapse ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItemButton>
    </ListItem>
  );
};

export default DrawerItem;
