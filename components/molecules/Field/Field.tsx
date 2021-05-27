import React, { ReactNode } from 'react';

import { FieldWrapper } from './styledComponents';

import { Label } from '../../atoms';
import {
  IInputProps,
  ILabelProps,
  ITextareaProps,
  ICheckboxProps,
} from '../../atoms';

import FieldInner from './FieldInner';

export type FieldType = 'textarea' | 'text' | 'email' | 'checkbox';

export interface IBaseFieldProps {
  value?: any;
  type?: FieldType;
  children?: ReactNode;
  shouldShowLabel?: boolean;
  labelProps?: ILabelProps;
  hasError?: boolean;
}

export type FieldProps<Type extends FieldType> = IBaseFieldProps &
  (Type extends 'textarea'
    ? ITextareaProps
    : Type extends 'checkbox'
    ? ICheckboxProps
    : IInputProps);

export const Field = ({
  type,
  children,
  name,
  shouldShowLabel = false,
  labelProps,
  refName,
  ...rest
}: FieldProps<any>) => {
  switch (type) {
    case 'checkbox': {
      return (
        <FieldWrapper>
          <FieldInner {...rest} name={name} type="checkbox" refName={refName} />

          <Label {...labelProps} isInvisible={shouldShowLabel} htmlFor={name} />

          {children}
        </FieldWrapper>
      );
    }
    default: {
      return (
        <FieldWrapper>
          <FieldInner
            {...rest}
            name={name}
            type={type as any}
            refName={refName}
          />

          <Label {...labelProps} isInvisible={shouldShowLabel} htmlFor={name} />

          {children}
        </FieldWrapper>
      );
    }
  }
};
