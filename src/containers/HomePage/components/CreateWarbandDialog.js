import React, { useState, useEffect } from 'react';
import {
  Button, Dialog, DialogTitle, DialogContent,
  TextField, IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Autocomplete from '@material-ui/lab/Autocomplete';


import warbands from '../../../assets/warbands.json';


const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: 'white',
    padding: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  faction: {
    marginTop: theme.spacing(2),
  },
  closeButton: {
    right: theme.spacing(1),
    top: theme.spacing(2),
    position: 'absolute',
  },
}));


const CreateWarbandDialog = ({
  close, open, addWarband,
}) => {


  const classes = useStyles();

  const [name, setName] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    setName('');
    setType('');
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={close}
      classes={{
        paper: classes.paper,
      }}
    >
      <IconButton
        onClick={close}
        className={classes.closeButton}
      >
        <CloseIcon />
      </IconButton>
      <DialogTitle>New Warband</DialogTitle>
      <DialogContent>
        <div>
          <TextField
            value={name}
            onChange={e => setName(e.target.value)}
            variant="outlined"
            label="Warband Name"
          />
        </div>
        <div>

          <Autocomplete
            full-width
            selectOnFocus
            value={type || ''}
            freeSolo
            clearOnBlur
            name="type"
            className={classes.faction}
            classes={{
              groupUl: classes.groupUl,
            }}
            options={warbands}
            onChange={(event, newValue) => {
              setType(newValue);
            }}
            ListboxProps={{
              style: {
                backgroundColor: 'white',
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                full-width
                name="type"
                value={type || ''}
                onChange={(e) => setType(e.target.value)}
                label="Warband type"
                variant="outlined"
              />
            )}
          />


        </div>
        <Button
          onClick={() => {
            addWarband({
              name,
              type,
            });
            close();
          }}
          className={classes.button}
          variant="contained"
          color="primary"
          id="create-warband-dialog-button"
        >Create Warband</Button>
      </DialogContent>
    </Dialog>
  );
};

export default CreateWarbandDialog;