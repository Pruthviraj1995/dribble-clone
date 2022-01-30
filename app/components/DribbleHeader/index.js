import React, { useState } from 'react';
import { DrippleButton } from 'components/Button/DrippleButton';
import search from 'images/search.png';
import DribbleDark from 'images/dribble-dark.png';
import DribbleLight from 'images/dribble-light.png';
import { Navbar } from './Navbar';
import { DribbleHeaderWrapper, ImageWrapper } from './Styled';

export const DribbleHeader = () => {
  const [showLight, setShowLight] = useState(false);

  return (
    <DribbleHeaderWrapper>
      <div className="sub-wrapper">
        <div className="title-with-navbar">
          <div className="title">
            <img
              src={showLight ? DribbleLight : DribbleDark}
              alt="dribble-logo"
              className="height-20 width-100 cursor-pointer"
              onMouseOver={() => {
                setShowLight(!showLight);
              }}
              onMouseOut={() => {
                setShowLight(!showLight);
              }}
              onFocus={() => 1}
              onBlur={() => 1}
            />
          </div>
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
};

export default DribbleHeader;
