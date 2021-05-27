import React, { forwardRef, ReactNode, MouseEvent } from 'react';

import { AnchorLink } from './styledComponents';

export interface ILinkBaseProps {
  withArrow?: boolean;
}

export interface ILinkProps extends ILinkBaseProps {
  to: string;
  title?: string;
  target?: string;
  children: ReactNode[] | JSX.Element | string[] | string;
  onClick?: (e: MouseEvent) => void;
}

const Link = forwardRef<HTMLAnchorElement, ILinkProps>(
  ({ children, onClick: handleClick, to, ...linkProps }, ref) => {
    return (
      <AnchorLink onClick={handleClick} href={to} {...linkProps} ref={ref}>
        {children}
      </AnchorLink>
    );
  }
);

export default Link;
