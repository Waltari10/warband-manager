import React, { memo, useState } from "react";
import { Typography, IconButton } from "@material-ui/core";
import HelpIcon from "@material-ui/icons/HelpOutline";
import Dialog from "../../../components/Dialog";
import {
  getTotalExperience,
  getWarbandMemberCount,
  getRatingFromMemberCount,
  getRating
} from "../helpers";
import { Hero, Henchman } from "../../../ducks/warbands";

interface Props {
  classes: any;
  heroes?: Record<string, Hero>;
  henchmen?: Record<string, Henchman>;
}

const RatingCard = memo(({ classes, heroes, henchmen }: Props) => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div
      style={{
        position: "relative"
      }}
    >
      <h5
        id="rating_header"
        style={{ paddingTop: "24px" }}
        className={classes.h5}
      >
        <b>Rating</b>
      </h5>

      <Typography className={classes.textFieldShort} variant="body1">
        Total experience: {getTotalExperience(heroes, henchmen)}
      </Typography>
      <Typography variant="body1">
        Members ({getWarbandMemberCount(heroes, henchmen)}) x 5:{" "}
        {getRatingFromMemberCount(heroes, henchmen)}
      </Typography>
      <Typography variant="body1">
        Rating: {getRating(heroes, henchmen)}
      </Typography>

      <IconButton
        onClick={() => {
          setShowHelp(!showHelp);
        }}
        className={classes.removeButton}
      >
        <HelpIcon />
      </IconButton>

      <Dialog
        open={showHelp}
        title={"Rating calculation"}
        isConfirm={true}
        isCancel={false}
        handleConfirm={() => setShowHelp(false)}
        handleClose={() => setShowHelp(false)}
        confirm={"Close"}
        dialog={`
            Currently, rating calculation doens't recognize hired swords. 
              This means that for each hired sword, you should add
             to your total rating score the hired swords rating cost minus 
             5 rating points. 
             <br><br>
        
            For example, if you have hired a warlock whose base rating cost
             is 16, add 11 to your warbands automatically calculated total rating.
        `}
      />
    </div>
  );
});

export default RatingCard;
