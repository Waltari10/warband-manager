import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Link } from 'react-scroll';


const useStyles = makeStyles((theme) => {

  return {
    title: {
      lineHeight: '53px',
      position: 'absolute',
      top: 0,
      width: '100%',
      display: 'block',
      wordBreak: 'none',
    },
    header: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    textField: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    stepContainer: {
      minHeight: '100%',
    },
    viewContainer: {
      overflowY: 'scroll',
      height: '100%',
      width: '100%',
      // paddingLeft: '24px', // Only on desktop
      // paddingRight: '24px',
    },
    hero: {
      position: 'absolute',
      right: theme.spacing(3),
      bottom: theme.spacing(3),
    },
    menuIcon: {
      position: 'absolute',
      top: '5px',
      right: theme.spacing(3),
    },
  };
});

const ReflectPage = ({
  saveReflection, isLoading, isSuccess, logout, reflection = {},
  saveReflectionReset, reflectionId,
}) => {


  useEffect(() => {
    saveReflectionReset();
  }, []);

  const classes = useStyles();

  const [topic, setTopic] = useState(reflection.topic || '');
  const [answers, setAnswers] = useState(
    {
      'step-1': reflection['step-1'] || '',
      'step-2': reflection['step-2'] || '',
      'step-3': reflection['step-3'] || '',
      'step-4': reflection['step-4'] || '',
      'step-5': reflection['step-5'] || '',
    }
  );

  const steps = ['step-1', 'step-2', 'step-3', 'step-4', 'step-5'];
  const [heroAction, setHeroAction] = useState(steps[0]);


  const isDisabled = isLoading || isSuccess;
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      id="reflection-scroll-container"
      className={classes.viewContainer}
    >
      <Typography className={classes.title} align="center" variant="h6">
        {reflectionId === 'new' ? 'New reflection...' : topic }
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


      <div className={classes.stepContainer}>
        {/* h1 desktop */}
        <Typography align="center" className={classes.header} variant="h4">What do you want to reflect on?</Typography>
        <TextField
          disabled={isDisabled}
          className={classes.textField}
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          placeholder="Enter text..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
      </div>
      {steps.map((stepId, index) => {
        
        return (
          <div className={classes.stepContainer} id={stepId} key={stepId}>

            <Link
              containerId="reflection-scroll-container"
              hashSpy
              spy
              onSetActive={() => setHeroAction(
                steps.length > index + 1 ? steps[index + 1] : 'finish',
              )}
              onClick={() => {}}
              smooth
              duration={500}
              to={stepId}
            />

            <a name={stepId} />
            <Typography align="center" className={classes.header} variant="h4">
              Why? {index + 1}/{steps.length}
            </Typography>

            <TextField
              disabled={isDisabled}
              className={classes.textField}
              multiline
              variant="outlined"
              fullWidth
              rows={6}
              value={answers[stepId]}
              placeholder="Enter text..."
              onChange={(e) => {
                setAnswers({
                  ...answers,
                  [stepId]: e.target.value,
                });
              }}
            
            />
          </div>
        );
      })}
      <Fab
        component={Link}
        disabled={isDisabled}
        color="primary"
        onClick={heroAction === 'finish' ? () => {
          saveReflection({ topic, reflectionId, ...answers });
        } : () => {}}
        className={classes.hero}
        containerId="reflection-scroll-container"
        hashSpy
        spy
        smooth
        duration={500}
        to={heroAction}
      >
        {heroAction === 'finish' ? 'Save' : 'Next'}
      </Fab>
    </div>
  );
};
 
export default ReflectPage;