import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink, Redirect } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  
  header: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  subheader: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  email: {
    marginBottom: theme.spacing(3),
  },
  password: {
    marginBottom: theme.spacing(3),
  },
  continueButton: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  loginLink: {
    marginBottom: theme.spacing(3),
  },
  container: {
    padding: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
  },
  errorMsg: {
    marginBottom: theme.spacing(3),
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

  console.log('login', isAuthorized);

  return (
    <div className={classes.container}>

      {
        (isAuthorized) &&
          <Redirect
            to='/'
          />
      }

      <Grid className={classes.content} alignItems="center" direction="column" container>
        <Grid className={classes.header} item>
          <Typography variant="h2">Issue Log</Typography>
        </Grid>
        <Grid className={classes.subheader} item>
          <Typography variant="h4">Signin</Typography>
        </Grid>
        <Grid item>
          <TextField
            style={{ display: 'flex' }}
            className={classes.email}
            onChange={(e) => setEmail(e.target.value)}
            label="Type your email"
            disabled={isDisabled}
            placeholder="email"
            value={email}
          />
          <TextField
            className={classes.password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isDisabled}
            type={showPassword ? 'text' : 'password'}
            value={password}
            label="Type your password"
            placeholder="password"
            InputProps={{
              endAdornment:
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>,
            }}
          />
        </Grid>
        <Grid item>
          <Button
            className={classes.continueButton}
            disabled={submitDisabled}
            onClick={() => loginWithEmail(email, password)}
            variant="contained"
            color="primary"
          >Continue</Button>
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
              New to Reflection Log? Create an account.
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
 
export default Login;