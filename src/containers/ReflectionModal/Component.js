import React, { useEffect } from 'react';
import Modal from '../../components/Modal';
import Reflect from '../Reflect';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: 'white',
  },
}));


const ReflectionModal = ({ match, isSuccess, saveReflectionReset }) => {
  
  const classes = useStyles();

  useEffect(() => {
    saveReflectionReset();
  }, []);

  let shouldClose = false;

  if (isSuccess) {
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