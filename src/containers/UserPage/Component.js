import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  name: {
    marginBottom: theme.spacing(3),
  },
  container: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));


const UserPage = ({ user, logout }) => {

  const classes = useStyles();

  return (
    <div
      className={classes.container}
    >
      <Typography className={classes.name} variant="h2">
        {user.displayName}
      </Typography>
      <Button
        variant="contained"
        onClick={logout}
      >Logout</Button>
    </div>
  );
};
 
export default UserPage;