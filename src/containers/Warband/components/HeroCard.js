import React from 'react';
import {
  Grid, Typography, TextField, Paper, FormControl, MenuItem,
  InputLabel, Select,
} from '@material-ui/core';
import { path } from 'ramda';

import { attributesArr, skillCategories } from '../constants';

import { getHeroAdvancements } from '../helpers';


const HeroCard = ({
  onHeroAttributeChange,
  classes, heroId, index, onHeroValueChange, warband,
}) => {
  return (

    <Grid key={heroId} md={6} lg={4} xl={3} item>
      <Paper className={classes.paper}>
        <Typography variant="h5">Hero {index + 1}/6</Typography>
        <TextField
          value={path(['heroes', heroId, 'name'], warband) || ''}
          onChange={onHeroValueChange}
          className={classes.textField}
          label="Name"
          name="name"
        />
        <TextField
          value={path(['heroes', heroId, 'type'], warband) || ''}
          onChange={onHeroValueChange}
          className={classes.textField}
          label={'Type'}
          name="type"
        />
        <TextField
          value={path(['heroes', heroId, 'equipment'], warband) || ''}
          onChange={onHeroValueChange}
          multiline
          className={classes.textField}
          label={'Equipment'}
          name="equipment"
        />
        <TextField
          value={path(['heroes', heroId, 'skills_injuries_etc'], warband) || ''}
          onChange={onHeroValueChange}
          multiline
          className={classes.textField}
          label={'Skills, injuries, etc.'}
          name="skills_injuries_etc"
        />

        <FormControl
          className={classes.textField}
        >
          <InputLabel id="skill-categories-label">Available skills</InputLabel>
          <Select
            labelId="skill-categories-label"
            multiple
            value={path(['heroes', heroId, 'skillCategories'], warband) || []}
            MenuProps={{
              classes: {
                paper: classes.menuPaper,
              },
            }}
            inputProps={{
              name: 'skillCategories',
            }}
            name="skillCategories"
            onChange={onHeroValueChange}
          >
            {skillCategories.map((skill) => (
              <MenuItem
                key={skill}
                value={skill}
              >
                {skill}
              </MenuItem>
            ))}
          </Select>
        </FormControl>


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
                    onChange={(e) => onHeroAttributeChange(e, 'value')}
                    value={path(['heroes', heroId, attribute, 'value'], warband) || ''}
                    className={classes.attributeValue}
                    type="number"
                  />
                  <input
                    name={attribute}
                    onChange={(e) => onHeroAttributeChange(e, 'racialMax')}
                    value={path(['heroes', heroId, attribute, 'racialMax'], warband) || ''}
                    className={classes.attributeValue}
                    type="number"
                  />
                </div>
              );


            })
          }
        </div>

        <div
          className={classes.advancementRow}
        >
          <TextField
            value={path(['heroes', heroId, 'exp'], warband) || 0}
            onChange={onHeroValueChange}
            label={'Total exp'}
            name="exp"
            type="number"
          />
          <TextField
            className={classes.startingExp}
            value={path(['heroes', heroId, 'startingExp'], warband) || 0}
            onChange={onHeroValueChange}
            label={'Starting exp'}
            name="startingExp"
            type="number"
          />
        </div>
        <div
          className={classes.advancementRow}
        >
          <Typography
            className={classes.advancement}
          >
            <b>Advancements:</b>&nbsp;{
              getHeroAdvancements(
                path(['heroes', heroId, 'exp'], warband) || 0,
                path(['heroes', heroId, 'startingExp'], warband) || 0,
              )
            }
          </Typography>
        </div>
      </Paper>
    </Grid>
  );
};

export default HeroCard;