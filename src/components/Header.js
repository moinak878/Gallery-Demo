import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>EDC Demo App</h1>
    <div className="links">
      <NavLink to="/" className="link">
       Upload
      </NavLink>
      <NavLink to="/gallery" className="link">
        View
      </NavLink>
    </div>
  </header>
);

export default Header;
