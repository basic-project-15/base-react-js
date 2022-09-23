import React, { memo } from 'react';

// Components
import { Dialog } from '@mui/material';
import { TextCustom } from '../../atoms';
import { DialogTitleCustom } from '../../molecules';

// Styles
import { colors } from '../../styles/theme';

const DialogCustom = ({
  children = null,
  disabledDismiss = false,
  disabledIconClose = false,
  onDismiss = () => null,
  open = false,
  setOpen = () => null,
  title = '',
}) => {
  const handleClose = () => {
    onDismiss();
    setOpen(false);
    return false;
  };
  return (
    <div>
      {open && (
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          onClose={() => !disabledDismiss && handleClose()}
          as="div"
          className="fixed inset-0 overflow-y-auto"
          style={{ zIndex: 10000, backgroundColor: `${colors.black}80` }}
          maxWidth={false}
        >
          <DialogTitleCustom
            onClose={handleClose}
            disabledIconClose={disabledIconClose}
          >
            <TextCustom text={title} className="fontPMedium py-2" />
          </DialogTitleCustom>
          {children}
        </Dialog>
      )}
    </div>
  );
};

export default memo(DialogCustom);
