import React, { useState } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import openBtn from '../assets/images/open-nav.svg';
import closeBtn from '../assets/images/close-nav.svg';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const links = [
    { id: 1, path: '/add_car', title: 'Add Car' },
    { id: 2, path: '/delete_cars', title: 'Delete Car' },
    { id: 3, path: '/create_reservation', title: 'Reserve Car' },
    { id: 4, path: '/my_reservations', title: 'My Reservations' },
    { id: 5, path: '/registeration', title: 'Signup' },
    { id: 6, path: '/login', title: 'Login' },
  ];
  const handleMenu = () => setMenu(!menu);

  return (
    <>
      <button type="button" className="nav-toggle-btn" onClick={handleMenu}><img src={openBtn} alt="nav-open-button" className="nav-open-btn nav-btns" /></button>
      <nav className={menu ? 'nav-container' : 'nav-container-hidden'}>
        <button type="button" className="nav-toggle-btn" onClick={handleMenu}><img src={closeBtn} alt="nav-open-button" className="nav-open-btn nav-btns" /></button>
        <div className="nav-logo-img-container">
          <NavLink to="/"><img className="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png" alt="logo" srcSet="" /></NavLink>
        </div>
        <div className="nav-links">
          {
            links.map((link) => (
              <NavLink
                onClick={handleMenu}
                key={link.id}
                to={link.path}
                className={({ isActive }) => (isActive ? 'single-nav-link-active' : 'single-nav-link')}
              >
                {link.title}
              </NavLink>
            ))
          }
        </div>
        <button className="sign-out-btn" type="button">Sign out</button>
      </nav>
    </>
  );
};

export default Navbar;
