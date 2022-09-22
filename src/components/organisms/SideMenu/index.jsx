import React, { memo, useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Hooks
import { AuthContext } from '../../../hooks/context';

// Components
import { Collapse, List } from '@mui/material';
import { DrawerItem } from '../../atoms';

// Const
import { typesActionsAuth } from '../../../common/types';

// Assets
import { ReactComponent as HomeIcon } from '../../../assets/icons/HomeIcon.svg';
import ExtensionIcon from '@mui/icons-material/Extension';
import SettingsIcon from '@mui/icons-material/Settings';
import ScienceIcon from '@mui/icons-material/Science';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

// Styles
import { colors } from '../../styles/theme';

const { white } = colors;

const SideMenu = ({ onChange = () => null }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { dispatchAuth } = useContext(AuthContext);
  const [showComponents, setShowComponents] = useState(false);

  const handleHome = () => {
    navigate('/dashboard/home');
    onChange();
  };

  const handleConfiguration = () => {
    navigate('/dashboard/configuration');
    onChange();
  };

  const handleLogout = () => {
    dispatchAuth({ type: typesActionsAuth.authLogout });
    onChange();
  };

  const handleComponentsText = () => {
    navigate('/dashboard/componentsText');
    onChange();
  };

  const handleComponentsButton = () => {
    navigate('/dashboard/componentsButton');
    onChange();
  };

  const handleComponentsInputs1 = () => {
    navigate('/dashboard/componentsInputs1');
    onChange();
  };

  const handleComponentsInputs2 = () => {
    navigate('/dashboard/componentsInputs2');
    onChange();
  };

  return (
    <div className="flex flex-col h-full p-4">
      <div className="flex justify-center items-center pt-5 pb-4 text-white">
        Logo
      </div>
      <div className="h-full flex flex-col justify-between">
        <List className="flex flex-col gap-1 py-0">
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
            text={'Componentes'}
            onClick={() => setShowComponents(!showComponents)}
            icon={<ScienceIcon className="text-white" />}
            isCollapse
            collapse={showComponents}
          />
          <Collapse in={showComponents} timeout="auto" unmountOnExit>
            <List className="flex flex-col gap-1 py-0 ml-2">
              <DrawerItem
                text={'Textos y colores'}
                onClick={handleComponentsText}
                icon={<ExtensionIcon className="text-white" />}
                isSelected={location.pathname === '/dashboard/componentsText'}
              />
              <DrawerItem
                text={'Botones'}
                onClick={handleComponentsButton}
                icon={<ExtensionIcon className="text-white" />}
                isSelected={location.pathname === '/dashboard/componentsButton'}
              />
              <DrawerItem
                text={'Inputs 1'}
                onClick={handleComponentsInputs1}
                icon={<ExtensionIcon className="text-white" />}
                isSelected={
                  location.pathname === '/dashboard/componentsInputs1'
                }
              />
              <DrawerItem
                text={'Inputs 2'}
                onClick={handleComponentsInputs2}
                icon={<ExtensionIcon className="text-white" />}
                isSelected={
                  location.pathname === '/dashboard/componentsInputs2'
                }
              />
            </List>
          </Collapse>
        </List>
        <List className="flex flex-col gap-1 py-0 ml-2">
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
