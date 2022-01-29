import React from 'react';
import { node, bool, string } from 'prop-types';
import { StyledDribbleButton } from './StyledButton';

export const DrippleButton = ({ className, children, isLight = false }) => (
  <StyledDribbleButton className={`${className} ${isLight ? 'light' : ''}`}>
    {children}
  </StyledDribbleButton>
);

DrippleButton.propTypes = {
  children: node,
  isLight: bool,
  className: string,
};

export default DrippleButton;
