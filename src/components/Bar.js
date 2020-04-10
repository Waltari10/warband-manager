import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';


const duration = 300;
const height = '44px';

const transitionStyles = {
  entering: { top: '16px' },
  entered: { top: '16px' },
  exiting: { top: `-${height}` },
  exited: { top: `-${height}` },
};

const useStyles = makeStyles(() => {
  return {
    bar: {
      color: 'white',
      transition: `top ${duration}ms ease-in-out`,
      zIndex: 99999,
      position: 'absolute',
      height,
      textAlign: 'center',
      lineHeight: height,
      paddingLeft: '24px',
      paddingRight: '24px',
      transform: 'translate(-50%, 0)',
      left: '50%',
      borderRadius: '5px',
      whiteSpace: 'nowrap',
    },
  };
});


const Bar = ({ isVisible, bgColor, children }) => {

  const theme = useTheme();
  const classes = useStyles();


  return (
    <Transition
      in={isVisible}
      timeout={duration}
    >
      {state => (
        <Typography
          className={classes.bar}
          variant="h6"
          style={{
            ...transitionStyles[state],
            backgroundColor: bgColor || theme.palette.grey[800],
          }}
        >
          {children}
        </Typography>
      )}
    </Transition>
  );
};

export default Bar;


Bar.propTypes = {
  isVisible: PropTypes.bool,
  children: PropTypes.node,
  bgColor: PropTypes.string,
};


