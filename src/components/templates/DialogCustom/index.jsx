import React, { memo } from 'react';

// Components
import { Dialog } from '@mui/material';
import { DialogTitleCustom } from '../../molecules';

const DialogCustom = ({
  children = null,
  disabledDismiss = false,
  disabledIconClose = false,
  onDismiss = () => null,
  open = false,
  setOpen = () => null,
  title = '',
  classTitle = '',
  titleCloseComponent = null,
}) => {
  const handleClose = () => {
    onDismiss();
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      onClose={() => !disabledDismiss && handleClose()}
      maxWidth={false}
    >
      <DialogTitleCustom
        onClose={handleClose}
        disabledIconClose={disabledIconClose}
        style={{
          color: '#fff',
          backgroundColor: '#0078ff',
        }}
        className={`fontPBold ${classTitle}`}
        titleCloseComponent={titleCloseComponent}
      >
        {title}
      </DialogTitleCustom>
      {children}
    </Dialog>
  );
};

export default memo(DialogCustom);
