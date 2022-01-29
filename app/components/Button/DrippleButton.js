import React from 'react';
import { node, bool, string } from 'prop-types';
import { StyledDribbleButton } from './StyledButton';

export const DrippleButton = ({
  className,
  children,
  isLight = false,
  title,
}) => (
  <StyledDribbleButton
    className={`${className} ${isLight ? 'light' : ''}`}
    title={title}
  >
    {children}
  </StyledDribbleButton>
);

DrippleButton.propTypes = {
  children: node,
  isLight: bool,
  className: string,
  title: string,
};

export default DrippleButton;
