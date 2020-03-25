import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  container: {


    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: '100% !important',
      height: '100%',
      borderRadius: 0,
      minHeight: '100%',
      padding: 0,
    },

    // padding: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%',
    minHeight: '70%',
    overflow: 'hidden',
    maxHeight: '70%',
    overflowY: 'auto',
  },
}));

const AppWindow = ({ className, children, size }) => {

  const classes = useStyles();

  let width;

  if (size === 'xs') {
    width = '400px';
  } else {
    width = '600px';
  }

  return (
    <Paper
      style={{
        maxWidth: width,
      }}
      className={`${classes.container} ${className}`}
    >
      {children}
    </Paper>
  );
};
 
export default AppWindow;