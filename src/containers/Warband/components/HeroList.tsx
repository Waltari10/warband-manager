import React, { memo } from 'react';
import { path } from 'ramda';
import { Button, Divider } from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import AddIcon from '@material-ui/icons/Add';
import HeroCard from './HeroCard';
import { Hero } from '../../../ducks/warbands';
import useStyles from '../styles';

type Classes = ReturnType<typeof useStyles>

const emptyObj = {};


interface Props {
  heroIndex: string[];
  classes: Classes;
  handleHeroChange(hero: Hero, heroId: string): void;
  heroes: Hero[];
  addHero(heroId: string): void;
  deleteHero(heroId: string): void;
  warbandType?: string;
}

const HeroList: React.FunctionComponent<Props> = memo(
  ({
    heroIndex,
    classes,
    handleHeroChange,
    heroes,
    addHero,
    deleteHero,
    warbandType,
  }) => {
    return (
      <>
        {heroIndex.map((heroId, index) => {
          const hero = path([heroId], heroes) || emptyObj;

          return (
            <React.Fragment key={heroId}>
              <HeroCard
                warbandType={warbandType}
                deleteHero={deleteHero}
                heroId={heroId}
                classes={classes}
                index={index}
                hero={hero}
                onValueChange={handleHeroChange}
              />
              <Divider className={classes.divider} />
            </React.Fragment>
          );
        })}

        <Button
          id="add_hero_button"
          size="large"
          startIcon={<AddIcon />}
          className={classes.addHireButton}
          variant="contained"
          color="primary"
          onClick={() => {
            const newId = uuid();
            addHero(newId);
          }}
        >
          Add hero
        </Button>
      </>
    );
  },
);
// HeroList.whyDidYouRender = true;

export default HeroList;
