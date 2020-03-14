import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Progress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link as RouterLink } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute';
import ReflectionModal from '../ReflectionModal';

import ReflectionListItem from './ReflectionListItem';
import { Typography, Paper } from '@material-ui/core';
import AppWindow from '../../components/AppWindow';

// TODO: List of issues
// Add a add issue as hero


const useStyles = makeStyles((theme) => ({
  listItem: {
    
  },
  window: {
    padding: 0,
  },
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflowY: 'auto',
    overflowX: 'hidden',
    placeSelf: 'flex-start',
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


const HomePage = ({
  isLoading, isError, isSuccess, reflections = {}, getReflections, match, ...rest
}) => {

  useEffect(() => {
    getReflections();
  }, []);

  console.log('homepage');

  const classes = useStyles();

  return (
    <AppWindow className={classes.window}>
      <div className={classes.container}>
        <PrivateRoute component={ReflectionModal} path="/reflection/:id" />
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

        {!isLoading && Object.keys(reflections).length === 0 && (
          <Typography>No reflections yet. Add first reflection.</Typography>
        )}
      </div>


      <Fab
        className={classes.hero}
        color="primary"
      >
        <RouterLink
          to={`${match.path}reflection/new`}
        >
          <AddIcon className={classes.addIcon}/>
        </RouterLink>
      </Fab>
    </AppWindow>
  );
};
 
export default HomePage;