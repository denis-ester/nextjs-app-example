import React from 'react';

import { Label as StyledLabel } from './styledComponents';

export interface ILabelProps {
  htmlFor?: string;
  label?: string;
  isInvisible?: boolean;
}

export const Label = ({
  htmlFor,
  label = '',
  isInvisible = false,
}: ILabelProps) => {
  return (
    <>{isInvisible && <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>}</>
  );
};
