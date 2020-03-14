import React from 'react';
import Modal from '../../components/Modal';
import Progress from '@material-ui/core/CircularProgress';
import Reflect from '../Reflect';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  
  container: {
    backgroundColor: 'white',
  },

}));


const IssueModal = () => {
  
  const classes = useStyles();

  return (
    <Modal
      className={classes.container}
      shouldClose={false}
    >
      <Reflect />
    </Modal>
  );
};
 
export default IssueModal;