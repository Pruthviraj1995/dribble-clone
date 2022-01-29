import React from 'react';
import { string } from 'prop-types';
import { ImageWrapper } from '../Styled';

export const Avatar = ({ img }) => <ImageWrapper src={img} alt="image" />;

Avatar.propTypes = {
  img: string,
};
