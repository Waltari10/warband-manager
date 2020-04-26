import React, { useState, useEffect, useRef, useCallback } from 'react';
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

  const [general, setGeneral] = useState({});
  const [wealth, setWealth] = useState({});
  const [heroes, setHeroes] = useState({});
  const [heroIndex, setHeroIndex] = useState([]);
  const [henchmen, setHenchmen] = useState({});
  const [henchmenIndex, setHenchmenIndex] = useState([]);

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  useEffect(() => {

    if (isEmpty(localWarband) && isSuccessGetWarbands === true) {
      setHeroes(warband.heroes || {});
      setHenchmen(warband.henchmen || {});
      setHeroIndex(warband.heroIndex || warband.heroes && Object.keys(localWarband.heroes) || []);
      setHenchmenIndex(warband.henchmenIndex || warband.henchmen && Object.keys(localWarband.henchmen) || []);
      setLocalWarband(warband);
      setGeneral({
        name: warband.name || '',
        type: warband.type || '',
        gamesPlayed: warband.gamesPlayed || 0,
      });
      setWealth({
        goldCrowns: warband.goldCrowns || 0,
        shards: warband.shards || 0,
        equipment: warband.equipment || '',
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

    const newWealth = {
      ...wealth,
      [e.target.getAttribute('name')]: e.target.value,
    };

    setWealth(newWealth);
  }, [wealth]);

  const handleHeroesChange = useCallback((hero, heroId) => {
    setHeroes({
      ...heroes,
      [heroId]: hero,
    });
  }, [heroes]);


  const handleHenchmanChange = useCallback((henchman, id) => {
    setHenchmen({
      ...henchmen,
      [id]: henchman,
    });
  }, [henchmen]);


  const addHenchman = useCallback(id => {
    const newIndex = [...henchmenIndex];

    newIndex.push(id);

    setHenchmenIndex(newIndex);
    setHenchmen({
      ...henchmen,
      [id]: {},
    });
  }, [henchmen, henchmenIndex]);

  const deleteHenchman = useCallback(id => {
    const index = henchmenIndex.indexOf(id);

    const newIndex = [...henchmenIndex];
    if (index > -1) {
      newIndex.splice(index, 1);
    }

    const newHenchmen = {
      ...henchmen,
    };

    delete newHenchmen[id];

    setHenchmenIndex(newIndex);
    setHenchmen(newHenchmen);
  }, [henchmen, henchmenIndex]);


  const addHero = useCallback(heroId => {
    const newHeroIndex = [...heroIndex];

    newHeroIndex.push(heroId);

    setHeroIndex(newHeroIndex);
    setHeroes({
      ...heroes,
      [heroId]: {},
    });
  }, [heroes, heroIndex]);

  const deleteHero = useCallback(heroId => {
    const index = heroIndex.indexOf(heroId);

    const newIndex = [...heroIndex];
    if (index > -1) {
      newIndex.splice(index, 1);
    }

    const newHeroes = {
      ...heroes,
    };

    delete newHeroes[heroId];

    setHeroIndex(newIndex);
    setHeroes(newHeroes);
  }, [heroes, heroIndex]);


  useEffect(() => {
    if (isSuccessGetWarbands === true && !isEmpty(localWarband) && !isEmpty(warband)) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        saveWarband({ ...localWarband, ...wealth, henchmen, henchmenIndex, heroes, heroIndex, ...general, warbandId });
      }, 1000);
    }
  }, [wealth, general, warbandId, heroes, heroIndex, localWarband, henchmen, henchmenIndex]);

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
            className={classes.menuIcon}
            onClick={handleClick}
          >
            <MenuIcon className={classes.whiteMenuIcon} />
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
            {
              <MenuItem onClick={() => {
                handleClose();
                setIsConfirmOpen(true);
              }}>Delete  warband</MenuItem>
            }
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
              handleHeroChange={handleHeroesChange}
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