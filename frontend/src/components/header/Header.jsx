import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderLinks } from './HeaderLinks.js';
import logo from '../../assets/adsparo.png';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='logo'>
        <img src={logo} alt='logo' />
      </Link>
      <nav className='navbar'>
        <ul className='list'>
          {HeaderLinks.map((item, index) => {
            return (
              <li key={index} className='list-items'>
                <Link to={item.path} className='link'>{item.name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Header;