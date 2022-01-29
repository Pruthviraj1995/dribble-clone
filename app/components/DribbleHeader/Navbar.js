import React from 'react';
import { NavbarWrapper } from './Styled';
import { NavBarOptions } from './constants';

export const Navbar = () => (
  <NavbarWrapper>
    {NavBarOptions.map(({ id, option }) => (
      <div key={id} className="option">
        {option}
      </div>
    ))}
  </NavbarWrapper>
);
