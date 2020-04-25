import React, { memo } from 'react';
import { Typography, Link } from '@material-ui/core';

const Navigation = memo(({ classes, formScroll, heroIndex, heroes, henchmen, henchmenIndex }) => {
  console.log('render navigation');
  return (
    <div
      className={classes.navigation}
    >

      <Typography
        style={{
          marginTop: '16px',
          marginBottom: '8px',
        }}
        variant="body1"
      ><b>Navigation:</b></Typography>

      <div
        className={classes.navigationLink}
      >
        <Link
          onClick={() => {
            const scrollTarget = document.getElementById('general_header');
            if (formScroll && formScroll.current) {
              scrollTarget.scrollIntoView({
                behavior: 'smooth',
              });
            }
          }}
        >&#8594; General</Link>
      </div>
      <div

        className={classes.navigationLink}
      >

        <Link

          onClick={() => {
            const scrollTarget = document.getElementById('wealth_header');
            if (formScroll && formScroll.current) {
              scrollTarget.scrollIntoView({
                behavior: 'smooth',
              });
            }
          }}

        >&#8594; Wealth</Link>
      </div>
      <div

        className={classes.navigationLink}
      >
        <Link
          onClick={() => {
            const scrollTarget = document.getElementById('rating_header');
            if (formScroll && formScroll.current) {
              scrollTarget.scrollIntoView({
                behavior: 'smooth',
              });
            }
          }}
        >&#8594; Rating</Link>
      </div>


      <Typography
        style={{
          marginTop: '16px',
          marginBottom: '8px',
        }}
        variant="body1"><b>Heroes:</b></Typography>

      {heroIndex.map((key) => {

        const hero = heroes[key];
        return (
          <div
            className={classes.navigationLink}
            key={key}
          >
            <Link
              onClick={() => {
                const scrollTarget = document.getElementById(key);
                if (formScroll && formScroll.current) {
                  scrollTarget.scrollIntoView({
                    behavior: 'smooth',
                  });
                }
              }}
            > &#8594; { `${hero.name || ''} ${hero.type || ''}`}</Link>
          </div>
        );
      })}


      <Typography
        style={{
          marginTop: '16px',
          marginBottom: '8px',
        }}
        variant="body1"
      ><b>Henchmen:</b></Typography>

      {henchmenIndex.map((key) => {

        const henchman = henchmen[key];
        return (
          <div
            className={classes.navigationLink}
            key={key}
          >
            <Link
              onClick={() => {
                const scrollTarget = document.getElementById(key);
                if (formScroll && formScroll.current) {
                  scrollTarget.scrollIntoView({
                    behavior: 'smooth',
                  });
                }
              }}
            > &#8594; {`${henchman.name || ''} ${henchman.type || ''}`}</Link>
          </div>)
        ;
      })}
    </div>
  );
});

export default Navigation;