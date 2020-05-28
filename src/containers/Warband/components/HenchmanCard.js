import React, { useState, memo } from 'react';
import {
  TextField, IconButton, Grid, Checkbox, FormControlLabel, Typography,
} from '@material-ui/core';
import { path } from 'ramda';
import RemoveIcon from '@material-ui/icons/Delete';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Dialog from '../../../components/Dialog';
import unitTemplates, { henchmenIndexes } from '../../../assets/unitTemplates';
import { attributesArr, MAX_HENCHMEN } from '../constants';
import { getHenchmanAdvancements } from '../helpers';


const HenchmanCard = memo(({
  classes, index, henchman = {}, handleChange,
  deleteHire, id, warbandType,
}) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleValueChange = (e) => {

    handleChange(
      { ...henchman, [e.target.name || e.target.getAttribute('name')]: e.target.value },
      id
    );
  };

  const autoFill = (newHenchman) => {
    handleChange(
      { ...henchman, ...newHenchman },
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

  const [autoFillHenchman, setAutoFillHenchman] = useState(null);

  const henchmenTemplateIndex = henchmenIndexes[warbandType] || [];


  const availableHenchmen = henchmenTemplateIndex.map((h, index) => unitTemplates[henchmenTemplateIndex[index]]);


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


      <Dialog
        handleClose={() => setAutoFillHenchman(null)}
        handleConfirm={() => {
          setAutoFillHenchman(null);
          autoFill(autoFillHenchman);
        }}
        open={autoFillHenchman !== null}
        title={
          `Warning! This will overwrite ${henchman.name || ''} 
          attributes. Are you sure you want to do it?`
        }
        confirm="Overwrite"
      />

      <h5
        data-cy="henchman_header"
        id={id}
        className={classes.h5Hire}
      ><b>{henchman.name || 'Nameless'}</b> (Henchman {index + 1}/{MAX_HENCHMEN})</h5>
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
              style={{
                marginLeft: '24px',
              }}
              type="number"
              label="Count"
              name="count"
              inputProps={{
                min: '0',
              }}
            />
          </div>
          {/* <TextField
            variant="outlined"
            value={henchman.type || ''}
            onChange={handleValueChange}
            className={classes.textFieldLong}
            label={'Type'}
            name="type"
          /> */}

          <Autocomplete
            selectOnFocus
            value={henchman.type || ''}
            freeSolo
            clearOnBlur
            name="type"
            classes={{
              groupUl: classes.groupUl,
            }}
            renderOption={(option) => <Typography noWrap>{option}</Typography>}
            options={availableHenchmen.map((hench) => hench.unit_type)}
            style={{ width: 200 }}
            onChange={(e, newValue = '') => {

              let _henchman;

              if (newValue) {
                _henchman = availableHenchmen.find((hench) => hench.unit_type === newValue);
              }

              handleValueChange({ target: { value: newValue, getAttribute: () => 'type' } });

              if (!_henchman) {
                return;
              }


              const newHench = {
                type: newValue,
              };

              // fill attributes
              attributesArr.forEach((attributeKey) => {
                newHench[attributeKey] = {
                  value: _henchman[attributeKey],
                };
              });


              // Should confirm autofill
              // If any attribute has value require confirm
              let isConfirm = (
                attributesArr.some((attributeKey) => henchman[attributeKey])
              );

              if (isConfirm) {
                setAutoFillHenchman(newHench);
              } else {
                autoFill(newHench);
              }

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
                value={henchman.type || ''}
                onChange={handleValueChange}
                label="Type"
                variant="outlined"
                className={classes.textFieldLong}
              />
            )}
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
                      min="0"
                      max="10"
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
              inputProps={{
                min: '0',
              }}
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