import React from 'react';

const Icon = ({
  icon,
  width,
  height,
  fill,
}) => (
  <svg viewBox={icon.viewBox} width={width} height={height} fill={fill}>
    <use xlinkHref={`#${icon.id}`} />
  </svg>
);

export default Icon;
