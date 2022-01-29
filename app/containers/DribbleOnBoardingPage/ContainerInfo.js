import React from 'react';
import UserImage from 'images/avatartInfo.png';
import { DrippleButton } from 'components/Button/DrippleButton';
import { Avatar } from './components';
import { ContainerInfoWrapper } from './Styled';

export const ContainerInfo = () => (
  <ContainerInfoWrapper>
    <div className="d-flex">
      <Avatar img={UserImage} />
      <div className="p-10">
        <div className="font-bold">Onboarding #Exploration</div>
        <div>
          <a href="/" className="title">
            Eren ✦
          </a>
          <a href="/" className="title">
            {' '}
            <span className="pink-color pl-5 pr-5"> &#8226;</span> Follow{' '}
            <span className="pink-color pl-5 pr-5"> &#8226;</span>{' '}
          </a>
          <span className="pink-color cursor-pointer">Hire Me</span>
        </div>
      </div>
    </div>
    <div className="d-flex mr-1">
      <DrippleButton className="mr-10" isLight title="Save Shot">
        Save
      </DrippleButton>
      <DrippleButton title="Like this shot" isLight>
        {' '}
        &#10084; Like
      </DrippleButton>
    </div>
  </ContainerInfoWrapper>
);
