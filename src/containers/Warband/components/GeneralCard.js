import React, { memo } from 'react';

import { Grid, TextField } from '@material-ui/core';

const GeneralCard = memo(({ classes, name, type, gamesPlayed, handleChange }) => {
  console.log('render general');
  return (
    <>
      <h5
        style={{
          paddingTop: '24px',
        }}
        id="general_header"
        className={classes.h5}
        variant="h5">General</h5>


      <Grid
        container
        spacing={2}
      >

        <Grid item>
          <TextField
            variant="outlined"
            name="name"
            value={name || ''}
            onChange={handleChange}
            className={classes.textFieldLong}
            label={'Warband name'}
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            name="type"
            value={type || ''}
            onChange={handleChange}
            className={classes.textFieldLong}
            label={'Warband type'}
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            type="number"
            name="gamesPlayed"
            value={gamesPlayed || 0}
            onChange={handleChange}
            className={`${classes.numberField} ${classes.textFieldShort}`}
            label={'Games played'}
          />
        </Grid>
      </Grid>
    </>
  );
});

export default GeneralCard;