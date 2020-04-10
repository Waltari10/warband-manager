import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { Divider, Input } from '@material-ui/core';

import { path } from 'ramda';

const useStyles = makeStyles((theme) => {

  return {
    title: {
      lineHeight: '48px',
      position: 'absolute',
      top: 0,
      width: '100%',
      display: 'block',
      wordBreak: 'none',
      color: 'white',
    },
    header: {
      paddingTop: theme.spacing(3),
      marginLeft: theme.spacing(3),
    },
    textField: {
      marginTop: theme.spacing(3),
      display: 'flex',
    },
    viewContainer: {
      overflowY: 'scroll',
      overflowX: 'hidden',
      height: '100%',
      // paddingLeft: '24px', // Only on desktop
      // paddingRight: '24px',
    },
    hero: {
      position: 'absolute',
      right: theme.spacing(3),
      bottom: theme.spacing(3),
      color: 'white',
    },
    menuIcon: {
      position: 'absolute',
      top: 0,
      right: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
    },
    gridContainer: {
      margin: theme.spacing(3),
      width: 'calc(100% - 48px)',
    },
    divider: {
      marginTop: theme.spacing(4),
    },
    level: {
      alignSelf: 'flex-end',
      marginLeft: '24px',
    },
    levelRow: {
      marginTop: '24px',
      display: 'flex',
      flexDirection: 'row',
    },
    attributesContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: '24px',
    },
    attributeColumn: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
    },
    attributeHeader: {
      textAlign: 'center',
      color: 'white',
      backgroundColor: 'black',
    },
    attributeValue: {
      maxWidth: '44.06px',
      textAlign: 'center',
      borderStyle: 'solid',
      borderWidth: '0.5px',
    },
  };
});

const attributesArr = ['m', 'ws', 'bs', 's', 't', 'w', 'i', 'a', 'ld'];

const WarbandPage = ({
  saveWarband, isLoading, isSuccess, logout, warband = {},
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
              <Typography variant="body1">Total experience: </Typography>
              <Typography variant="body1">Members (  ) x 5: </Typography>
              <Typography variant="body1">Rating: </Typography>
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
              />
              <TextField
                name="goldCrowns"
                value={localWarband.goldCrowns}
                onChange={handleChange}
                className={classes.textField}
                label={'Gold crowns'}
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

          <Grid md={6} item>
            <Paper className={classes.paper}>
              <Typography variant="h5">Heroes</Typography>

              {['hero_0', 'hero_1', 'hero_2', 'hero_3', 'hero_4', 'hero_5'].map((heroId) => {

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
                  <>
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
                        <b>Level:</b>&nbsp;{'1'}
                      </Typography>
                    </div>
                    <hr />
                    <Divider className={classes.divider}/>
                  </>
                );

              })}
            </Paper>
          </Grid>
          
          <Grid md={6} item>
            <Paper className={classes.paper}>
              <Typography variant="h5">Henchmen</Typography>
            </Paper>
          </Grid>
          
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