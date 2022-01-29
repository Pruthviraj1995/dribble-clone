import React from 'react';
import { string, number } from 'prop-types';
import UserImage from 'images/avatartInfo.png';
import { ImageWrapper } from '../Styled';

export const Avatar = ({ img = UserImage, height, width }) => (
  <ImageWrapper src={img} height={height} width={width} alt="image" />
);

Avatar.propTypes = {
  img: string,
  height: number,
  width: number,
};
