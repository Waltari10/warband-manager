import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Progress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Menu from '@material-ui/core/Menu';
import { match as Match, Redirect } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Theme, Typography } from '@material-ui/core';

import CreateWarbandDialog from './components/CreateWarbandDialog';
import * as constants from '../../constants';
import PrivateRoute from '../PrivateRoute';
import WarbandModal from '../WarbandModal/index';
import SupportDialog from '../../components/SupportContact/index';

import WarbandListItem from './WarbandListItem';
import { DispatchProps, StateProps } from './Container';


const useStyles = makeStyles((theme: Theme) => ({
  fabProgress: {
    marginTop: '7px',
  },
  window: {
    padding: 0,
    position: 'relative',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.background.default,
  },
  container: {
    margin: '0 auto',
    display: 'block',
    marginTop: '48px',
    width: '100%',
    maxWidth: '1024px',
    height: 'calc(100% - 48px)',
    placeSelf: 'flex-start',
    overflowY: 'auto',
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
    marginLeft: '48px',
    marginRight: '48px',
    width: 'calc(100% - 96px)',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  menuIcon: {
    position: 'absolute',
    top: '0px',
    right: theme.spacing(2),
  },
  whiteMenuIcon: {
    color: 'white',
  },
  addIcon: {
    color: 'white',
    marginTop: '7px',
  },
  menu: {
    backgroundColor: 'white',
  },
  addFirstWarband: {
    marginTop: theme.spacing(12),
  },
}));

interface Props {
  match: Match;
}


const HomePage: React.FunctionComponent<StateProps & DispatchProps & Props> = ({
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


  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isCreateWarbandOpen, setIsCreateWarbandOpen] = useState(false);

  return (
    <div className={classes.window}>

      <CreateWarbandDialog
        addWarband={addWarband}
        open={isCreateWarbandOpen}
        close={() => setIsCreateWarbandOpen(false)}
      />

      {
        (addWarbandRequestState === constants.SUCCESS && lastAddedWarbandId) && (
          <Redirect
            to={`${match.path}warband/${lastAddedWarbandId}`}
          />)
      }

      <div
        className={classes.topNavigationContainer}
      >
        <Typography id="homepage_header" className={classes.title} align="center" variant="h5">
          Warbands
        </Typography>


        <IconButton
          className={classes.menuIcon}
          onClick={handleClick}
          id="homepage_menu_button"
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
            id="homepage_logout_button"
            onClick={() => {
              handleClose();
              logout();
            }}>Logout</MenuItem>
          <MenuItem
            onClick={() => {
              setIsSupportOpen(true);
            }}>Support/contact</MenuItem>
          {/* <MenuItem
            onClick={() => {
              setIsDisclaimerOpen(true);
            }}>Disclaimer</MenuItem> */}
        </Menu>


      </div>

      <SupportDialog
        open={isSupportOpen}
        handleClose={() => {
          setIsSupportOpen(false);
        }}
      />

      <div className={classes.container}>
        <PrivateRoute component={WarbandModal} path="/warband/:id" />
        {isLoading && <Progress className={classes.progress} />}
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

        {!isLoading && Object.keys(warbands).length === 0 && (
          <Typography
            variant="h6"
            className={classes.addFirstWarband}
            align="center"
          >No Warbands yet. Add first warband.</Typography>
        )}


        {!isLoading && (
          <Fab
            id="add_warband_button"
            className={classes.hero}
            disabled={addWarbandRequestState === constants.LOADING}
            color="primary"
            onClick={() => {
              setIsCreateWarbandOpen(true);
            }}
          >
            {
              addWarbandRequestState === constants.LOADING ?
                <Progress className={classes.fabProgress} /> :
                <AddIcon className={classes.addIcon} />
            }
          </Fab>
        )}

      </div>
    </div>
  );
};

export default HomePage;