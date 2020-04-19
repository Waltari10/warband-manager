import React, { useState } from 'react';
import { TextField, IconButton, Grid } from '@material-ui/core';
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
    <div
      className={classes.hireContainer}
    >

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

      <h5
        id={henchmanId}
        className={classes.h5Hire}
      >Henchman {index + 1}/{MAX_HENCHMEN}</h5>
      <IconButton
        onClick={() => setIsOpen(true)}
        className={classes.removeButton}
      >
        <RemoveIcon />
      </IconButton>


      <Grid
        container
        spacing={3}
      >

        <Grid
          item
          className={classes.hireFieldsColumn}
        >
          <div
            className={classes.textFieldLong}
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <TextField
              variant="outlined"
              value={henchman.name || ''}
              onChange={onHenchmanValueChange}
              // className={classes.textFieldLong}
              label="Name"
              name="name"
            />
            <TextField
              className={classes.numberField}
              variant="outlined"
              value={henchman.count || ''}
              onChange={onHenchmanValueChange}
              // className={classes.textFieldShort}
              style={{
                marginLeft: '24px',
              }}
              type="number"
              label="Count"
              name="count"
            />
          </div>
          <TextField
            variant="outlined"
            value={henchman.type || ''}
            onChange={onHenchmanValueChange}
            className={classes.textFieldLong}
            label={'Type'}
            name="type"
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
              variant="outlined"
              value={henchman.exp || 0}
              onChange={onHenchmanValueChange}
              label={'Total exp'}
              name="exp"
              type="number"
              className={`${classes.textfieldShort} ${classes.numberField}`}
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
        </Grid>

        <Grid
          item
          className={classes.hireFieldsColumn}
        >
          <TextField
            variant="outlined"
            value={henchman.equipment || ''}
            onChange={onHenchmanValueChange}
            multiline
            className={classes.textFieldArea}
            label={'Equipment'}
            name="equipment"
          />
          <TextField
            variant="outlined"
            value={henchman.skills_injuries_etc || ''}
            onChange={onHenchmanValueChange}
            multiline
            className={classes.textFieldArea}
            label={'Special rules & skills'}
            name="skills_injuries_etc"
          />

        </Grid>
      </Grid>
    </div>
  );
};

export default HenchmanCard;