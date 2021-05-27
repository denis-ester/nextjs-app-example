import { ReactNode, MouseEvent } from 'react';

import { ListItem as StyledListItem } from './styledComponents';

interface IListItemProps {
  children: ReactNode[] | JSX.Element | string[] | string;
  className?: string;
  onMouseEnter?: (event: MouseEvent<any>) => any;
  onMouseLeave?: (event: MouseEvent<any>) => any;
}

const ListItem = ({ children, className, ...rest }: IListItemProps) => {
  return (
    <StyledListItem className={className} {...rest}>
      {children}
    </StyledListItem>
  );
};

export default ListItem;
