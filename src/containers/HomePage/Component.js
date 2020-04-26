import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Progress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Menu from '@material-ui/core/Menu';
import { Redirect } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';


import * as constants from '../../constants';
import PrivateRoute from '../PrivateRoute';
import WarbandModal from '../WarbandModal';

import WarbandListItem from './WarbandListItem';


const useStyles = makeStyles((theme) => ({
  fabProgress: {
    marginTop: '7px',
  },
  window: {
    padding: 0,
    position: 'relative',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.background,
  },
  container: {
    margin: '0 auto',
    display: 'block',
    marginTop: '48px',
    width: '100%',
    maxWidth: '1024px',
    height: 'calc(100% - 48px)',
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
    display: 'block',
    margin: '0 auto',
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
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
    color: 'white',
  },
  menuIcon: {
    position: 'absolute',
    top: '0px',
    right: theme.spacing(2),
  },
  addIcon: {
    color: 'white',
    marginTop: '7px',
  },
  menu: {
    backgroundColor: 'white',
  },
}));


const HomePage = ({
  isLoading, warbands = {}, getWarbands, match, logout, uid,
  warbandsIndex = [], addWarband, lastAddedWarbandId,
  addWarbandRequestState,
}) => {

  useEffect(() => {
    if (uid) {
      getWarbands();
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
    <div className={classes.window}>

      {
        (addWarbandRequestState === constants.SUCCESS && lastAddedWarbandId) && (
          <Redirect
            to={`${match.path}warband/${lastAddedWarbandId}`}
          />)
      }

      <div
        className={classes.topNavigationContainer}
      >
        <Typography className={classes.title} align="center" variant="h5">
            Mordheim Warbands
        </Typography>


        <IconButton
          className={classes.menuIcon}
          onClick={handleClick}
        >
          <MenuIcon
            className={classes.whiteMenuIcon}
          />
        </IconButton>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          classes={{
            paper: classes.menu,
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              logout();
            }}>Logout</MenuItem>
        </Menu>


      </div>


      <div className={classes.container}>
        <PrivateRoute component={WarbandModal} path="/warband/:id" />
        {<Progress className={classes.progress} />}
        {warbandsIndex.map(key => {
          const warband = warbands[key];

          return (
            <WarbandListItem
              match={match}
              key={key}
              id={key}
              warband={warband}
            />
          );
        })}


        {!isLoading && (
          <Fab
            className={classes.hero}
            disabled={addWarbandRequestState === constants.LOADING}
            color="primary"
            onClick={() => {
              addWarband({});
            }}
          >
            {
              addWarbandRequestState === constants.LOADING ?
                <Progress className={classes.fabProgress}/> :
                <AddIcon className={classes.addIcon} />
            }
          </Fab>
        )}

        {!isLoading && Object.keys(warbands).length === 0 && (
          <Typography>No Warbands yet. Add first warband.</Typography>
        )}
      </div>
    </div>
  );
};

export default HomePage;