import React, { useState, useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import {
  getTotalExperience,
  getWarbandMemberCount,
  getRatingFromMemberCount,
  getRating,
  getHeroLevel,
  getHenchmanLevel,
} from './helpers';

import { Divider, Paper, Grid, MenuItem, Menu, IconButton, Fab, TextField, Typography } from '@material-ui/core';

import { path } from 'ramda';

import useStyles from './styles';

const attributesArr = ['m', 'ws', 'bs', 's', 't', 'w', 'i', 'a', 'ld'];


const WarbandPage = ({
  saveWarband, isLoading, logout, warband = {},
  saveWarbandReset, warbandId, removeWarband, isSuccessGetWarbands,
}) => {


  useEffect(() => {
    saveWarbandReset();
  }, []);

  const classes = useStyles();

  const [localWarband, setLocalWarband] = useState({});

  useEffect(() => {
    setLocalWarband(warband);
  }, [isSuccessGetWarbands]);


  const isDisabled = isLoading; // TODO: Or no changes

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {

    setLocalWarband({
      ...localWarband,
      [e.target.getAttribute('name')]: e.target.value,
    });

  };

  return (
    <div
      id=" warband-scroll-container"
      className={classes.viewContainer}
    >
      <Typography className={classes.title} align="center" variant="h5">
        { warbandId === 'new' ? 'New  warband...' : warband.name }
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
      >
        <MenuItem onClick={() => {
          handleClose();
          logout();
        }}>Logout</MenuItem>
        {
          (warbandId !== 'new' && warbandId) && (
            <MenuItem onClick={() => {
              handleClose();
              removeWarband(warbandId);
            }}>Delete  warband</MenuItem>
          )
        }
      </Menu>


      <div>

        <Grid spacing={3} container className={classes.gridContainer}>
          <Grid md={6} item>
            <Paper className={classes.paper}>

              <Typography variant="h5">General</Typography>
              <TextField
                name="name"
                value={localWarband.name}
                onChange={handleChange}
                className={classes.textField}
                label={'Warband name'}
              />
              <TextField
                name="type"
                value={localWarband.type}
                onChange={handleChange}
                className={classes.textField}
                label={'Warband type'}
              />
            </Paper>
          </Grid>
          <Grid md={6} item>
            <Paper className={classes.paper}>
              <Typography variant="h5">Rating</Typography>
              <Typography variant="body1">Total experience: {getTotalExperience(localWarband)}</Typography>
              <Typography variant="body1">
                Members ({getWarbandMemberCount(localWarband)}) x 5: {getRatingFromMemberCount(localWarband)}
              </Typography>
              <Typography variant="body1">Rating: {getRating(localWarband)}</Typography>
            </Paper>
          </Grid>

          <Grid md={6} item>
            <Paper className={classes.paper}>
              <Typography variant="h5">Wealth</Typography>
              <TextField
                name="shards"
                value={localWarband.shards}
                onChange={handleChange}
                className={classes.textField}
                label={'Wyrdstone shards'}
                type="number"
              />
              <TextField
                name="goldCrowns"
                value={localWarband.goldCrowns}
                onChange={handleChange}
                className={classes.textField}
                label={'Gold crowns'}
                type="number"
              />
              <TextField
                name="equipment"
                value={localWarband.equipment}
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

              setLocalWarband({
                ...localWarband,
                heroes: {
                  ...heroes,
                  [heroId]: {
                    ...hero,
                    [e.target.getAttribute('name')]: e.target.value,
                  },
                },
              });
            };


            return (
              <Grid key={heroId} md={6} item>
                <Paper className={classes.paper}>
                  <Typography variant="h5">Hero {index + 1}/6</Typography>
                  <TextField
                    value={path(['heroes', heroId, 'name'], localWarband) || ''}
                    onChange={onHeroValueChange}
                    multiline
                    className={classes.textField}
                    label="Name"
                    name="name"
                  />
                  <TextField
                    value={path(['heroes', heroId, 'type'], localWarband) || ''}
                    onChange={onHeroValueChange}
                    multiline
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
                              onChange={onHeroValueChange}
                              value={path(['heroes', heroId, attribute], localWarband) || ''}
                              className={classes.attributeValue}
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
                      multiline
                      label={'Total exp'}
                      name="exp"
                    />
                    <Typography
                      className={classes.level}
                    >
                      <b>Level:</b>&nbsp;{getHeroLevel(path(['heroes', heroId, 'exp'], localWarband) || 1)}
                    </Typography>
                  </div>
                  <hr />
                  <Divider className={classes.divider}/>
                </Paper>
              </Grid>
            );

          })}

          {[
            'henchman_0', 'henchman_1', 'henchman_2',
            'henchman_3', 'henchman_4', 'henchman_5',
          ].map((henchmanId, index) => {

            const onHenchmanValueChange = (e) => {

              const henchman = path(['henchmen', henchmanId], localWarband) || {};
              const henchmenMap = localWarband.henchmen || {};

              setLocalWarband({
                ...localWarband,
                henchmen: {
                  ...henchmenMap,
                  [henchmanId]: {
                    ...henchman,
                    [e.target.getAttribute('name')]: e.target.value,
                  },
                },
              });
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
            };


            return (
              <Grid key={henchmanId} md={6} item>
                <Paper className={classes.paper}>
                  <Typography variant="h5">Henchman {index + 1}/6</Typography>
                  <div
                    style={{
                      display: 'flex',
                      flexDircetion: 'row',
                    }}
                  >
                    <TextField
                      value={path(['henchmen', henchmanId, 'name'], localWarband) || ''}
                      onChange={onHenchmanValueChange}
                      multiline
                      className={classes.textField}
                      label="Name"
                      name="name"
                    />
                    <TextField
                      value={path(['henchmen', henchmanId, 'count'], localWarband) || ''}
                      onChange={onHenchmanValueChange}
                      multiline
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
                    multiline
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
                      multiline
                      label={'Total exp'}
                      name="exp"
                    />
                    <Typography
                      className={classes.level}
                    >
                      <b>Level:</b>&nbsp;{getHenchmanLevel(path(['henchmen', henchmanId, 'exp'], localWarband) || 0)}
                    </Typography>
                  </div>
                  <hr />
                  <Divider className={classes.divider}/>
                </Paper>
              </Grid>
            );

          })}

        </Grid>
      </div>
      <Fab
        disabled={isDisabled || !localWarband.name}
        color="primary"
        onClick={() => {
          saveWarband({ ...localWarband, warbandId });
        }}
        className={classes.hero}
      >
        Save
      </Fab>
    </div>
  );
};

export default WarbandPage;