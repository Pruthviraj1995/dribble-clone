import React from 'react';
import { Carousel } from 'components/Carousel';
import OnBoardImage1 from 'images/onboard-image-1.png';
import OnBoardImage2 from 'images/onboard-image-2.png';
import OnBoardImage3 from 'images/onboard-image-3.png';
import OnBoardImage4 from 'images/onboard-image-4.png';
import OnBoardImage5 from 'images/onboard-image-5.png';
import { Description } from './components';
import { ContainerInfo } from './ContainerInfo';
import { HireMeSeperator } from './HireMeSeperator';

import { Container } from './Styled';

export default function DribbleOnBoardingPage() {
  const description1 = `Yo, what's up guys! 🥳`;
  const description2 = `It's tiring to write a different description for each shot, just like the shot and move on, love ya! 😘`;

  return (
    <Container>
      <div className="sub-container">
        <ContainerInfo />
        <Carousel
          images={[
            OnBoardImage1,
            OnBoardImage2,
            OnBoardImage3,
            OnBoardImage4,
            OnBoardImage5,
          ]}
        />
        <Description {...{ description1, description2 }}>
          <p className="d-flex flex-column">
            <span>
              Let&apos;s create something amazing together!{' '}
              <span role="img" aria-label="face">
                🧑‍🎨
              </span>
            </span>
            <span>
              {' '}
              Feel free to contact me -{' '}
              <span className="pink-color-100">ertuken@gmail.com</span>
            </span>
          </p>
        </Description>
        <HireMeSeperator />
      </div>
    </Container>
  );
}
