import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Progress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Menu from '@material-ui/core/Menu';
import { Link as RouterLink } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';

import PrivateRoute from '../PrivateRoute';
import ReflectionModal from '../ReflectionModal';

import ReflectionListItem from './ReflectionListItem';
import AppWindow from '../../components/AppWindow';


const useStyles = makeStyles((theme) => ({
  window: {
    padding: 0,
    position: 'relative',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  container: {
    marginTop: '48px',
    width: '100%',
    height: '100%',
    placeSelf: 'flex-start',
    overflowY: 'scroll',
    overflowX: 'hidden',
    flex: 1,
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
  topNavigationContainer: {
    boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
    height: '48px',
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    left: 0,
    right: 0,
    backgroundColor: theme.palette.primary.main,
    top: 0,
  },
  title: {
    lineHeight: '48px',
  },
  menuIcon: {
    position: 'absolute',
    top: '0px',
    right: theme.spacing(2),
  },
  addIcon: {
    color: theme.palette.text.primary,
  },
}));


const HomePage = ({
  isLoading, reflections = {}, getReflections, match, logout, uid,
  reflectionsIndex = [],
  
}) => {

  useEffect(() => {
    if (uid) {
      getReflections();
    }
  }, [uid]);


  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppWindow className={classes.window} size="xs">

      <div
        className={classes.topNavigationContainer}
      >
        <Typography className={classes.title} align="center" variant="h5">
            Reflection log
        </Typography>


        <IconButton
          className={classes.menuIcon}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => {
            handleClose();
            logout();
          }}>Logout</MenuItem>
        </Menu>

        
      </div>


      <div className={classes.container}>
        <PrivateRoute component={ReflectionModal} path="/reflection/:id" />
        {isLoading && <Progress className={classes.progress} />}
        {!isLoading && reflectionsIndex.map(key => {
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
        component={RouterLink}
        to={`${match.path}reflection/new`}
      >
        <AddIcon className={classes.addIcon} />
      </Fab>
    </AppWindow>
  );
};
 
export default HomePage;