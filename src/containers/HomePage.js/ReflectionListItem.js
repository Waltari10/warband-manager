import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import ArrowRight from '@material-ui/icons/ArrowRight';


const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1),
    width: '100%',
    borderRadius: 0,
    position: 'relative',
    backgroundColor: 'white',
    borderBottomWidth: '0.5px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#C0C0C0',
  },
  topic: {
    decoration: 'none',
    lineHeight: `${theme.spacing(6)}px`,
  },
  iconButton: {
    position: 'absolute',
    right: theme.spacing(3),
    top: '4px',
  },
  routerLink: {
    textDecoration: 'none',
  },
}));

const ReflectionListItem = ({ reflection, match, id }) => {

  const classes = useStyles();

  return (
    <RouterLink
      key={reflection.id}
      to={`${match.path}reflection/${id}`}
      className={classes.routerLink}
    >
      <div
        className={classes.listItem}
      >
        <Grid container>
          <Grid item>
            <Typography className={classes.topic} variant="h6">{reflection.topic}</Typography>
            <IconButton
              className={classes.iconButton}
            >
              <ArrowRight fontSize="large"/>
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </RouterLink>
    
  );
};
 
export default ReflectionListItem;