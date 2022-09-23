import React from 'react';

// Components
import { DialogTitle } from '@mui/material';
import { IconButtonCustom } from '../../atoms';

// Assets
import CloseIcon from '@mui/icons-material/Close';

const DialogTitleCustom = ({
  disabledIconClose = false,
  children = null,
  onClose = () => null,
  titleCloseComponent = null,
  ...other
}) => {
  return (
    <DialogTitle sx={{ m: 0, p: '40px', pt: 2, pb: 2 }} {...other}>
      <div className="flex justify-between">
        {children}
        {!disabledIconClose && (
          <IconButtonCustom
            icon={<CloseIcon />}
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: '#fff',
            }}
          />
        )}
        {titleCloseComponent}
      </div>
    </DialogTitle>
  );
};

export default DialogTitleCustom;
