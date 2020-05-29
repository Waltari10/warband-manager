import React, { memo } from 'react';

import { Grid, TextField, Typography } from '@material-ui/core';

const WealthCard = memo(({
  classes, handleChange, shards, goldCrowns, equipment,
  totalGoldValue,
}) => {
  return (
    <>

      <h5
        id="wealth_header"
        style={{ paddingTop: '24px', paddingBottom: '24px' }}
        className={classes.h5}
        variant="h5"
      ><b>Wealth</b></h5>

      <Grid
        container
        spacing={2}
        direction="row"
      >

        <Grid direction="column" item xs={12} sm={4} md={4}>
          <div>
            <TextField
              full-width
              variant="outlined"
              name="shards"
              value={shards || 0}
              onChange={handleChange}
              label={'Wyrdstone shards'}
              type="number"
            />
          </div>
          <div>
            <TextField
              full-width
              style={{
                marginTop: '24px',
              }}
              variant="outlined"
              name="goldCrowns"
              value={goldCrowns || 0}
              onChange={handleChange}
              label={'Gold crowns'}
              type="number"
            />
          </div>
          <Typography style={{ marginTop: '24px' }} variant="body1">Value: {totalGoldValue}</Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <TextField
            full-width
            variant="outlined"
            name="equipment"
            value={equipment || ''}
            onChange={handleChange}
            multiline
            label={'Equipment'}
            style={{
              width: '100%',
            }}
          />
        </Grid>

      </Grid>
    </>
  );
});
WealthCard.whyDidYouRender = true;

export default WealthCard;