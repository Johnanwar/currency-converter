/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {
  NavLink,
} from 'react-router-dom';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav>
      <div className="container">
        <NavLink to="/">
          <h1 className="logo">
            Generic
            <span>Logo</span>
          </h1>
        </NavLink>

        <ul style={showMenu ? { height: 'auto' } : { height: 'max-content' }} className="site-nav">
          <li>
            <NavLink to="/">
              <i className="fa fa-home site-nav--icon" />
              USD
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <i className="fa fa-info site-nav--icon" />
              EUR
            </NavLink>
          </li>
        </ul>

        <div className="menu-toggle">
          <div onClick={() => setShowMenu(!showMenu)} className="hamburger" />
        </div>
      </div>
    </nav>
  );
}

export default Header;
