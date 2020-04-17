import React, { useState, useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import Dialog from '../../components/Dialog';

import {
  getTotalExperience,
  getWarbandMemberCount,
  getRatingFromMemberCount,
  getRating,
  getHeroLevel,
  getHenchmanLevel,
} from './helpers';

import {
  Paper, Grid, MenuItem, Menu, IconButton, TextField, Typography, Select,
  FormControl, InputLabel,
} from '@material-ui/core';

import { path, isEmpty } from 'ramda';

import useStyles from './styles';

const attributesArr = ['m', 'ws', 'bs', 's', 't', 'w', 'i', 'a', 'ld'];

const henchmenIdArr = [
  'henchman_0', 'henchman_1', 'henchman_2',
  'henchman_3', 'henchman_4', 'henchman_5',
  'henchman_6',
];

const skillCategories = [
  'Combat', 'Shooting', 'Academic', 'Strength', 'Speed', 'Special',
];


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
              <Grid key={heroId} md={6} lg={4} xl={3} item>
                <Paper className={classes.paper}>
                  <Typography variant="h5">Hero {index + 1}/6</Typography>
                  <TextField
                    value={path(['heroes', heroId, 'name'], localWarband) || ''}
                    onChange={onHeroValueChange}
                    className={classes.textField}
                    label="Name"
                    name="name"
                  />
                  <TextField
                    value={path(['heroes', heroId, 'type'], localWarband) || ''}
                    onChange={onHeroValueChange}
                    className={classes.textField}
                    label={'Type'}
                    name="type"
                  />
                  <TextField
                    value={path(['heroes', heroId, 'equipment'], localWarband) || ''}
                    onChange={onHeroValueChange}
                    multiline
                    className={classes.textField}
                    label={'Equipment'}
                    name="equipment"
                  />
                  <TextField
                    value={path(['heroes', heroId, 'skills_injuries_etc'], localWarband) || ''}
                    onChange={onHeroValueChange}
                    multiline
                    className={classes.textField}
                    label={'Skills, injuries, etc.'}
                    name="skills_injuries_etc"
                  />

                  <FormControl
                    className={classes.textField}


                  >
                    <InputLabel id="skill-categories-label">Available skills</InputLabel>
                    <Select
                      labelId="skill-categories-label"
                      multiple
                      value={path(['heroes', heroId, 'skillCategories'], localWarband) || []}
                      MenuProps={{
                        classes: {
                          paper: classes.menuPaper,
                        },
                      }}
                      inputProps={{
                        name: 'skillCategories',
                      }}
                      name="skillCategories"
                      onChange={onHeroValueChange}
                    >
                      {skillCategories.map((skill) => (
                        <MenuItem
                          key={skill}
                          value={skill}
                        >
                          {skill}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>


                  <div
                    className={classes.attributesContainer}
                  >
                    {
                      attributesArr.map((attribute) => {


                        return (
                          <div
                            className={classes.attributeColumn}
                            key={attribute}
                          >
                            <Typography
                              className={classes.attributeHeader}
                              variant="body2"
                            >
                              <b>
                                {attribute.toUpperCase()}
                              </b>
                            </Typography>
                            <input
                              name={attribute}
                              onChange={(e) => onHeroAttributeChange(e, 'value')}
                              value={path(['heroes', heroId, attribute, 'value'], localWarband) || ''}
                              className={classes.attributeValue}
                              type="number"
                            />
                            <input
                              name={attribute}
                              onChange={(e) => onHeroAttributeChange(e, 'racialMax')}
                              value={path(['heroes', heroId, attribute, 'racialMax'], localWarband) || ''}
                              className={classes.attributeValue}
                              type="number"
                            />
                          </div>
                        );


                      })
                    }
                  </div>

                  <div
                    className={classes.levelRow}
                  >
                    <TextField
                      value={path(['heroes', heroId, 'exp'], localWarband) || ''}
                      onChange={onHeroValueChange}
                      label={'Total exp'}
                      name="exp"
                      type="number"
                    />
                    <Typography
                      className={classes.level}
                    >
                      <b>Level:</b>&nbsp;{getHeroLevel(path(['heroes', heroId, 'exp'], localWarband) || 1)}
                    </Typography>
                  </div>
                </Paper>
              </Grid>
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
              <Grid key={henchmanId} md={6} lg={4} xl={3} item>
                <Paper className={classes.paper}>
                  <Typography variant="h5">Henchman {index + 1}/{henchmenIdArr.length}</Typography>
                  <div
                    style={{
                      display: 'flex',
                      flexDircetion: 'row',
                    }}
                  >
                    <TextField
                      value={path(['henchmen', henchmanId, 'name'], localWarband) || ''}
                      onChange={onHenchmanValueChange}
                      className={classes.textField}
                      label="Name"
                      name="name"
                    />
                    <TextField
                      value={path(['henchmen', henchmanId, 'count'], localWarband) || ''}
                      onChange={onHenchmanValueChange}
                      className={classes.textField}
                      style={{
                        marginLeft: '24px',

                      }}
                      type="number"
                      label="Count"
                      name="count"
                    />
                  </div>
                  <TextField
                    value={path(['henchmen', henchmanId, 'type'], localWarband) || ''}
                    onChange={onHenchmanValueChange}
                    className={classes.textField}
                    label={'Type'}
                    name="type"
                  />
                  <TextField
                    value={path(['henchmen', henchmanId, 'equipment'], localWarband) || ''}
                    onChange={onHenchmanValueChange}
                    multiline
                    className={classes.textField}
                    label={'Equipment'}
                    name="equipment"
                  />
                  <TextField
                    value={path(['henchmen', henchmanId, 'skills_injuries_etc'], localWarband) || ''}
                    onChange={onHenchmanValueChange}
                    multiline
                    className={classes.textField}
                    label={'Skills, injuries, etc.'}
                    name="skills_injuries_etc"
                  />


                  <div
                    className={classes.attributesContainer}
                  >
                    {
                      attributesArr.map((attribute) => {
                        return (
                          <div
                            className={classes.attributeColumn}
                            key={attribute}
                          >
                            <Typography
                              className={classes.attributeHeader}
                              variant="body2"
                            >
                              <b>
                                {attribute.toUpperCase()}
                              </b>
                            </Typography>
                            <input
                              name={attribute}
                              onChange={(e) => onHenchmanAttributeChange(e, 'value')}
                              value={path(['henchmen', henchmanId, attribute, 'value'], localWarband) || ''}
                              className={classes.attributeValue}
                              type="number"
                            />

                            <label className={classes.checkBoxContainer}>
                              <input
                                name={attribute}
                                onChange={(e) => onHenchmanAttributeChange(e, 'isModified')}
                                checked={path(['henchmen', henchmanId, attribute, 'isModified'], localWarband) || ''}
                                type="checkbox"
                              />
                              <span className={classes.checkmark} />
                            </label>
                          </div>
                        );


                      })
                    }
                  </div>

                  <div
                    className={classes.levelRow}
                  >
                    <TextField
                      value={path(['henchmen', henchmanId, 'exp'], localWarband) || 0}
                      onChange={onHenchmanValueChange}
                      label={'Total exp'}
                      name="exp"
                      type="number"
                    />
                    <Typography
                      className={classes.level}
                    >
                      <b>Level:</b>&nbsp;{getHenchmanLevel(path(['henchmen', henchmanId, 'exp'], localWarband) || 0)}
                    </Typography>
                  </div>
                </Paper>
              </Grid>
            );

          })}

        </Grid>
      </div>
    </div>
  );
};

export default WarbandPage;