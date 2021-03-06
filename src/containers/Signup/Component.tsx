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

import * as constants from '../../constants';
import AppWindow from '../../components/AppWindow/index';
import { DispatchProps, StateProps } from './Container';

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(12),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
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
    cursor: 'pointer',
  },
  content: {
    width: '100%',
  },
  errorMsg: {
    marginBottom: theme.spacing(3),
    paddingLeft: '24px',
    paddingRight: '24px',
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


const Login: React.FunctionComponent<StateProps & DispatchProps> = ({
  isLoading, isError, isSuccess, signupWithEmail,
  googleSignIn, isAuthorized, error, resetUser,
}) => {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  React.useEffect(() => resetUser, []);

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
          <Typography align="center" variant="h4">{constants.APP_NAME}</Typography>
        </Grid>
        <Grid item>
          <InputBase
            name="email"
            autoComplete="username"
            style={{ display: 'flex' }}
            className={classes.email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isDisabled}
            placeholder="email"
            value={email}
            startAdornment={
              <InputAdornment position="start">
                <EmailIcon className={classes.inputStartAdornment} />
              </InputAdornment>
            }
          />
          <InputBase
            autoComplete="new-password"
            name="password"
            className={classes.password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isDisabled}
            type={showPassword ? 'text' : 'password'}
            value={password}
            placeholder="password"
            startAdornment={
              <InputAdornment position="start">
                <PasswordIcon className={classes.inputStartAdornment} />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={() => setShowPassword(!showPassword)}
                >
                  {
                    showPassword ?
                      (<Visibility className={classes.inputAdornment} />) :
                      (<VisibilityOff className={classes.inputAdornment} />)
                  }
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>
        <Grid item>
          <Button
            className={classes.continueButton}
            disabled={submitDisabled}
            onClick={() => signupWithEmail(email, password)}
            variant="contained"
            color="primary"
          >Create account</Button>
        </Grid>

        {
          isError && (
            <Grid className={classes.errorMsg} item>
              <Typography color="error" variant="body1">
                {(error && error.message) || 'Something went wrong!'}
              </Typography>
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
            component={RouterLink}
            to={'/'}
          >
            <Typography variant="body2">
              Already have an account? Login instead.
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </AppWindow>
  );
};

export default Login;