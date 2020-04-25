import React, { memo } from 'react';
import { path } from 'ramda';
import { Button, Divider } from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import AddIcon from '@material-ui/icons/Add';

import HeroCard from './HeroCard';


const HeroList = memo(({ heroIndex, localWarband, setAndSaveWarband, classes, isLoadingGetWarbands }) => {
  console.log('render hero LIST');

  const onValueChange = (e, heroId) => {

    const hero = path(['heroes', heroId], localWarband) || {};

    const heroes = localWarband.heroes || {};

    const newWarband = {
      ...localWarband,
      heroes: {
        ...heroes,
        [heroId]: {
          ...hero,
          [e.target.name || e.target.getAttribute('name')]: e.target.value,
        },
      },
    };

    setAndSaveWarband(newWarband);
  };


  const onAttributeChange = (e, key, heroId) => {

    const hero = path(['heroes', heroId], localWarband) || {};

    const attributeName = e.target.getAttribute('name');

    const value = e.target.value;

    const heroMap = localWarband.heroes || {};
    const attribute = path([attributeName], hero) || {};

    const newWarband = {
      ...localWarband,
      heroes: {
        ...heroMap,
        [heroId]: {
          ...hero,
          [attributeName]: {
            ...attribute,
            [key]: value,
          },
        },
      },
    };

    setAndSaveWarband(newWarband);
  };


  return (
    <>
      {heroIndex.map((heroId, index) => {

        const hero = path(['heroes', heroId], localWarband) || {};


        const deleteHero = (id) => {

          const index = heroIndex.indexOf(id);

          const newIndex = [...heroIndex];
          if (index > -1) {
            newIndex.splice(index, 1);
          }

          const heroesMap = localWarband.heroes || {};
          const newWarband = {
            ...localWarband,
            heroIndex: newIndex,
            heroes: {
              ...heroesMap,
            },
          };

          delete newWarband.heroes[id];

          setAndSaveWarband(newWarband);
        };


        return (
          <>
            <HeroCard
              deleteHero={deleteHero}
              heroId={heroId}
              classes={classes}
              index={index}
              hero={hero}
              key={heroId}
              onAttributeChange={onAttributeChange}
              onValueChange={onValueChange}
            />
            <Divider className={classes.divider}/>
          </>
        );

      })}

      <Button
        size="large"
        startIcon={<AddIcon />}
        className={classes.addHireButton}
        disabled={isLoadingGetWarbands}
        variant="contained"
        color="primary"
        onClick={() => {

          const newId = uuid();
          const newHeroIndex = [...heroIndex];

          newHeroIndex.push(newId);

          const newWarband = {
            ...localWarband,
            heroIndex: newHeroIndex,
            heroes: {
              ...localWarband.heroes,
              [newId]: {},
            },
          };

          setAndSaveWarband(newWarband);
        }}
      >Add hero</Button>
    </>
  );
});

export default HeroList;