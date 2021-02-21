import React, { memo } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Grid, TextField } from "@material-ui/core";

// @ts-ignore
import warbands from "../../../assets/warbands.json";

export interface WarbandGeneral {
  name?: string;
  type?: string;
  gamesPlayed?: number | string;
}

interface Props {
  handleChange(e: any): void;
  classes: any;
}

const GeneralCard = memo(
  ({
    classes,
    name,
    type,
    gamesPlayed,
    handleChange
  }: Props & WarbandGeneral) => {
    return (
      <>
        <h5
          style={{
            paddingTop: "24px",
            paddingBottom: "24px"
          }}
          id="general_header"
          className={classes.h5}
        >
          <b>General</b>
        </h5>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              full-width
              id="warband_name_textfield"
              variant="outlined"
              name="name"
              value={name || ""}
              onChange={handleChange}
              label={"Warband name"}
              style={{
                width: "100%"
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Autocomplete
              full-width
              selectOnFocus
              value={type || ""}
              freeSolo
              clearOnBlur
              classes={{
                groupUl: classes.groupUl
              }}
              options={warbands}
              onChange={(event, newValue) => {
                handleChange({
                  target: { value: newValue, getAttribute: () => "type" }
                });
              }}
              ListboxProps={{
                style: {
                  backgroundColor: "white"
                }
              }}
              renderInput={params => (
                <TextField
                  {...params}
                  full-width
                  name="type"
                  value={type || ""}
                  onChange={handleChange}
                  label="Warband type"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              inputProps={{
                min: 0,
              }}
              full-width
              variant="outlined"
              type="number"
              name="gamesPlayed"
              value={gamesPlayed || 0}
              onChange={handleChange}
              label={"Games played"}
            />
          </Grid>
        </Grid>
      </>
    );
  }
);

// GeneralCard.whyDidYouRender = true;
export default GeneralCard;
