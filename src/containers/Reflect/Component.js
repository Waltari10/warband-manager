import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => {

  return {
    title: {
      lineHeight: '48px',
      position: 'absolute',
      top: 0,
      width: '100%',
      display: 'block',
      wordBreak: 'none',
    },
    header: {
      paddingTop: theme.spacing(3),
      marginLeft: theme.spacing(3),
    },
    textField: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      width: 'calc(100% - 48px)',
      right: `${theme.spacing(3)}px`,
      left: `${theme.spacing(3)}px`,
    },
    stepContainer: {
    },
    viewContainer: {
      overflowY: 'scroll',
      // paddingLeft: '24px', // Only on desktop
      // paddingRight: '24px',
    },
    hero: {
      position: 'absolute',
      right: theme.spacing(3),
      bottom: theme.spacing(3),
      color: theme.palette.text.primary,
    },
    menuIcon: {
      position: 'absolute',
      top: 0,
      right: theme.spacing(2),
    },
  };
});

const ReflectPage = ({
  saveReflection, isLoading, isSuccess, logout, reflection = {},
  saveReflectionReset, reflectionId, removeReflection, isSuccessGetReflections,
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

  useEffect(() => {

    setTopic(reflection.topic || '');


    setAnswers({
      'step-1': reflection['step-1'] || '',
      'step-2': reflection['step-2'] || '',
      'step-3': reflection['step-3'] || '',
      'step-4': reflection['step-4'] || '',
      'step-5': reflection['step-5'] || '',
    });

  }, [isSuccessGetReflections]);

  // console.log({ reflection, reflectionId });

  const steps = ['step-1', 'step-2', 'step-3', 'step-4', 'step-5'];


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
      <Typography className={classes.title} align="center" variant="h5">
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
        {
          (reflectionId !== 'new' && reflectionId) && (
            <MenuItem onClick={() => {
              handleClose();
              removeReflection(reflectionId);
            }}>Delete reflection</MenuItem>
          )
        }
      </Menu>


      <div className={classes.stepContainer}>
        {/* h1 desktop */}
        <Typography className={classes.header} variant="h6">Topic of reflection *</Typography>
        <TextField
          disabled={isDisabled}
          className={classes.textField}
          multiline
          // rows={4} // TODO: add minRows to Material-UI API
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
            <a name={stepId} />
            <Typography className={classes.header} variant="h5">
              Why? {index + 1}/{steps.length}
            </Typography>

            <TextField
              disabled={isDisabled}
              className={classes.textField}
              multiline
              variant="outlined"
              fullWidth
              // rows={4}
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
        disabled={isDisabled || !topic}
        color="primary"
        onClick={() => {
          saveReflection({ topic, reflectionId, ...answers });
        }}
        className={classes.hero}
      >
        Save
      </Fab>
    </div>
  );
};
 
export default ReflectPage;