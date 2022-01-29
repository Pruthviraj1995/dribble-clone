import React from 'react';
import { DrippleButton } from 'components/Button/DrippleButton';
import search from 'images/search.png';
import { Navbar } from './Navbar';
import { DribbleHeaderWrapper, ImageWrapper } from './Styled';

export const DribbleHeader = () => (
  <DribbleHeaderWrapper>
    <div className="sub-wrapper">
      <div className="title-with-navbar">
        <div className="title">dribble</div>
        <Navbar />
      </div>
      <div className="d-flex align-items-center">
        <div className="p-3 pink-color">
          <ImageWrapper src={search} alt="search" />
          Sign in / Sign up
        </div>
        <DrippleButton>Start a Project</DrippleButton>
      </div>
    </div>
  </DribbleHeaderWrapper>
);

export default DribbleHeader;
