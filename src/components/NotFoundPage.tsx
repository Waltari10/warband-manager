import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { Theme } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) => {

  return {
    title: {
      marginTop: theme.spacing(6),
    },
    subTitle: {
      marginTop: theme.spacing(4),
    },
  };
});

const FlightPathNotFound: React.FunctionComponent = () => {

  const classes = useStyles();

  return (
    <div>
      <Typography
        className={classes.title}
        align='center'
        variant="h3"
      >
        URL is invalid!
      </Typography>
      <Typography
        className={classes.subTitle}
        align='center'
        variant="h4"
      >
        <Link
          to='/'
        >
          Go back to homepage
        </Link>
      </Typography>

    </div>
  );
};

export default FlightPathNotFound;