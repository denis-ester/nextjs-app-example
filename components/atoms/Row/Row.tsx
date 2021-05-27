import React, { ReactNode } from 'react';
import cn from 'classnames';

import { Row as RowDiv } from './styledComponents';

interface RowProps {
  className?: string[] | string;
  children: ReactNode[] | JSX.Element | string[] | string;
  id?: string;
}

const Row = ({ children, className = '', ...rest }: RowProps) => {
  return (
    <RowDiv className={cn([className])} {...rest}>
      {children}
    </RowDiv>
  );
};

export default Row;
