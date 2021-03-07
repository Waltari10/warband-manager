import React, { memo } from 'react';

import { Grid, TextField, Typography } from '@material-ui/core';
import { WarbandWealth } from '../../../ducks/warbands';
import useStyles from '../styles';


type Classes = ReturnType<typeof useStyles>


interface Props {
  classes: Classes;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange(e: any): void;
  totalGoldValue?: number;
}

const WealthCard: React.FunctionComponent<Props & WarbandWealth> = memo(
  ({
    classes,
    handleChange,
    shards,
    goldCrowns,
    equipment,
    totalGoldValue,
  }) => {
    return (
      <>
        <h5
          id="wealth_header"
          style={{ paddingTop: '24px', paddingBottom: '24px' }}
          className={classes.h5}
        >
          <b>Wealth</b>
        </h5>

        <Grid container spacing={2} direction="row">
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
            <Typography style={{ marginTop: '24px' }} variant="body1">
              Value: {totalGoldValue}
            </Typography>
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
  },
);

// TODO: if env
// WealthCard.whyDidYouRender = true;

export default WealthCard;
