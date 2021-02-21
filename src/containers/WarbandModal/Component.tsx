import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import * as constants from '../../constants';
import Modal from '../../components/Modal';
import Warband from '../Warband';

import { DispatchProps, StateProps, NavProps } from './Container';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: 'white',
  },
}));

const WarbandModal = ({
  match,
  removeWarbandRequestState,
  removeWarbandReset,
}: StateProps & DispatchProps & NavProps) => {
  const classes = useStyles();

  useEffect(() => {
    removeWarbandReset();
  }, []);

  let shouldClose = false;

  if (removeWarbandRequestState === constants.SUCCESS) {
    shouldClose = true;
  }

  return (
    <Modal className={classes.container} shouldClose={shouldClose}>
      <Warband id={match.params.id} />
    </Modal>
  );
};

export default WarbandModal;
