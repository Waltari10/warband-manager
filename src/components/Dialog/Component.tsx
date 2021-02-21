import React, { memo } from 'react';
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

interface Props {
  handleClose(): void;
  open?: boolean;
  title?: string;
  dialog?: any;
  cancel?: String;
  confirm?: string;
  handleConfirm(): void;
  isConfirm?: boolean;
  isCancel?: boolean;
}

const MyDialog = memo(({
  handleClose, open = false, title, dialog, cancel, confirm,
  handleConfirm, isConfirm = true, isCancel = true,
}: Props) => {

  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      classes={{
        paper: classes.paper,
      }
      }
    >
      <DialogTitle>{title} </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          dangerouslySetInnerHTML={{ __html: dialog }}
        >
          {/* {dialog} */}
        </DialogContentText>
      </DialogContent>
      < DialogActions>
        {isCancel && <Button
          onClick={handleClose}
          color="primary"
        >
          {cancel || 'Cancel'}
        </Button>}
        {
          isConfirm && <Button
            onClick={handleConfirm}
            color="primary"
            autoFocus

          >
            {confirm || 'Confirm'}
          </Button>}
      </DialogActions>
    </Dialog>
  );
});

export default MyDialog;