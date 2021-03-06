import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink, match as Match } from 'react-router-dom';
import ArrowRight from '@material-ui/icons/ArrowRight';
import { Warband } from '../../ducks/warbands';


const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    borderRadius: 0,
    position: 'relative',
    borderStyle: 'solid',
    borderColor: '#C0C0C0',
    borderTopWidth: '0',
    backgroundColor: 'white',
    borderBottomWidth: '0.5px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#C0C0C0',
    borderLeftWidth: '0.5px',
    borderRightWidth: '0.5px',
    [theme.breakpoints.down('xs')]: {
      borderLeftWidth: 0,
      borderRightWidth: 0,
    },
  },
  topic: {
    decoration: 'none',
    lineHeight: `${theme.spacing(6)}px`,
    wordBreak: 'break-all',
    paddingRight: '59px',
  },
  iconButton: {
    position: 'absolute',
    right: '10px',
    top: '4px',
  },
  routerLink: {
    textDecoration: 'none',
  },
}));

interface Props {
  id: string;
  match: Match;
  warband: Warband;
}

const WarbandListItem: React.FunctionComponent<Props> = ({ warband, match, id }) => {
  const classes = useStyles();

  return (
    <RouterLink
      key={warband.id}
      to={`${match.path}warband/${id}`}
      className={classes.routerLink}
    >
      <div
        id={id}
        data-cy={id}
        className={classes.listItem}
      >
        <Grid container>
          <Grid item>
            <Typography className={classes.topic} variant="h6">
              {warband.name || 'No name'} {warband.type && '/'} {warband.type}
            </Typography>
            <IconButton
              className={classes.iconButton}
            >
              <ArrowRight fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </RouterLink>

  );
};

export default WarbandListItem;