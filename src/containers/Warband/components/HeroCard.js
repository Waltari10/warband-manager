import React, { useState } from 'react';
import {
  Grid, TextField, Paper, FormControl, MenuItem,
  InputLabel, Select, IconButton,
} from '@material-ui/core';
import { path } from 'ramda';
import RemoveIcon from '@material-ui/icons/Delete';
import Dialog from '../../../components/Dialog';

import { attributesArr, skillCategories, MAX_HEROES } from '../constants';

import { getHeroAdvancements } from '../helpers';


const HeroCard = ({
  onHeroAttributeChange, hero,
  classes, index, onHeroValueChange,
  deleteHero, heroId,
}) => {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <Grid md={6} lg={4} xl={3} item>
      <Paper className={classes.paper}>

        <Dialog
          handleClose={() => setIsOpen(false)}
          handleConfirm={() => {
            setIsOpen(false);
            deleteHero(heroId);
          }}
          open={isOpen}
          title={`Are you sure you want to delete ${hero.name || ''}` || '? '}
          confirm="Delete"
        />

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

        <h5
          className={classes.h5}
          variant="h5"
        >Hero {index + 1}/{MAX_HEROES}</h5>
        <TextField
          value={hero.name || ''}
          onChange={onHeroValueChange}
          className={classes.textField}
          label="Name"
          name="name"
        />
        <TextField
          value={hero.type || ''}
          onChange={onHeroValueChange}
          className={classes.textField}
          label={'Type'}
          name="type"
        />
        <TextField
          value={hero.equipment || ''}
          onChange={onHeroValueChange}
          multiline
          className={classes.textField}
          label={'Equipment'}
          name="equipment"
        />
        <TextField
          value={hero.skills_injuries_etc || ''}
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
            value={hero.skillCategories || []}
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
                  <p
                    className={classes.attributeHeader}
                  >
                    <b>
                      {attribute.toUpperCase()}
                    </b>
                  </p>
                  <input
                    name={attribute}
                    onChange={(e) => onHeroAttributeChange(e, 'value')}
                    value={path([attribute, 'value'], hero) || ''}
                    className={classes.attributeValue}
                    type="number"
                  />
                  <input
                    name={attribute}
                    onChange={(e) => onHeroAttributeChange(e, 'racialMax')}
                    value={path([attribute, 'racialMax'], hero) || ''}
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
            value={hero.exp || 0}
            onChange={onHeroValueChange}
            label={'Total exp'}
            name="exp"
            type="number"
          />
          <TextField
            className={classes.startingExp}
            value={hero.startingExp || 0}
            onChange={onHeroValueChange}
            label={'Starting exp'}
            name="startingExp"
            type="number"
          />
        </div>
        <div
          className={classes.advancementRow}
        >
          <p
            className={classes.advancement}
          >
            <b>Advancements:</b>&nbsp;{
              getHeroAdvancements(
                hero.exp || 0,
                hero.startingExp || 0,
              )
            }
          </p>
        </div>
      </Paper>
    </Grid>
  );
};

export default HeroCard;