import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';


// TODO: Login with Google, register, password(once, show by default, make invisible by toggle), email

const Login = ({ isLoading, isError, isSuccess }) => {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(true);


  const isDisabled = isLoading || isSuccess;

  return (
    <div>
      <Paper>
        <Grid alignItems="center" direction="column" container>
          <Grid item>
            <Typography variant="h2">Issue Log</Typography>
          </Grid>
          <Grid item>
            <TextField
              style={{
                width: '274px',
              }}
              onChange={(e) => setEmail(e.target.value)}
              label="Type your email"
              disabled={isDisabled}
              placeholder="email"
              value={email}
            />
          </Grid>

          {/*
          InputProps={{
            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
          }} */}
          <Grid item>
            <TextField
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
              disabled={isDisabled}
              onClick={() => {}}
              variant="contained"
              color="primary"
            >Continue</Button>
          </Grid>

          <Grid item>
            <Link>
                Already have an account?
            </Link>
          </Grid>
        </Grid>
      </Paper>

    </div>
  );
};
 
export default Login;