import React, { ReactNode } from 'react';

import { List as StyledList } from './styledComponents';

interface IListProps {
  children: ReactNode[] | JSX.Element | string[] | string;
  className?: string;
}

const List = ({ children, className }: IListProps) => {
  return <StyledList className={className}>{children}</StyledList>;
};

export default List;
