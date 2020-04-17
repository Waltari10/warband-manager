import React from 'react';
import { Grid, Typography, TextField, Paper } from '@material-ui/core';
import { path } from 'ramda';

import { attributesArr } from '../constants';

import { getHenchmanAdvancements } from '../helpers';


const HenchmanCard = ({
  classes,
  henchmanId, index, henchmenIdArr, warband, onHenchmanValueChange, onHenchmanAttributeChange,
}) => {

  return (<Grid key={henchmanId} md={6} lg={4} xl={3} item>
    <Paper className={classes.paper}>
      <Typography variant="h5">Henchman {index + 1}/{henchmenIdArr.length}</Typography>
      <div
        style={{
          display: 'flex',
          flexDircetion: 'row',
        }}
      >
        <TextField
          value={path(['henchmen', henchmanId, 'name'], warband) || ''}
          onChange={onHenchmanValueChange}
          className={classes.textField}
          label="Name"
          name="name"
        />
        <TextField
          value={path(['henchmen', henchmanId, 'count'], warband) || ''}
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
        value={path(['henchmen', henchmanId, 'type'], warband) || ''}
        onChange={onHenchmanValueChange}
        className={classes.textField}
        label={'Type'}
        name="type"
      />
      <TextField
        value={path(['henchmen', henchmanId, 'equipment'], warband) || ''}
        onChange={onHenchmanValueChange}
        multiline
        className={classes.textField}
        label={'Equipment'}
        name="equipment"
      />
      <TextField
        value={path(['henchmen', henchmanId, 'skills_injuries_etc'], warband) || ''}
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
                <Typography
                  className={classes.attributeHeader}
                  variant="body2"
                >
                  <b>
                    {attribute.toUpperCase()}
                  </b>
                </Typography>
                <input
                  name={attribute}
                  onChange={(e) => onHenchmanAttributeChange(e, 'value')}
                  value={path(['henchmen', henchmanId, attribute, 'value'], warband) || ''}
                  className={classes.attributeValue}
                  type="number"
                />

                <label className={classes.checkBoxContainer}>
                  <input
                    name={attribute}
                    onChange={(e) => onHenchmanAttributeChange(e, 'isModified')}
                    checked={path(['henchmen', henchmanId, attribute, 'isModified'], warband) || ''}
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
          value={path(['henchmen', henchmanId, 'exp'], warband) || 0}
          onChange={onHenchmanValueChange}
          label={'Total exp'}
          name="exp"
          type="number"
        />
        <Typography
          style={{
            marginLeft: '24px',
          }}
          className={classes.advancement}
        >
          <b>Advancements:</b>&nbsp;{
            getHenchmanAdvancements(
              path(['henchmen', henchmanId, 'exp'], warband) || 0,
            )
          }
        </Typography>
      </div>
    </Paper>
  </Grid>
  );
};

export default HenchmanCard;