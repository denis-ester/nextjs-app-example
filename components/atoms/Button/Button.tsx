import React, { forwardRef, RefObject, MouseEvent } from 'react';

import {
  Button as Btn,
  Title,
  ButtonLink as BtnLink,
} from './styledComponents';

import { ILinkProps } from '../Link/Link';

export type ButtonBaseProps = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: string;
  size?: string;
  onClick?: (e: MouseEvent) => void;
  className?: string;
};

export type ButtonLinkBaseProps = {
  variant?: string;
  size?: string;
  className?: string;
};

type ButtonProps = ButtonBaseProps & {
  title: string;
  refName?:
    | ((instance: HTMLButtonElement | null) => void)
    | RefObject<HTMLButtonElement>
    | null
    | undefined;
};

type ButtonLinkProps = ILinkProps & ButtonLinkBaseProps;

const Button = ({
  type = 'button',
  title,
  variant = 'purple',
  size = 'small',
  refName,
  onClick: handleClick,
  className = '',
  ...buttonProps
}: ButtonProps) => {
  // variant props values: 'purple', 'inline', ''
  // size props values: 'auto', 'small', 'medium', 'fullWidth'

  return (
    <Btn
      type={type}
      ref={refName}
      onClick={handleClick}
      className={className}
      variant={variant}
      size={size}
      {...buttonProps}
    >
      <Title>{title}</Title>
    </Btn>
  );
};

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      to,
      variant = 'purple',
      size = 'small',
      onClick: handleClick,
      children,
      className,
    },
    ref
  ) => {
    return (
      <BtnLink
        to={to}
        onClick={handleClick}
        variant={variant}
        size={size}
        className={className}
        ref={ref}
      >
        {children}
      </BtnLink>
    );
  }
);

export { Button, ButtonLink };
