import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderLinks } from './HeaderLinks.js';
import { Close, Menu } from '@mui/icons-material';
import logo from '../../assets/adsparo.png';
// import './Header.scss';
import classes from './Header.module.scss';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  }

  const closeMenuHandler = () => {
    setShowMenu(false);
  }

  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && showMenu) {
      setShowMenu(false);
    }
  }, [size.width, showMenu]);

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to='/' className={classes.header__content__logo}>
          <img src={logo} alt='logo' />
        </Link>
        <nav className={`${classes.header__content__nav} ${showMenu && size.width < 768 ? classes.isOpen : ''}`}>
          <ul className={classes.header__content__nav__list}>
            {HeaderLinks.map((item, index) => {
              return (
                <li key={index} className={classes.header__content__nav__list__list_items}>
                  <Link 
                    to={item.path} 
                    className={classes.header__content__nav__list__list_items__link}
                    onClick={closeMenuHandler}
                  >
                      {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className={classes.header__content__toggle}>
          {showMenu ? <Close className={classes.header__content__toggle__hamburger} onClick={closeMenuHandler} /> : <Menu className={classes.header__content__toggle__hamburger} onClick={showMenuHandler} />}
        </div>
      </div>
    </header>
  )
}

export default Header;