import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Paper from '@material-ui/core/Paper';
import { path } from 'ramda';
import { format } from 'date-fns';


const useStyles = makeStyles((theme) => ({
  listItem: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    width: '100%',
    borderRadius: 0,
    position: 'relative',
  },
  date: {
    marginRight: theme.spacing(3),
    lineHeight: `${theme.spacing(6)}px`,
  },
  topic: {
    lineHeight: `${theme.spacing(6)}px`,
  },
  iconButton: {
    position: 'absolute',
    right: theme.spacing(3),
    top: theme.spacing(1),
  },
}));

const ReflectionListItem = ({ reflection, match, id }) => {

  const classes = useStyles();

  let createdAt = path(['createdAt', 'seconds'], reflection);
  let date;
  if (createdAt) {
    createdAt = createdAt * 1000;
    date = format(createdAt, 'd/M/yy');
  } else {
    date = 'No date';
  }

  return (
    <RouterLink
      key={reflection.id}
      to={`${match.path}reflection/${id}`}
    >
      <Paper
        className={classes.listItem}
      >
        <Grid container>
          <Grid item>
            <Typography className={classes.date} variant="h5">{date}</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.topic} variant="h5">{reflection.topic}</Typography>
            <IconButton
              className={classes.iconButton}
            >
              <ChevronRight/>
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </RouterLink>
    
  );
};
 
export default ReflectionListItem;