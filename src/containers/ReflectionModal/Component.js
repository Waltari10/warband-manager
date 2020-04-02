import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import * as constants from '../../constants';
import Modal from '../../components/Modal';
import Reflect from '../Reflect';


const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: 'white',
  },
}));


const ReflectionModal = ({
  match, isSuccess, saveReflectionReset, removeReflectionRequestState,
  removeReflectionReset,
}) => {
  
  const classes = useStyles();

  useEffect(() => {
    saveReflectionReset();
    removeReflectionReset();
  }, []);

  let shouldClose = false;

  if (isSuccess || removeReflectionRequestState === constants.SUCCESS) {
    shouldClose = true;
  }

  return (
    <Modal
      className={classes.container}
      shouldClose={shouldClose}
    >
      <Reflect
        id={match.params.id}
      />
    </Modal>
  );
};
 
export default ReflectionModal;