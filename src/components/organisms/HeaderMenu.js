import React from 'react';

// Components
import { AppBar, IconButton, Toolbar } from '@mui/material';

// Assets
import MenuIcon from '@mui/icons-material/Menu';

const HeaderMenu = ({ drawerWidth, handleDrawerToggle }) => {
  return (
    <AppBar
      position="fixed"
      elevation={2}
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
        backgroundColor: '#fff',
      }}
    >
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <div>Header Menu</div>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMenu;
