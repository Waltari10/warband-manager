import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  paper: {
    backgroundColor: 'white',
  },
}));

export default function MyDialog({
  handleClose, open, title, dialog, cancel, confirm,
  handleConfirm,
}) {

  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      classes={{
        paper: classes.paper,
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {dialog}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          color="primary"
        >
          {cancel || 'Cancel'}
        </Button>
        <Button
          onClick={handleConfirm}
          color="primary"
          autoFocus

        >
          {confirm || 'Confirm'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}