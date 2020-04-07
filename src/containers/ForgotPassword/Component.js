import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import InputBase from '@material-ui/core/InputBase';
import * as constants from '../../constants';

import AppWindow from '../../components/AppWindow';

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(12),
  },
  email: {
    background: 'white',
    borderTopRightRadius: '4px',
    borderTopLeftRadius: '4px',
    height: '48px',
    overflow: 'hidden',
    borderWidth: '0.5px',
    borderStyle: 'solid',
    borderColor: '#C0C0C0',
  },
  continueButton: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  loginLink: {
    marginBottom: theme.spacing(3),
  },
  content: {
    width: '100%',
  },
  errorMsg: {
    marginBottom: theme.spacing(3),
  },
  inputRoot: {
    backgroundColor: 'white',
    height: '48px',
  },
  input: {
    height: '48px',
    padding: '27px 12px 24px',
  },
  inputAdornment: {
    color: theme.palette.primary.main,
  },
  inputStartAdornment: {
    color: theme.palette.primary.main,
    marginLeft: theme.spacing(2),
  },
}));


const Login = ({
  isAuthorized, sendResetPasswordEmailRequestState, sendResetPasswordEmail,
}) => {

  const [email, setEmail] = useState('');

  const isDisabled = (
    sendResetPasswordEmailRequestState === constants.LOADING ||
    sendResetPasswordEmailRequestState === constants.SUCCESS
  );

  const submitDisabled = isDisabled || !email;

  const classes = useStyles();

  return (
    <AppWindow size="xs">

      {
        isAuthorized &&
          <Redirect
            to='/'
          />
      }

      <Grid className={classes.content} alignItems="center" direction="column" container>
        <Grid className={classes.header} item>
          <Typography variant="h4">Mordheim Warbands</Typography>
        </Grid>
        <Grid item>
          <InputBase
            style={{ display: 'flex' }}
            className={classes.email}
            onChange={(e) => setEmail(e.target.value)}
            // label="Type your email"
            disabled={isDisabled}
            placeholder="email"
            value={email}
            variant="filled"
            startAdornment={
              <InputAdornment position="start">
                <EmailIcon className={classes.inputStartAdornment} />
              </InputAdornment>
            }
          />
        </Grid>
        <Grid item>
          <Button
            className={classes.continueButton}
            disabled={submitDisabled}
            onClick={() => sendResetPasswordEmail(email)}
            variant="contained"
            color="primary"
          >Send password reset email</Button>
        </Grid>

        {
          sendResetPasswordEmailRequestState === constants.ERROR && (
            <Grid className={classes.errorMsg} item>
              <Typography color="error" variant="body1">Something went wrong!</Typography>
            </Grid>
          )
        }
        <Grid
          className={classes.loginLink}
          item
        >
          <Link
            component={RouterLink}
            to={'/'}
          >
            <Typography variant="body2">
              Go back to login
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </AppWindow>
  );
};
 
export default Login;