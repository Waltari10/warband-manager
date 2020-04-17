import React, { useState, useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import HenchmanCard from './components/HenchmanCard';
import HeroCard from './components/HeroCard';

import { henchmenIdArr } from './constants';

import Dialog from '../../components/Dialog';

import {
  getTotalExperience,
  getWarbandMemberCount,
  getRatingFromMemberCount,
  getRating,
} from './helpers';

import {
  Paper, Grid, MenuItem, Menu, IconButton, TextField, Typography,
} from '@material-ui/core';
import { path, isEmpty } from 'ramda';

import useStyles from './styles';


let timeout;

const WarbandPage = ({
  saveWarband, logout, warband = {},
  warbandId, removeWarband, isSuccessGetWarbands,
  addWarbandReset,
}) => {

  const classes = useStyles();

  const [localWarband, setLocalWarband] = useState({});

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  useEffect(() => {

    if (isEmpty(localWarband)) {
      setLocalWarband(warband);
    }
  }, [isSuccessGetWarbands]);

  useEffect(() => {
    addWarbandReset();
  }, []);


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {

    const newWarband = {
      ...localWarband,
      [e.target.getAttribute('name')]: e.target.value,
    };

    setLocalWarband(newWarband);

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      saveWarband({ ...newWarband, warbandId });
    }, 1000);

  };


  return (
    <div
      className={classes.viewContainer}
    >
      <Typography className={classes.title} align="center" variant="h5">
        { warband.name || 'No name' }
      </Typography>
      <IconButton
        className={classes.menuIcon}
        onClick={handleClick}
      >
        <MenuIcon style={{ color: 'white' }} />
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
          style={{
            backgroundColor: 'white',
          }}
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


      <div>

        <Grid spacing={3} container className={classes.gridContainer}>
          <Grid md={6} lg={4} xl={3} item>
            <Paper className={classes.paper}>

              <Typography variant="h5">General</Typography>
              <TextField
                name="name"
                value={localWarband.name || ''}
                onChange={handleChange}
                className={classes.textField}
                label={'Warband name'}
              />
              <TextField
                name="type"
                value={localWarband.type || ''}
                onChange={handleChange}
                className={classes.textField}
                label={'Warband type'}
              />
            </Paper>
          </Grid>
          <Grid md={6} lg={4} xl={3} item>
            <Paper className={classes.paper}>
              <Typography variant="h5">Rating</Typography>
              <Typography variant="body1">Total experience: {getTotalExperience(localWarband)}</Typography>
              <Typography variant="body1">
                Members ({getWarbandMemberCount(localWarband)}) x 5: {getRatingFromMemberCount(localWarband)}
              </Typography>
              <Typography variant="body1">Rating: {getRating(localWarband)}</Typography>
            </Paper>
          </Grid>

          <Grid md={6} lg={4} xl={3} item>
            <Paper className={classes.paper}>
              <Typography variant="h5">Wealth</Typography>
              <TextField
                name="shards"
                value={localWarband.shards || 0}
                onChange={handleChange}
                className={classes.textField}
                label={'Wyrdstone shards'}
                type="number"
              />
              <TextField
                name="goldCrowns"
                value={localWarband.goldCrowns || 0}
                onChange={handleChange}
                className={classes.textField}
                label={'Gold crowns'}
                type="number"
              />
              <TextField
                name="equipment"
                value={localWarband.equipment || ''}
                onChange={handleChange}
                multiline
                className={classes.textField}
                label={'Equipment'}
              />
            </Paper>
          </Grid>


          {['hero_0', 'hero_1', 'hero_2', 'hero_3', 'hero_4', 'hero_5'].map((heroId, index) => {

            const onHeroValueChange = (e) => {

              const hero = path(['heroes', heroId], localWarband) || {};
              const heroes = localWarband.heroes || {};

              const newWarband = {
                ...localWarband,
                heroes: {
                  ...heroes,
                  [heroId]: {
                    ...hero,
                    [e.target.name || e.target.getAttribute('name')]: e.target.value,
                  },
                },
              };

              setLocalWarband(newWarband);
              clearTimeout(timeout);
              timeout = setTimeout(() => {
                saveWarband({ ...newWarband, warbandId });
              }, 1000);
            };

            const onHeroAttributeChange = (e, key) => {

              const attributeName = e.target.getAttribute('name');

              const value = e.target.value;

              const hero = path(['heroes', heroId], localWarband) || {};
              const heroMap = localWarband.heroes || {};
              const attribute = path([attributeName], hero) || {};

              const newLocalWarband = {
                ...localWarband,
                heroes: {
                  ...heroMap,
                  [heroId]: {
                    ...hero,
                    [attributeName]: {
                      ...attribute,
                      [key]: value,
                    },
                  },
                },
              };

              setLocalWarband(newLocalWarband);
              clearTimeout(timeout);
              timeout = setTimeout(() => {
                saveWarband({ ...newLocalWarband, warbandId });
              }, 1000);
            };


            return (
              <HeroCard
                warband={localWarband}
                classes={classes}
                index={index}
                heroId={heroId}
                key={heroId}
                onHeroAttributeChange={onHeroAttributeChange}
                onHeroValueChange={onHeroValueChange}
              />
            );

          })}

          {henchmenIdArr.map((henchmanId, index) => {

            const onHenchmanValueChange = (e) => {

              const henchman = path(['henchmen', henchmanId], localWarband) || {};
              const henchmenMap = localWarband.henchmen || {};

              const newWarband = {
                ...localWarband,
                henchmen: {
                  ...henchmenMap,
                  [henchmanId]: {
                    ...henchman,
                    [e.target.getAttribute('name')]: e.target.value,
                  },
                },
              };

              setLocalWarband(newWarband);
              clearTimeout(timeout);
              timeout = setTimeout(() => {
                saveWarband({ ...newWarband, warbandId });
              }, 1000);
            };

            const onHenchmanAttributeChange = (e, key) => {

              const attributeName = e.target.getAttribute('name');

              const value = key === 'isModified' ? e.target.checked : e.target.value;

              const henchman = path(['henchmen', henchmanId], localWarband) || {};
              const henchmenMap = localWarband.henchmen || {};
              const attribute = path([attributeName], henchman) || {};

              const newLocalWarband = {
                ...localWarband,
                henchmen: {
                  ...henchmenMap,
                  [henchmanId]: {
                    ...henchman,
                    [attributeName]: {
                      ...attribute,
                      [key]: value,
                    },
                  },
                },
              };

              setLocalWarband(newLocalWarband);
              clearTimeout(timeout);
              timeout = setTimeout(() => {
                saveWarband({ ...newLocalWarband, warbandId });
              }, 1000);
            };


            return (
              <HenchmanCard
                classes={classes}
                index={index}
                onHenchmanValueChange={onHenchmanValueChange}
                onHenchmanAttributeChange={onHenchmanAttributeChange}
                warband={localWarband}
                henchmenIdArr={henchmenIdArr}
                henchmanId={henchmanId}
                key={henchmanId}
              />
            );

          })}

        </Grid>
      </div>
    </div>
  );
};

export default WarbandPage;