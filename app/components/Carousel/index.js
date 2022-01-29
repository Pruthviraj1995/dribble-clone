/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { array } from 'prop-types';
import { CarouselWrapper } from './Styled';

// Images should be in array example
// const images = ["https://picsum.photos/700/400?img=1", "https://picsum.photos/700/400?img=2", "https://picsum.photos/700/400?img=3"]

export const Carousel = ({ images = [] }) => (
  <CarouselWrapper interval="5000" showStatus={false} showIndicators={false}>
    {images.map(image => (
      <div key={image}>
        <img src={image} alt={image} className="h-100 w-100" />
      </div>
    ))}
  </CarouselWrapper>
);

Carousel.propTypes = {
  images: array,
};
