import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/VisibilityOutlined';
import VisibilityOff from '@material-ui/icons/VisibilityOffOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import PasswordIcon from '@material-ui/icons/VpnKeyOutlined';
import InputBase from '@material-ui/core/InputBase';


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
    borderBottomWidth: '0.5px',
    borderBottomStyle: 'dashed',
    borderStyle: 'solid',
    borderColor: '#C0C0C0',


  },
  password: {
    marginBottom: theme.spacing(3),
    background: 'white',
    borderBottomRightRadius: '4px',
    borderBottomLeftRadius: '4px',
    borderWidth: '0.5px',
    borderTopWidth: '0px',
    borderStyle: 'solid',
    height: '48px',
    overflow: 'hidden',
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
  isLoading, isError, isSuccess, loginWithEmail,
  googleSignIn, isAuthorized,
}) => {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const isDisabled = isLoading || isSuccess;

  const submitDisabled = isDisabled || !password || password.length < 7 || !email;

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
          <form acceptCharset="UTF-8">
            <InputBase
              name="email"
              style={{ display: 'flex' }}
              className={classes.email}
              onChange={(e) => setEmail(e.target.value)}
              // label="Type your email"
              disabled={isDisabled}
              placeholder="email"
              type="email"
              value={email}
              variant="filled"
              startAdornment={
                <InputAdornment position="start">
                  <EmailIcon className={classes.inputStartAdornment} />
                </InputAdornment>
              }
            />
            <InputBase
              name="password"
              variant="filled"
              className={classes.password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isDisabled}
              type={showPassword ? 'text' : 'password'}
              value={password}
              // label="Type your password"
              placeholder="password"
              startAdornment={
                <InputAdornment position="start">
                  <PasswordIcon className={classes.inputStartAdornment}/>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ?
                      (<Visibility className={classes.inputAdornment} />) :
                      (<VisibilityOff className={classes.inputAdornment} />)
                    }
                  </IconButton>
                </InputAdornment>
              }
            />
          </form>
        </Grid>
        <Grid item>
          <Button
            className={classes.continueButton}
            disabled={submitDisabled}
            onClick={() => loginWithEmail(email, password)}
            variant="contained"
            color="primary"
          >Sign in</Button>
        </Grid>

        {
          isError && (
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
            onClick={googleSignIn}
          >
            <Typography variant="body2">
                Continue with Google
            </Typography>
          </Link>
        </Grid>
        <Grid
          className={classes.loginLink}
          item
        >
          <Link
            to={'/signup'}
            component={RouterLink}
          >
            <Typography variant="body2">
              New to Mordheim Warbands? Create an account.
            </Typography>
          </Link>
        </Grid>
        <Grid
          className={classes.loginLink}
          item
        >
          <Link
            to={'/forgot-password'}
            component={RouterLink}
          >
            <Typography variant="body2">
             Forgot your password?
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </AppWindow>
  );
};

export default Login;