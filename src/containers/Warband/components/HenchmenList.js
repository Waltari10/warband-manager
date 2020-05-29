import React, { memo } from 'react';
import { path } from 'ramda';
import { Button, Divider } from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import AddIcon from '@material-ui/icons/Add';
import Card from './HenchmanCard';


const emptyObj = {};

const HenchmenList = memo(({
  index, classes, handleChange, items, add, deleteHire,
  warbandType,
}) => {

  return (
    <>
      {index.map((id, index) => {

        const henchman = path([id], items) || emptyObj;

        return (
          <React.Fragment
            key={id}
          >
            <Card
              warbandType={warbandType}
              deleteHire={deleteHire}
              id={id}
              classes={classes}
              index={index}
              henchman={henchman}
              handleChange={handleChange}
            />
            <Divider className={classes.divider}/>
          </React.Fragment>
        );

      })}

      <Button
        id="add_henchman_button"
        size="large"
        startIcon={<AddIcon />}
        className={classes.addHireButton}
        variant="contained"
        color="primary"
        onClick={() => {
          const newId = uuid();
          add(newId);
        }}
      >Add henchman</Button>
    </>
  );
});
// HenchmenList.whyDidYouRender = true;

export default HenchmenList;