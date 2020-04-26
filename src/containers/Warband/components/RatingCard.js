import React, { memo } from 'react';
import { Typography } from '@material-ui/core';
import {
  getTotalExperience,
  getWarbandMemberCount,
  getRatingFromMemberCount,
  getRating,
} from '../helpers';


const RatingCard = memo(({ classes, heroes, henchmen }) => {
  return (
    <>
      <h5
        id="rating_header"
        style={{ paddingTop: '24px' }}
        className={classes.h5}
      >Rating</h5>

      <Typography
        className={classes.textFieldShort}
        variant="body1"
      >Total experience: {getTotalExperience(heroes, henchmen)}</Typography>
      <Typography variant="body1">
      Members ({getWarbandMemberCount(heroes, henchmen)}) x 5: {getRatingFromMemberCount(heroes, henchmen)}
      </Typography>
      <Typography variant="body1">Rating: {getRating(heroes, henchmen)}</Typography>
    </>
  );
});

export default RatingCard;