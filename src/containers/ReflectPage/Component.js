import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

import { Link } from 'react-scroll';


const useStyles = makeStyles((theme) => {

  return {
    header: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    textField: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    stepContainer: {
      minHeight: '100vh',
    },
    viewContainer: {
      overflowY: 'scroll',
      height: '100%',
      paddingLeft: '24px',
      paddingRight: '24px',
    },
    hero: {
      position: 'absolute',
      right: '48px',
      bottom: '68px',
    },
  };
});

const ReflectPage = ({ saveReflection, isLoading, isSuccess, isError, error }) => {

  const classes = useStyles();

  const [topic, setTopic] = useState('');
  const [answers, setAnswers] = useState({});

  const steps = ['step-1', 'step-2', 'step-3', 'step-4', 'step-5'];
  const [heroAction, setHeroAction] = useState(steps[0]);


  const isDisabled = isLoading || isSuccess;
  

  return (
    <div
      id="reflection-scroll-container"
      className={classes.viewContainer}
    >
      <div className={classes.stepContainer}>
        <Typography align="center" className={classes.header} variant="h1">What do you want to reflect on?</Typography>
        <TextField
          disabled={isDisabled}
          className={classes.textField}
          multiline
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
            <Typography align="center" className={classes.header} variant="h1">Why? {index + 1}/{steps.length}</Typography>

            <TextField
              disabled={isDisabled}
              className={classes.textField}
              multiline
              variant="outlined"
              fullWidth
              // rows={6}
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
        onClick={heroAction === 'finish' ? () => saveReflection({ topic, ...answers }) : () => {}}
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