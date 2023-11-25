import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, LinkedIn } from '@mui/icons-material';
import logo from '../../assets/adsparo.png';
import { FooterLinks } from './FooterLinks';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer__first_div}>
        <div className={classes.footer__first_div__logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes.footer__first_div__links}>
          {
            FooterLinks.map((item, index) => {
              return (
                <h3 key={index}>
                  <Link to={item.link} className={classes.footer__first_div__links__link}>{item.title}</Link>
                </h3>
              )
            })
          }
        </div>
      </div>

      <div className={classes.footer__second_div}>
        <div className={classes.footer__second_div__links}>
          <h3 className={classes.footer__second_div__links__text}>
            <Link to="/" className={classes.footer__second_div__links__text__link}>About Us</Link>
          </h3>
          <h3 className={classes.footer__second_div__links__text}>
            <Link to="/" className={classes.footer__second_div__links__text__link}>Careers</Link>
          </h3>
        </div>
        <p>© 2023. Created by Nathaniel Osei. All rights reserved</p>
      </div>

      <div className={classes.footer__third_div}>
        <div className={classes.footer__third_div__social}>
          <div className={classes.footer__third_div__social__items}>
            <Instagram />
          </div>
          <div className={classes.footer__third_div__social__items}>
            <LinkedIn />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;