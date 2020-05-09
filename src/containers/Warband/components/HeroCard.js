import React, { useState, memo } from 'react';
import {
  TextField, FormControl, MenuItem,
  InputLabel, Select, IconButton,
  Grid,
} from '@material-ui/core';
import { path } from 'ramda';
import RemoveIcon from '@material-ui/icons/Delete';
import Dialog from '../../../components/Dialog';

import { attributesArr, skillCategories, MAX_HEROES } from '../constants';

import { getHeroAdvancements } from '../helpers';


const HeroCard = memo(({
  hero,
  classes, index, onValueChange,
  deleteHero, heroId,
}) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleValueChange = (e) => {

    onValueChange(
      { ...hero, [e.target.name || e.target.getAttribute('name')]: e.target.value },
      heroId
    );
  };


  const onAttributeChange = (e, key, heroId) => {

    const attributeName = e.target.getAttribute('name');

    const value = e.target.value;

    const attribute = path([attributeName], hero) || {};

    onValueChange(
      {
        ...hero,
        [attributeName]: {
          ...attribute,
          [key]: value,
        },
      },
      heroId
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
          deleteHero(heroId);
        }}
        open={isOpen}
        title={`Are you sure you want to delete ${hero.name || ''}` || '? '}
        confirm="Delete"
      />

      <IconButton
        onClick={() => setIsOpen(true)}
        className={classes.removeButton}
      >
        <RemoveIcon />
      </IconButton>

      <h5
        id={heroId}
        className={classes.h5Hire}
        variant="h5"
      >Hero {index + 1}/{MAX_HEROES}</h5>


      <Grid
        container
        spacing={3}
      >

        <Grid
          item
          className={classes.hireFieldsColumn}
        >
          <TextField
            variant="outlined"
            value={hero.name || ''}
            onChange={handleValueChange}
            className={classes.textFieldLong}
            label="Name"
            name="name"
          />
          <TextField
            variant="outlined"
            value={hero.type || ''}
            onChange={handleValueChange}
            className={classes.textFieldLong}
            label={'Type'}
            name="type"
          />

          <FormControl
            className={classes.textFieldLong}
          >
            <InputLabel
              style={{
                marginLeft: '12px',
              }}
              id="skill-categories-label"
            >Available skills</InputLabel>
            <Select
              variant="outlined"
              labelId="skill-categories-label"
              multiple
              value={hero.skillCategories || []}
              MenuProps={{
                variant: 'menu',
                classes: {
                  paper: classes.menuPaper,
                },
              }}
              inputProps={{
                name: 'skillCategories',
              }}
              name="skillCategories"
              onChange={handleValueChange}
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
                      onChange={(e) => onAttributeChange(e, 'value', heroId)}
                      value={path([attribute, 'value'], hero) || ''}
                      className={classes.attributeValue}
                      type="number"
                    />
                    <input
                      name={attribute}
                      onChange={(e) => onAttributeChange(e, 'racialMax', heroId)}
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
              variant="outlined"
              value={hero.exp || 0}
              onChange={handleValueChange}
              label={'Gained exp'}
              name="exp"
              type="number"
              className={classes.numberField}
            />
            <TextField
              variant="outlined"
              className={`${classes.startingExp} ${classes.numberField}`}
              value={hero.startingExp || 0}
              onChange={handleValueChange}
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

        </Grid>
        <Grid
          item
          className={classes.hireFieldsColumn}
        >
          <TextField
            variant="outlined"
            value={hero.equipment || ''}
            onChange={handleValueChange}
            multiline
            className={classes.textFieldArea}
            label={'Equipment'}
            name="equipment"
          />
          <TextField
            variant="outlined"
            value={hero.skills_injuries_etc || ''}
            onChange={handleValueChange}
            multiline
            className={classes.textFieldArea}
            label={'Skills, injuries, etc.'}
            name="skills_injuries_etc"
          />
        </Grid>

      </Grid>
    </div>
  );
});

export default HeroCard;