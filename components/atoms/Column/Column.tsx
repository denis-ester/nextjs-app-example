import React, { ReactNode, RefObject } from 'react';
import cn from 'classnames';

import { Column as StyledColumn } from './styledComponents';

interface ColumnProps {
  xlg?: string;
  lg?: string;
  md?: string;
  sm?: string;
  xs?: string;
  col?: string;
  className?: string[] | string;
  refName?:
    | ((instance: HTMLDivElement | null) => void)
    | RefObject<HTMLDivElement>
    | null
    | undefined;
  children: ReactNode[] | JSX.Element | string[] | string;
}

const Column = ({
  children,
  xlg,
  lg,
  md,
  sm,
  xs,
  col = '12',
  refName,
  className,
  ...columnProps
}: ColumnProps) => {
  const xlgClass = `col-xlg-${xlg}`;
  const lgClass = `col-lg-${lg}`;
  const mdClass = `col-md-${md}`;
  const smClass = `col-sm-${sm}`;
  const xsClass = `col-xs-${xs}`;
  const colClass = `col-${col}`;

  return (
    <StyledColumn
      className={cn(
        { [xlgClass]: xlg },
        { [lgClass]: lg },
        { [mdClass]: md },
        { [smClass]: sm },
        { [xsClass]: xs },
        { [colClass]: col },
        [className]
      )}
      ref={refName}
      {...columnProps}
    >
      {children}
    </StyledColumn>
  );
};

export default Column;
