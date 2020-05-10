import React, { useState, memo } from 'react';
import { TextField, IconButton, Grid, Checkbox, FormControlLabel } from '@material-ui/core';
import { path } from 'ramda';
import RemoveIcon from '@material-ui/icons/Delete';
import Dialog from '../../../components/Dialog';

import { attributesArr, MAX_HENCHMEN } from '../constants';

import { getHenchmanAdvancements } from '../helpers';


const HenchmanCard = memo(({
  classes, index, henchman = {}, handleChange,
  deleteHire, id,
}) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleValueChange = (e) => {

    handleChange(
      { ...henchman, [e.target.name || e.target.getAttribute('name')]: e.target.value },
      id
    );
  };


  const onAttributeChange = (e, key) => {

    const attributeName = e.target.getAttribute('name');

    const value = key === 'isModified' ? e.target.checked : e.target.value;

    const attribute = path([attributeName], henchman) || {};

    handleChange(
      {
        ...henchman,
        [attributeName]: {
          ...attribute,
          [key]: value,
        },
      },
      id
    );
  };

  return (
    <div
      className={classes.hireContainer}
    >

      <Dialog
        handleClose={() => setIsOpen(false)}
        handleConfirm={() => {
          setIsOpen(false);
          deleteHire(id);
        }}
        open={isOpen}
        title={`Are you sure you want to delete ${henchman.name || ''}` || '? '}
        confirm="Delete"
      />

      <h5
        data-cy="henchman_header"
        id={id}
        className={classes.h5Hire}
      >Henchman {index + 1}/{MAX_HENCHMEN}</h5>
      <IconButton
        data-cy="remove_henchman"
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
              onChange={handleValueChange}
              // className={classes.textFieldLong}
              label="Name"
              name="name"
            />
            <TextField
              className={classes.numberField}
              variant="outlined"
              value={henchman.count || ''}
              onChange={handleValueChange}
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
            onChange={handleValueChange}
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
                      onChange={(e) => onAttributeChange(e, 'value')}
                      value={path([attribute, 'value'], henchman) || ''}
                      className={classes.attributeValue}
                      type="number"
                    />

                    <label className={classes.checkBoxContainer}>
                      <input
                        name={attribute}
                        onChange={(e) => onAttributeChange(e, 'isModified')}
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

          <div>
            <FormControlLabel
              style={{
                marginTop: '8px',
                marginLeft: 0,
              }}
              checked={henchman.isLarge === 'true'}
              value={henchman.isLarge || 'false'}
              control={<Checkbox color="primary" />}
              label="Is large creature"
              labelPlacement="start"
              onChange={(e) => {
                e.target.value = e.target.checked;
                handleValueChange(e);
              }}
              name="isLarge"
            />

          </div>

          <div
            className={classes.advancementRow}
          >
            <TextField
              variant="outlined"
              value={henchman.exp || 0}
              onChange={handleValueChange}
              label={'Gained exp'}
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
            onChange={handleValueChange}
            multiline
            className={classes.textFieldArea}
            label={'Equipment'}
            name="equipment"
          />
          <TextField
            variant="outlined"
            value={henchman.skills_injuries_etc || ''}
            onChange={handleValueChange}
            multiline
            className={classes.textFieldArea}
            label={'Special rules & skills'}
            name="skills_injuries_etc"
          />

        </Grid>
      </Grid>
    </div>
  );
});

// HenchmanCard.whyDidYouRender = true;
export default HenchmanCard;