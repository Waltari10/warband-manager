import React, { useReducer, useState, useEffect, useRef, useCallback } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Paper, Divider,
  MenuItem, Menu, IconButton, Typography,
} from '@material-ui/core';
import { isEmpty } from 'ramda';
import Dialog from '../../components/Dialog';
import GeneralCard from './components/GeneralCard';
import WealthCard from './components/WealthCard';
import Navigation from './components/Navigation';
import HeroList from './components/HeroList';
import HenchmenList from './components/HenchmenList';
import RatingCard from './components/RatingCard';
import SupportDialog from '../../components/SupportContact';

import {
  wealthReducer, heroReducer, initialHeroState, initialWealthState,
  henchmenReducer, initialHenchmenState, actions,
} from './reducers';

import useStyles from './styles';

let timeout;


const WarbandPage = ({
  saveWarband, logout, warband = {},
  warbandId, removeWarband, isSuccessGetWarbands,
  addWarbandReset, isLoadingGetWarbands,
  getWarbands,
}) => {

  const formScroll = useRef(null);

  const classes = useStyles();

  const [localWarband, setLocalWarband] = useState({});

  const [wealth, dispatchWealth] = useReducer(wealthReducer, initialWealthState);
  const [heroesState, dispatchHero] = useReducer(heroReducer, initialHeroState);

  const { heroes, index: heroIndex } = heroesState;

  const [henchmenState, dispatchHenchmen] = useReducer(henchmenReducer, initialHenchmenState);

  const { henchmen, index: henchmenIndex } = henchmenState;

  const [general, setGeneral] = useState({});

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  useEffect(() => {

    if (isEmpty(localWarband) && isSuccessGetWarbands === true) {

      dispatchHero({
        type: actions.OVERWRITE,
        payload: {
          index: warband.heroIndex || warband.heroes && Object.keys(warband.heroes) || [],
          heroes: warband.heroes || {},
        },
      });

      dispatchHenchmen({
        type: actions.OVERWRITE,
        payload: {
          index: warband.henchmenIndex || warband.henchmen && Object.keys(warband.henchmen) || [],
          henchmen: warband.henchmen || {},
        },
      });

      setLocalWarband(warband);
      setGeneral({
        name: warband.name || '',
        type: warband.type || '',
        gamesPlayed: warband.gamesPlayed || 0,
      });

      dispatchWealth({
        type: actions.OVERWRITE,
        payload: {
          goldCrowns: warband.goldCrowns || 0,
          shards: warband.shards || 0,
          equipment: warband.equipment || '',
        },
      });
    }
  }, [isSuccessGetWarbands]);

  useEffect(() => {
    addWarbandReset();

    return () => {
      getWarbands();
    };
  }, []);


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleGeneralChange = useCallback((e) => {
    const newGeneral = {
      ...general,
      [e.target.getAttribute('name')]: e.target.value,
    };

    setGeneral(newGeneral);

  }, [general]);


  const handleWealthChange = useCallback((e) => {
    dispatchWealth({ type: actions.UPDATE, payload: {
      name: e.target.getAttribute('name'),
      value: e.target.value,
    } });
  }, [dispatchWealth]);

  const handleHeroChange = useCallback((hero, heroId) => {
    dispatchHero({
      type: actions.UPDATE,
      payload: {
        id: heroId,
        hero,
      },
    });
  }, [dispatchHero]);


  const handleHenchmanChange = useCallback((henchman, id) => {

    dispatchHenchmen({
      type: actions.UPDATE,
      payload: {
        id,
        henchman,
      },
    });
  }, [dispatchHenchmen]);


  const addHenchman = useCallback(id => {
    dispatchHenchmen({
      type: actions.ADD,
      payload: id,
    });

  }, [dispatchHenchmen]);

  const deleteHenchman = useCallback(id => {
    dispatchHenchmen({
      type: actions.DELETE,
      payload: id,
    });
  }, [dispatchHenchmen]);


  const addHero = useCallback(heroId => {
    dispatchHero({
      type: actions.ADD,
      payload: heroId,
    });

  }, [dispatchHero]);

  const deleteHero = useCallback(heroId => {

    dispatchHero({
      type: actions.DELETE,
      payload: heroId,
    });
  }, [dispatchHero]);


  useEffect(() => {
    if (isSuccessGetWarbands === true && !isEmpty(localWarband) && !isEmpty(warband)) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        saveWarband({ ...localWarband, ...wealth, henchmen, henchmenIndex, heroes, heroIndex, ...general, warbandId });
      }, 1000);
    }
  }, [wealth, general, warbandId, heroes, heroIndex, localWarband, henchmen, henchmenIndex]);

  const [isSupportOpen, setIsSupportOpen] = useState(false);

  return (
    <div
      className={classes.viewContainer}
    >
      <div
        className={classes.form}
      >
        <Paper className={classes.innerForm}>
          <Typography className={classes.title} align="center" variant="h5">
            { general.name || 'No name' }
          </Typography>
          <IconButton
            id="warband-menu-button"
            className={classes.menuIcon}
            onClick={handleClick}
          >
            <MenuIcon className={classes.whiteMenuIcon} />
          </IconButton>


          <SupportDialog
            open={isSupportOpen}
            handleClose={() => {
              setIsSupportOpen(false);
            }}
          />

          <Menu
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

            <MenuItem
              id="delete_warband_button"
              onClick={() => {
                handleClose();
                setIsConfirmOpen(true);
              }}>Delete  warband</MenuItem>

            <MenuItem
              onClick={() => {
                setIsSupportOpen(true);
              }}>Support</MenuItem>

          </Menu>

          <Dialog
            title={`Are you sure you want to remove warband ${warband.name || 'no name'}`}
            confirm="Remove"
            open={isConfirmOpen}
            handleConfirm={() => {
              removeWarband(warbandId);
              setIsConfirmOpen(false);
            }}
            handleClose={() => {
              setIsConfirmOpen(false);
            }}
          />

          <div
            ref={formScroll}
          >
            <GeneralCard
              classes={classes}
              name={general.name || ''}
              type={general.type || ''}
              gamesPlayed={general.gamesPlayed || ''}
              handleChange={handleGeneralChange}
            />

            <Divider className={classes.divider}/>

            <WealthCard
              classes={classes}
              handleChange={handleWealthChange}
              shards={wealth.shards || 0}
              goldCrowns={wealth.goldCrowns || 0}
              equipment={wealth.equipment || ''}
            />

            <Divider className={classes.divider}/>

            <RatingCard
              heroes={heroes}
              henchmen={henchmen}
              classes={classes}
            />

            <Divider className={classes.divider}/>

            <HeroList
              handleHeroChange={handleHeroChange}
              heroIndex={heroIndex}
              heroes={heroes}
              classes={classes}
              isLoadingGetWarbands={isLoadingGetWarbands}
              addHero={addHero}
              deleteHero={deleteHero}
            />

            <Divider className={classes.divider}/>

            <HenchmenList
              index={henchmenIndex}
              classes={classes}
              handleChange={handleHenchmanChange}
              items={henchmen}
              add={addHenchman}
              deleteHire={deleteHenchman}
            />
          </div>
        </Paper>
      </div>
      <Navigation
        classes={classes}
        heroes={heroes}
        henchmen={henchmen}
        formScroll={formScroll}
        heroIndex={heroIndex}
        localWarband={localWarband}
        henchmenIndex={henchmenIndex}
      />
    </div>
  );
};

// WarbandPage.whyDidYouRender = true;
export default WarbandPage;