import React, { useEffect, useState } from 'react';
import classes from './AnimatedText.module.scss';

const FADE_INTERVAL_MS = 500;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;

const WORDS_TO_ANIMATE = [
  { word: 'Create', color: '#FFC107' },
  { word: 'Animate', color: '#FF5722' },
  { word: 'Publish', color: '#00BCD4' } ,
  { word: 'Monitor', color: '#4CAF50' },
  { word: 'Optimize', color: '#9C27B0' },
];

const AnimatedText = () => {
  const [fadeProp, setFadeProp] = useState('fade-in');
  const [wordOrder, setWordOrder] = useState(0);
  const [currentColor, setCurrentColor] = useState(WORDS_TO_ANIMATE[0].color);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeProp((prevFade) => (prevFade === 'fade-in' ? 'fade-out' : 'fade-in'));

      // Delay to allow the word to inherit the color before changing back
      setTimeout(() => {
        setCurrentColor(WORDS_TO_ANIMATE[wordOrder].color);

        // Update the wordOrder state after the color is set
        setWordOrder((prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length);
      }, FADE_INTERVAL_MS / 2);
    }, FADE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [wordOrder]);

  const { word } = WORDS_TO_ANIMATE[wordOrder];

  return (
    <div className={classes.animate}>
      <h3 className={classes.animate__header}>Bring Interactive Ads in your Marketing Strategy</h3>
      <h1 className={classes.animate__text}>
        Be Ready to. <span className={`${classes.fade} ${fadeProp}`} style={{ color: currentColor }}>
          {word}
        </span>
      </h1>
      <div className={classes.animate__request_demo}>
        <div className={classes.animate__request_demo__circle}></div>
        <div className={classes.animate__request_demo__text}>
          Request a demo
        </div>
        <div className={classes.animate__request_demo__btn_con}>
          <button className={classes.animate__request_demo__btn_con__btn} > Get started </button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;