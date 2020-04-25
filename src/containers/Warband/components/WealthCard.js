import React, { memo } from 'react';

import { Grid, TextField } from '@material-ui/core';

const WealthCard = memo(({ classes, handleChange, shards, goldCrowns, equipment }) => {
  console.log('render wealth');
  return (
    <>

      <h5
        id="wealth_header"
        style={{ paddingTop: '24px' }}
        className={classes.h5}
        variant="h5"
      >Wealth</h5>

      <Grid
        container
        spacing={3}
      >

        <Grid item>
          <div className={classes.textFieldLong}>
            <TextField
              variant="outlined"
              name="shards"
              value={shards || 0}
              onChange={handleChange}
              label={'Wyrdstone shards'}
              type="number"
              className={classes.numberField}
            />
            <TextField
              variant="outlined"
              name="goldCrowns"
              className={`${classes.goldCrowns} ${classes.numberField}`}
              value={goldCrowns || 0}
              onChange={handleChange}
              label={'Gold crowns'}
              type="number"
            />
          </div>
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            name="equipment"
            value={equipment || ''}
            onChange={handleChange}
            multiline
            className={classes.textFieldArea}
            label={'Equipment'}
          />
        </Grid>

      </Grid>
    </>
  );
});

export default WealthCard;