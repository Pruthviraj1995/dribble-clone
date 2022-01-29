import React from 'react';
import { Carousel } from 'components/Carousel';
import { ContainerInfo } from './ContainerInfo';
import { Description } from './components';

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
            'https://picsum.photos/700/400?img=1',
            'https://picsum.photos/700/400?img=2',
            'https://picsum.photos/700/400?img=3',
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
      </div>
    </Container>
  );
}
