import React, { useState, useEffect, useRef } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import {
  Link, Paper, Divider, Grid,
  MenuItem, Menu, IconButton, TextField, Typography, Button,
} from '@material-ui/core';
import { path, isEmpty } from 'ramda';
import { v4 as uuid } from 'uuid';

import HenchmanCard from './components/HenchmanCard';
import HeroCard from './components/HeroCard';
import Dialog from '../../components/Dialog';
import {
  getTotalExperience,
  getWarbandMemberCount,
  getRatingFromMemberCount,
  getRating,
} from './helpers';

import useStyles from './styles';

let timeout;

const WarbandPage = ({
  saveWarband, logout, warband = {},
  warbandId, removeWarband, isSuccessGetWarbands,
  addWarbandReset, isLoadingGetWarbands,
}) => {

  const formScroll = useRef(null);

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


  const heroIndex = (() => {

    if (localWarband.heroIndex) {
      return localWarband.heroIndex;
    }

    if (localWarband.heroes){
      return Object.keys(localWarband.heroes);
    }

    return [];

  })();

  const henchmenIndex = (() => {

    if (localWarband.henchmenIndex) {
      return localWarband.henchmenIndex;
    }

    if (localWarband.henchmen){
      return Object.keys(localWarband.henchmen);
    }

    return [];

  })();

  const setAndSaveWarband = (myWarband) => {
    setLocalWarband(myWarband);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      saveWarband({ ...myWarband, warbandId });
    }, 1000);
  };

  return (
    <div
      className={classes.viewContainer}
    >
      <div
        className={classes.form}
      >
        <Paper className={classes.innerForm}>
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


          <div

            ref={formScroll}
          >

            <h5
              style={{
                paddingTop: '24px',
              }}
              id="general_header"
              className={classes.h5}
              variant="h5">General</h5>


            <Grid
              container
              spacing={2}
            >

              <Grid item>
                <TextField
                  variant="outlined"
                  name="name"
                  value={localWarband.name || ''}
                  onChange={handleChange}
                  className={classes.textFieldLong}
                  label={'Warband name'}
                />
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  name="type"
                  value={localWarband.type || ''}
                  onChange={handleChange}
                  className={classes.textFieldLong}
                  label={'Warband type'}
                />
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  type="number"
                  name="gamesPlayed"
                  value={localWarband.gamesPlayed || 0}
                  onChange={handleChange}
                  className={`${classes.numberField} ${classes.textFieldShort}`}
                  label={'Games played'}
                />
              </Grid>
            </Grid>

            <Divider style={{ marginTop: '24px' }}/>

            <h5
              id="wealth_header"
              style={{ paddingTop: '24px' }}
              className={classes.h5}
              variant="h5"
            >Wealth</h5>

            <Grid
              container
              spacing={3}
            >

              <Grid item>
                <div className={classes.textFieldLong}>
                  <TextField
                    variant="outlined"
                    name="shards"
                    value={localWarband.shards || 0}
                    onChange={handleChange}
                    label={'Wyrdstone shards'}
                    type="number"
                    className={classes.numberField}
                  />
                  <TextField
                    variant="outlined"
                    name="goldCrowns"
                    className={`${classes.goldCrowns} ${classes.numberField}`}
                    value={localWarband.goldCrowns || 0}
                    onChange={handleChange}
                    label={'Gold crowns'}
                    type="number"
                  />
                </div>
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  name="equipment"
                  value={localWarband.equipment || ''}
                  onChange={handleChange}
                  multiline
                  className={classes.textFieldArea}
                  label={'Equipment'}
                />
              </Grid>

            </Grid>

            <Divider style={{ marginTop: '24px' }}/>

            <h5
              id="rating_header"
              style={{ paddingTop: '24px' }}
              className={classes.h5}
            >Rating</h5>

            <Typography
              className={classes.textFieldShort}
              variant="body1"
            >Total experience: {getTotalExperience(localWarband)}</Typography>
            <Typography variant="body1">
                Members ({getWarbandMemberCount(localWarband)}) x 5: {getRatingFromMemberCount(localWarband)}
            </Typography>
            <Typography variant="body1">Rating: {getRating(localWarband)}</Typography>


            <Divider style={{ marginTop: '24px' }}/>


            {heroIndex.map((heroId, index) => {

              const hero = path(['heroes', heroId], localWarband) || {};

              const onHeroValueChange = (e) => {

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

                setAndSaveWarband(newWarband);
              };

              const onHeroAttributeChange = (e, key) => {

                const attributeName = e.target.getAttribute('name');

                const value = e.target.value;

                const heroMap = localWarband.heroes || {};
                const attribute = path([attributeName], hero) || {};

                const newWarband = {
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

                setAndSaveWarband(newWarband);
              };


              const deleteHero = (id) => {

                const index = heroIndex.indexOf(id);

                const newIndex = [...heroIndex];
                if (index > -1) {
                  newIndex.splice(index, 1);
                }

                const heroesMap = localWarband.heroes || {};
                const newWarband = {
                  ...localWarband,
                  heroIndex: newIndex,
                  heroes: {
                    ...heroesMap,
                  },
                };

                delete newWarband.heroes[id];

                setAndSaveWarband(newWarband);
              };


              return (
                <>
                  <HeroCard
                    deleteHero={deleteHero}
                    heroId={heroId}
                    classes={classes}
                    index={index}
                    hero={hero}
                    key={heroId}
                    onHeroAttributeChange={onHeroAttributeChange}
                    onHeroValueChange={onHeroValueChange}
                  />
                  <Divider style={{ marginTop: '24px' }}/>
                </>
              );

            })}

            <Button
              size="large"
              startIcon={<AddIcon />}
              className={classes.addHireButton}
              disabled={isLoadingGetWarbands}
              variant="contained"
              color="primary"
              onClick={() => {

                const newId = uuid();
                const newHeroIndex = [...heroIndex];

                newHeroIndex.push(newId);

                const newWarband = {
                  ...localWarband,
                  heroIndex: newHeroIndex,
                  heroes: {
                    ...localWarband.heroes,
                    [newId]: {},
                  },
                };

                setAndSaveWarband(newWarband);
              }}
            >Add hero</Button>


            <Divider style={{ marginTop: '24px' }}/>

            {henchmenIndex.map((henchmanId, index) => {


              const henchman = path(['henchmen', henchmanId], localWarband) || {};

              const onHenchmanValueChange = (e) => {

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

                setAndSaveWarband(newWarband);
              };

              const onHenchmanAttributeChange = (e, key) => {

                const attributeName = e.target.getAttribute('name');

                const value = key === 'isModified' ? e.target.checked : e.target.value;

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

                setAndSaveWarband(newLocalWarband);
              };

              const deleteHenchman = (id) => {

                const index = henchmenIndex.indexOf(id);

                const newIndex = [...henchmenIndex];
                if (index > -1) {
                  newIndex.splice(index, 1);
                }

                const henchmenMap = localWarband.henchmen || {};
                const newWarband = {
                  ...localWarband,
                  henchmenIndex: newIndex,
                  henchmen: {
                    ...henchmenMap,
                  },
                };

                delete newWarband.henchmen[id];

                setAndSaveWarband(newWarband);
              };


              return (
                <>
                  <HenchmanCard
                    deleteHenchman={deleteHenchman}
                    henchmanId={henchmanId}
                    classes={classes}
                    index={index}
                    onHenchmanValueChange={onHenchmanValueChange}
                    onHenchmanAttributeChange={onHenchmanAttributeChange}
                    henchman={henchman}
                    key={henchmanId}
                  />

                  <Divider style={{ marginTop: '24px' }}/>
                </>
              );

            })}

            <Button
              size="large"
              startIcon={<AddIcon />}
              className={classes.addHireButton}
              disabled={isLoadingGetWarbands}
              variant="contained"
              color="primary"
              onClick={() => {

                const newId = uuid();
                const newIndex = [...henchmenIndex];

                newIndex.push(newId);

                const newWarband = {
                  ...localWarband,
                  henchmenIndex: newIndex,
                  henchmen: {
                    ...localWarband.henchmen,
                    [newId]: {},
                  },
                };

                setAndSaveWarband(newWarband);
              }}
            >Add henchman</Button>
          </div>
        </Paper>
      </div>
      <div
        className={classes.navigation}
      >

        <Typography
          style={{
            marginTop: '16px',
            marginBottom: '8px',
          }}
          variant="body1"
        ><b>Navigation:</b></Typography>

        <div
          className={classes.navigationLink}
        >
          <Link
            onClick={() => {
              const scrollTarget = document.getElementById('general_header');
              if (formScroll && formScroll.current) {
                scrollTarget.scrollIntoView({
                  behavior: 'smooth',
                });
              }
            }}
          >&#8594; General</Link>
        </div>
        <div

          className={classes.navigationLink}
        >

          <Link

            onClick={() => {
              const scrollTarget = document.getElementById('wealth_header');
              if (formScroll && formScroll.current) {
                scrollTarget.scrollIntoView({
                  behavior: 'smooth',
                });
              }
            }}

          >&#8594; Wealth</Link>
        </div>
        <div

          className={classes.navigationLink}
        >
          <Link
            onClick={() => {
              const scrollTarget = document.getElementById('rating_header');
              if (formScroll && formScroll.current) {
                scrollTarget.scrollIntoView({
                  behavior: 'smooth',
                });
              }
            }}
          >&#8594; Rating</Link>
        </div>


        <Typography
          style={{
            marginTop: '16px',
            marginBottom: '8px',
          }}
          variant="body1"><b>Heroes:</b></Typography>

        {heroIndex.map((key) => {

          const hero = localWarband.heroes[key];
          return (
            <div
              className={classes.navigationLink}
              key={key}
            >
              <Link
                onClick={() => {
                  const scrollTarget = document.getElementById(key);
                  if (formScroll && formScroll.current) {
                    scrollTarget.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }
                }}
              > &#8594; { `${hero.name || ''} ${hero.type || ''}`}</Link>
            </div>
          );
        })}


        <Typography
          style={{
            marginTop: '16px',
            marginBottom: '8px',
          }}
          variant="body1"
        ><b>Henchmen:</b></Typography>

        {henchmenIndex.map((key) => {

          const henchman = localWarband.henchmen[key];
          return (
            <div
              className={classes.navigationLink}
              key={key}
            >
              <Link
                onClick={() => {
                  const scrollTarget = document.getElementById(key);
                  if (formScroll && formScroll.current) {
                    scrollTarget.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }
                }}
              > &#8594; {`${henchman.name || ''} ${henchman.type || ''}`}</Link>
            </div>)
          ;
        })}
      </div>
    </div>
  );
};

export default WarbandPage;