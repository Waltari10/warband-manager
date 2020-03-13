import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Progress from '@material-ui/core/CircularProgress';
import Modal from '../../components/Modal';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link as RouterLink } from 'react-router-dom';

import ReflectionListItem from './ReflectionListItem';

// TODO: List of issues
// Add a add issue as hero


const useStyles = makeStyles((theme) => ({
  listItem: {
    
  },
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  progress: {
    position: 'absolute',
    top: 'calc(50% - 10px)',
    left: 'calc(50% - 10px)',
  },
  hero: {
    position: 'absolute',
    right: theme.spacing(3),
    bottom: theme.spacing(3),
  },
  addIcon: {
    color: 'white',
    marginTop: '6px',
  },
}));


const Login = ({
  isLoading, isError, isSuccess, reflections = {}, getReflections, match, ...rest
}) => {

  useEffect(() => {
    getReflections();
  }, []);

  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        {/* <Modal
        shouldClose={true}
      /> */}
        {isLoading && <Progress className={classes.progress} />}
        {!isLoading && Object.keys(reflections).map((key) => {
          const reflection = reflections[key];

          return (
            <ReflectionListItem
              match={match}
              key={key}
              id={key}
              reflection={reflection}
            />
          );
        })}
      </div>


      {/* TODO: Add text if hero reflections */}

      <Fab
        className={classes.hero}
        color="primary"
      >
        <RouterLink
          to={`${match.path}reflections/new`}
        >
          <AddIcon className={classes.addIcon}/>
        </RouterLink>
      </Fab>
    </>
  );
};
 
export default Login;