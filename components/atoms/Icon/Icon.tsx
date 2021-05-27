import React from 'react';

export interface IIconProps {
  className?: string;
  path: JSX.Element;
  viewBox: string;
}

const Icon = ({ className, viewBox, path, ...rest }: IIconProps) => (
  <svg
    viewBox={viewBox}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    {path}
  </svg>
);

export default Icon;
