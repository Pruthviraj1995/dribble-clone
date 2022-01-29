import React from 'react';
import { string, node } from 'prop-types';

export const Description = ({
  description1,
  description2,
  description3,
  description4,
  children,
}) => {
  const descriptions = [description1, description2, description3, description4];
  return (
    <div className="font-size-20">
      {descriptions.map((description, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <p className="pt-12 font-weight-400 m-0 font-description" key={idx}>
          {description}
        </p>
      ))}
      {children}
    </div>
  );
};

Description.propTypes = {
  description1: string,
  description2: string,
  description3: string,
  description4: string,
  children: node,
};
