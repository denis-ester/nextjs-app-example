import React, { RefObject, MouseEvent, ChangeEvent } from 'react';

import { Input } from './styledComponents';

import { IBaseInputProps } from '../../atoms';

export interface ICheckboxProps extends IBaseInputProps {
  type?: 'checkbox';
  checked?: boolean;
  value?: any;
  className?: string;
  refName?:
    | ((instance: HTMLInputElement | null) => void)
    | RefObject<HTMLInputElement>
    | null
    | undefined;
  onClick?: (event: MouseEvent<any>) => any;
  onChange?: (event: ChangeEvent<any>) => any;
}

export const Checkbox = ({
  name,
  checked = false,
  onClick,
  onChange,
  value,
  className,
  refName,
}: ICheckboxProps) => (
  <Input
    refName={refName}
    type="checkbox"
    checked={checked}
    name={name}
    value={value}
    className={className}
    onClick={event => {
      if (onClick) {
        onClick(event);
      }
    }}
    onChange={event => {
      if (onChange) {
        onChange(event);
      }
    }}
  />
);
