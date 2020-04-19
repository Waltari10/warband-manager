import React, { useState } from 'react';
import { Grid, TextField, Paper, IconButton } from '@material-ui/core';
import { path } from 'ramda';
import RemoveIcon from '@material-ui/icons/Delete';
import Dialog from '../../../components/Dialog';

import { attributesArr, MAX_HENCHMEN } from '../constants';

import { getHenchmanAdvancements } from '../helpers';


const HenchmanCard = ({
  classes, index, henchman = {}, onHenchmanValueChange, onHenchmanAttributeChange,
  deleteHenchman, henchmanId,
}) => {


  const [isOpen, setIsOpen] = useState(false);

  return (
    <Grid md={6} lg={4} xl={3} item>
      <Paper className={classes.paper}>

        <Dialog
          handleClose={() => setIsOpen(false)}
          handleConfirm={() => {
            setIsOpen(false);
            deleteHenchman(henchmanId);
          }}
          open={isOpen}
          title={`Are you sure you want to delete ${henchman.name || ''}` || '? '}
          confirm="Delete"
        />

        <h5 className={classes.h5}>Henchman {index + 1}/{MAX_HENCHMEN}</h5>
        {/* Add are you sure */}
        <IconButton
          onClick={() => setIsOpen(true)}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
          }}
        >
          <RemoveIcon />
        </IconButton>
        <div
          style={{
            display: 'flex',
            flexDircetion: 'row',
          }}
        >
          <TextField
            value={henchman.name || ''}
            onChange={onHenchmanValueChange}
            className={classes.textField}
            label="Name"
            name="name"
          />
          <TextField
            value={henchman.count || ''}
            onChange={onHenchmanValueChange}
            className={classes.textField}
            style={{
              marginLeft: '24px',

            }}
            type="number"
            label="Count"
            name="count"
          />
        </div>
        <TextField
          value={henchman.type || ''}
          onChange={onHenchmanValueChange}
          className={classes.textField}
          label={'Type'}
          name="type"
        />
        <TextField
          value={henchman.equipment || ''}
          onChange={onHenchmanValueChange}
          multiline
          className={classes.textField}
          label={'Equipment'}
          name="equipment"
        />
        <TextField
          value={henchman.skills_injuries_etc || ''}
          onChange={onHenchmanValueChange}
          multiline
          className={classes.textField}
          label={'Skills, injuries, etc.'}
          name="skills_injuries_etc"
        />


        <div
          className={classes.attributesContainer}
        >
          {
            attributesArr.map((attribute) => {
              return (
                <div
                  className={classes.attributeColumn}
                  key={attribute}
                >
                  <p
                    className={classes.attributeHeader}
                  >
                    <b>
                      {attribute.toUpperCase()}
                    </b>
                  </p>
                  <input
                    name={attribute}
                    onChange={(e) => onHenchmanAttributeChange(e, 'value')}
                    value={path([attribute, 'value'], henchman) || ''}
                    className={classes.attributeValue}
                    type="number"
                  />

                  <label className={classes.checkBoxContainer}>
                    <input
                      name={attribute}
                      onChange={(e) => onHenchmanAttributeChange(e, 'isModified')}
                      checked={path([attribute, 'isModified'], henchman) || ''}
                      type="checkbox"
                    />
                    <span className={classes.checkmark} />
                  </label>
                </div>
              );


            })
          }
        </div>

        <div
          className={classes.advancementRow}
        >
          <TextField
            value={henchman.exp || 0}
            onChange={onHenchmanValueChange}
            label={'Total exp'}
            name="exp"
            type="number"
          />
          <p
            style={{
              marginLeft: '24px',
            }}
            className={classes.advancement}
          >
            <b>Advancements:</b>&nbsp;{
              getHenchmanAdvancements(henchman.exp)
            }
          </p>
        </div>
      </Paper>
    </Grid>
  );
};

export default HenchmanCard;