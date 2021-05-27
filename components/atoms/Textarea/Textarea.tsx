import React from 'react';

import { Textarea as StyledTextarea } from './styledComponents';

import { ICommonInputProps } from '../../atoms';

export interface ITextareaProps extends ICommonInputProps {
  type?: 'textarea';
  name: string;
  min?: number;
  max?: number;
  refName?: any;
}

export const Textarea = ({
  name,
  value = '',
  placeholder,
  refName,
  onChange: handleChange,
  onBlur: handleBlur,
}: ITextareaProps) => {
  return (
    <StyledTextarea
      defaultValue={value}
      placeholder={placeholder}
      id={name}
      name={name}
      ref={refName}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};
