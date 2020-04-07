import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => {

  return {
    title: {
      lineHeight: '48px',
      position: 'absolute',
      top: 0,
      width: '100%',
      display: 'block',
      wordBreak: 'none',
    },
    header: {
      paddingTop: theme.spacing(3),
      marginLeft: theme.spacing(3),
    },
    textField: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      width: 'calc(100% - 48px)',
      right: `${theme.spacing(3)}px`,
      left: `${theme.spacing(3)}px`,
    },
    stepContainer: {
    },
    viewContainer: {
      overflowY: 'scroll',
      // paddingLeft: '24px', // Only on desktop
      // paddingRight: '24px',
    },
    hero: {
      position: 'absolute',
      right: theme.spacing(3),
      bottom: theme.spacing(3),
      color: theme.palette.text.primary,
    },
    menuIcon: {
      position: 'absolute',
      top: 0,
      right: theme.spacing(2),
    },
  };
});

const WarbandPage = ({
  saveWarband, isLoading, isSuccess, logout, warband = {},
  saveWarbandReset, warbandId, removeWarband, isSuccessGetWarbands,
}) => {


  useEffect(() => {
    saveWarbandReset();
  }, []);

  const classes = useStyles();

  const [topic, setTopic] = useState(warband.topic || '');
  const [answers, setAnswers] = useState(
    {}
  );

  useEffect(() => {

    setTopic(warband.topic || '');


    setAnswers({});

  }, [isSuccessGetWarbands]);


  const isDisabled = isLoading || isSuccess;
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      id=" warband-scroll-container"
      className={classes.viewContainer}
    >
      <Typography className={classes.title} align="center" variant="h5">
        { warbandId === 'new' ? 'New  warband...' : topic }
      </Typography>
      <IconButton
        className={classes.menuIcon}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => {
          handleClose();
          logout();
        }}>Logout</MenuItem>
        {
          (warbandId !== 'new' && warbandId) && (
            <MenuItem onClick={() => {
              handleClose();
              removeWarband(warbandId);
            }}>Delete  warband</MenuItem>
          )
        }
      </Menu>


      <div>
        TODO: ADD warband editor!
      </div>
      <Fab
        disabled={isDisabled || !topic}
        color="primary"
        onClick={() => {
          saveWarband({ topic, warbandId, ...answers });
        }}
        className={classes.hero}
      >
        Save
      </Fab>
    </div>
  );
};
 
export default WarbandPage;