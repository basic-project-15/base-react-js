import React, { memo, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Hooks
import { AuthContext } from '../../../hooks/context';

// Components
import List from '@mui/material/List';
import { DrawerItem } from '../../atoms';

// Const
import { authTypes } from '../../../common/types';

// Assets
import { ReactComponent as HomeIcon } from '../../../assets/icons/HomeIcon.svg';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

// Styles
import { colors } from '../../styles/theme';

const { white } = colors;

const SideMenu = ({ onChange = () => null }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { dispatchAuth } = useContext(AuthContext);

  const handleHome = () => {
    navigate('/dashboard/home');
    onChange();
  };

  const handleConfiguration = () => {
    navigate('/dashboard/configuration');
    onChange();
  };

  const handleLogout = () => {
    dispatchAuth({ type: authTypes.logout });
  };

  return (
    <div className="flex flex-col h-full p-4">
      <div className="d-flex justify-center items-center pt-5 pb-4 text-white">
        Logo
      </div>
      <div className="h-100 flex flex-col justify-between">
        <List>
          <DrawerItem
            text={'Dashboard'}
            onClick={handleHome}
            icon={<HomeIcon fill={white} />}
            isSelected={location.pathname === '/dashboard/home'}
          />
          <DrawerItem
            text={'Configuraciones'}
            onClick={handleConfiguration}
            icon={<SettingsIcon className="text-white" />}
            isSelected={location.pathname === '/dashboard/configuration'}
          />
          <DrawerItem
            text={'Cerrar sesión'}
            onClick={handleLogout}
            icon={<PowerSettingsNewIcon className="text-white" />}
          />
        </List>
      </div>
    </div>
  );
};

export default memo(SideMenu);
