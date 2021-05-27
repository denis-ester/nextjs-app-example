import React, {
  RefObject,
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
} from 'react';

import { Input as StyledInput } from './styledComponents';

export interface IBaseInputProps {
  isDisabled?: boolean;
  hasError?: boolean;
  name: string;
  placeholder?: string;
  value?: any;
  checked?: boolean;
}

export interface ICommonInputProps extends IBaseInputProps {
  autoComplete?: string;
  maxLength?: number;
  min?: string | number;
  max?: string | number;
  onFocus?: (event: FocusEvent<any>) => any;
  onBlur?: (event: FocusEvent<any>) => any;
  onChange?: (event: ChangeEvent<any>) => any;
  onClick?: (event: MouseEvent<any>) => any;
  onKeyPress?: (event: KeyboardEvent<any>) => any;
}

export interface IInputProps extends ICommonInputProps {
  type?: 'text' | 'email' | 'checkbox';
  refName?:
    | ((instance: HTMLInputElement | null) => void)
    | RefObject<HTMLInputElement>
    | null
    | undefined;
  className?: string;
}

export const Input = ({
  isDisabled,
  onClick,
  onChange,
  name,
  refName,
  className,
  ...rest
}: IInputProps) => (
  <StyledInput
    {...rest}
    ref={refName}
    name={name}
    id={name}
    disabled={isDisabled}
    className={className}
    onClick={(event: MouseEvent) => {
      if (onClick) {
        onClick(event);
      }
    }}
    onChange={(event: ChangeEvent) => {
      if (onChange) {
        onChange(event);
      }
    }}
  />
);
