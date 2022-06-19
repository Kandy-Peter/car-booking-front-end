import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { id: 1, path: '/', title: 'Home' },
    { id: 2, path: '/add_car', title: 'Add Car' },
    { id: 3, path: '/delete_cars', title: 'Delete Car' },
    { id: 4, path: '/create_reservation', title: 'Reserve Car' },
    { id: 5, path: '/my_reservations', title: 'My Reservations' },
  ];
  return (
    <header>
      <nav>
        {
          links.map((link) => <NavLink key={link.id} to={link.path}>{link.title}</NavLink>)
        }
      </nav>
    </header>
  );
};

export default Navbar;
