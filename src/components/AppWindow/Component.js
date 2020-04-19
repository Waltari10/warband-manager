import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  container: {

    background: '#F5F5F5',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
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
    overflow: 'hidden',
    overflowY: 'auto',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
}));

const AppWindow = ({ className, children, size }) => {

  const classes = useStyles();

  let width;
  let height;

  if (size === 'xs') {
    width = '400px';
  } else if (size === 'xl') {
    width = '1000px';
    height = '100%';
  } else {
    width = '600px';
  }

  return (
    <Paper
      id="appwindow"
      style={{
        maxWidth: width,
        width,
        minHeight: height,
      }}
      className={`${classes.container} ${className}`}
    >
      {children}
    </Paper>
  );
};

export default AppWindow;