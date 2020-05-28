import React, { useState, memo } from 'react';
import {
  TextField, FormControl, MenuItem,
  InputLabel, Select, IconButton,
  Grid, Checkbox, FormControlLabel,
  ListItemText, Typography,
} from '@material-ui/core';
import { path, uniq } from 'ramda';
import RemoveIcon from '@material-ui/icons/Delete';
import AddOutlined from '@material-ui/icons/AddOutlined';
import RemoveOutlined from '@material-ui/icons/RemoveOutlined';
import Autocomplete from '@material-ui/lab/Autocomplete';


import Dialog from '../../../components/Dialog';
import { attributesArr, MAX_HEROES } from '../constants';
import { getHeroAdvancements } from '../helpers';
import unitTemplates, { heroIndexes } from '../../../assets/unitTemplates';
import racialMaxes from '../../../assets/races.json';
import { getWarbandSkills } from '../../../assets/skillParser';


const HeroCard = memo(({
  hero,
  classes, index, onValueChange,
  deleteHero, heroId,
  warbandType,
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [autoFillHero, setAutoFillHero] = useState(null);

  const handleValueChange = (e) => {

    onValueChange(
      { ...hero, [e.target.name || e.target.getAttribute('name')]: e.target.value },
      heroId
    );
  };

  const autoFill = (newHero) => {
    onValueChange(
      { ...hero, ...newHero },
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

  const heroTemplateIndex = heroIndexes[warbandType] || [];


  const availableHeroes = heroTemplateIndex.map((h, index) => unitTemplates[heroTemplateIndex[index]]);


  const warbandSkills = getWarbandSkills(warbandType);

  const allSkills = uniq((hero.skillCategories || []).concat(warbandSkills));

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


      <Dialog
        handleClose={() => setAutoFillHero(null)}
        handleConfirm={() => {
          setAutoFillHero(null);
          autoFill(autoFillHero);
        }}
        open={autoFillHero !== null}
        title={
          `Warning! This will overwrite ${hero.name || ''} 
          attributes, experience and skillcategories. Are you sure you want to do it?`
        }
        confirm="Overwrite"
      />

      <IconButton
        data-cy="remove_hero"
        onClick={() => setIsOpen(true)}
        className={classes.removeButton}
      >
        <RemoveIcon />
      </IconButton>

      <h5
        data-cy="hero_header"
        id={heroId}
        className={classes.h5Hire}
        variant="h5"
      ><b>{hero.name || 'Nameless'}</b> (Hero {index + 1}/{MAX_HEROES})</h5>


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
          <Autocomplete
            selectOnFocus
            value={hero.type || ''}
            freeSolo
            clearOnBlur
            name="type"
            classes={{
              groupUl: classes.groupUl,
            }}
            renderOption={(option) => <Typography noWrap>{option}</Typography>}
            options={availableHeroes.map((hero) => hero.unit_type)}
            style={{ width: 200 }}
            onChange={(e, newValue = '') => {

              let _hero;

              if (newValue) {
                _hero = availableHeroes.find((hero) => hero.unit_type === newValue);
              }

              handleValueChange({ target: { value: newValue, getAttribute: () => 'type' } });

              if (!_hero) {
                return;
              }


              const newHero = {
                startingExp: _hero.exp,
                skillCategories: _hero.skill_lists,
                type: newValue,
              };

              // fill attributes
              attributesArr.forEach((attributeKey) => {
                newHero[attributeKey] = {
                  value: _hero[attributeKey],
                  racialMax: racialMaxes[_hero.race][attributeKey],
                };
              });


              // Should confirm autofill
              // If any attribute, experience or skillCategories has value require confirm
              let isConfirm = (
                !!hero.startingExp ||
                !!hero.exp ||
                (!!hero.skillCategories && !!hero.skillCategorieslength !== 0) ||
                attributesArr.some((attributeKey) => hero[attributeKey])
              );

              if (isConfirm) {
                setAutoFillHero(newHero);
              } else {
                autoFill(newHero);
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
                value={hero.type || ''}
                onChange={handleValueChange}
                label="Type"
                variant="outlined"
                className={classes.textFieldLong}
              />
            )}
          />

          <FormControl
            className={classes.textFieldLong}
          >
            <InputLabel
              style={{
                marginLeft: '12px',
                marginTop: '-5 px',
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
              label="Available skills"
              name="skillCategories"
              onChange={handleValueChange}
              renderValue={(selected) => selected.join(', ')}
            >
              {allSkills.map((skill) => {

                const isSelected = hero.skillCategories ?
                  hero.skillCategories.find((skillTemp) => skillTemp === skill) :
                  false;

                return (
                  <MenuItem
                    key={skill}
                    value={skill}
                  >
                    {
                      isSelected ? (
                        <RemoveOutlined style={{ marginRight: '8px' }} />
                      ) : (
                        <AddOutlined style={{ marginRight: '8px' }} />
                      )
                    }
                    <ListItemText primary={skill} />
                  </MenuItem>
                );
              })}
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
                      min="0"
                      max="10"
                      name={attribute}
                      onChange={(e) => onAttributeChange(e, 'value', heroId)}
                      value={path([attribute, 'value'], hero) || ''}
                      className={classes.attributeValue}
                      type="number"
                    />
                    <input
                      min="0"
                      max="10"
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

          <div>
            <FormControlLabel
              style={{
                marginTop: '8px',
                marginLeft: 0,
              }}
              checked={hero.isLarge === 'true'}
              value={hero.isLarge || 'false'}
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
              value={hero.exp || 0}
              onChange={handleValueChange}
              label={'Gained exp'}
              name="exp"
              type="number"
              className={classes.numberField}
              inputProps={{
                min: '0',
              }}
            />
            <TextField
              variant="outlined"
              className={`${classes.startingExp} ${classes.numberField}`}
              value={hero.startingExp || 0}
              onChange={handleValueChange}
              label={'Starting exp'}
              name="startingExp"
              type="number"
              inputProps={{
                min: '0',
              }}
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