import React from 'react';
import {
  Dialog as DialogMUI,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import SettingsOverscanIcon from '@mui/icons-material/SettingsOverscan';

const Dialog = ({ title, description, children }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const parseCustomData = (customData) => {
    if (!customData) return null;
    try {
      return JSON.parse(customData);
    } catch (e) {
      return customData;
    }
  };

  return (
    <>
      {children ? (
        children({cb: handleClickOpen})
      ) : (
        <IconButton onClick={handleClickOpen}>
          <SettingsOverscanIcon />
        </IconButton>
      )}
      <DialogMUI
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="full-description">{title}</DialogTitle>
        <DialogContent>
          <div
            dangerouslySetInnerHTML={{
              __html: `${parseCustomData(description ? description : '')}`
            }}
          />

          {/* <DialogContentText id="alert-dialog-description">{description}</DialogContentText> */}
        </DialogContent>
      </DialogMUI>
    </>
  );
};

export default Dialog;
