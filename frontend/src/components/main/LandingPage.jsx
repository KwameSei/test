import React from 'react';
import { AnimatedText, Footer } from '../../components';
import classes from './LandingPage.module.scss';

const LandingPage = () => {
  return (
    <div className={classes.home}>
      <div className={classes.home__circle1}></div>
      <div className={classes.home__circle2}></div>
      <div className={classes.home__effect}>
        <div className={classes.home__effect__circle}></div>
      </div>
      <div className={classes.home__effect2}>
        <div className={classes.home__effect2__circle3}></div>
      </div>
      <AnimatedText />
      {/* <Footer /> */}
    </div>
  )
}

export default LandingPage;