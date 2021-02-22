import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import * as constants from '../../constants';
import Modal from '../../components/Modal';
import Warband from '../Warband';

import { DispatchProps, StateProps } from './Container';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: 'white',
  },
}));


interface NavProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: any;
}

const WarbandModal: React.FunctionComponent<StateProps & DispatchProps & NavProps> = ({
  match,
  removeWarbandRequestState,
  removeWarbandReset,
}) => {
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
