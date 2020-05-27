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
        }}
        id="general_header"
        className={classes.h5}
        variant="h5"><b>General</b></h5>
      <Grid
        container
        spacing={2}
      >

        <Grid item>
          <TextField
            id="warband_name_textfield"
            variant="outlined"
            name="name"
            value={name || ''}
            onChange={handleChange}
            className={classes.textFieldLong}
            label={'Warband name'}
          />
        </Grid>
        <Grid item>

          <Autocomplete
            selectOnFocus
            value={type || ''}
            freeSolo
            clearOnBlur
            name="type"
            classes={{
              groupUl: classes.groupUl,
            }}
            options={warbands}
            style={{ width: 200 }}
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
                name="type"
                value={type || ''}
                onChange={handleChange}
                label="Warband type"
                variant="outlined"
                className={classes.textFieldLong}
              />
            )}
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            type="number"
            min="0"
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

// GeneralCard.whyDidYouRender = true;
export default GeneralCard;