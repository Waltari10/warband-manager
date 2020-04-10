import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import * as constants from '../../constants';
import Modal from '../../components/Modal';
import Warband from '../Warband';


const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: 'white',
  },
}));


const WarbandModal = ({
  match, saveWarbandReset, removeWarbandRequestState,
  removeWarbandReset,
}) => {

  const classes = useStyles();

  useEffect(() => {
    saveWarbandReset();
    removeWarbandReset();
  }, []);

  let shouldClose = false;

  if (removeWarbandRequestState === constants.SUCCESS) {
    shouldClose = true;
  }

  return (
    <Modal
      className={classes.container}
      shouldClose={shouldClose}
    >
      <Warband
        id={match.params.id}
      />
    </Modal>
  );
};

export default WarbandModal;