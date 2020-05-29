import React, { memo } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Grid, TextField } from '@material-ui/core';

import warbands from '../../../assets/warbands.json';

const GeneralCard = memo(({ classes, name, type, gamesPlayed, handleChange }) => {
  return (
    <>
      <h5
        style={{
          paddingTop: '24px',
          paddingBottom: '24px',
        }}
        id="general_header"
        className={classes.h5}
        variant="h5"><b>General</b></h5>
      <Grid
        container
        spacing={2}
      >

        <Grid item xs={12} sm={6} md={4}>
          <TextField
            full-width
            id="warband_name_textfield"
            variant="outlined"
            name="name"
            value={name || ''}
            onChange={handleChange}
            label={'Warband name'}
            style={{
              width: '100%',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>

          <Autocomplete
            full-width
            selectOnFocus
            value={type || ''}
            freeSolo
            clearOnBlur
            name="type"
            classes={{
              groupUl: classes.groupUl,
            }}
            options={warbands}
            onChange={(event, newValue) => {
              handleChange({ target: { value: newValue, getAttribute: () => 'type' } });
            }}
            ListboxProps={{
              style: {
                backgroundColor: 'white',
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                full-width
                name="type"
                value={type || ''}
                onChange={handleChange}
                label="Warband type"
                variant="outlined"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            full-width
            variant="outlined"
            type="number"
            min="0"
            name="gamesPlayed"
            value={gamesPlayed || 0}
            onChange={handleChange}
            label={'Games played'}
          />
        </Grid>
      </Grid>
    </>
  );
});

// GeneralCard.whyDidYouRender = true;
export default GeneralCard;