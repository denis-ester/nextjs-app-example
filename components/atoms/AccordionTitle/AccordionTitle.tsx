import React, {
  ReactNode,
  FocusEvent,
  ChangeEvent,
  MouseEvent,
  KeyboardEvent,
} from 'react';

import { AccordionTitle as StyledAccordionTitle } from './styledComponents';

export interface IAccordionTitleBaseProps {
  isActive?: boolean;
}

interface IAccordionTitleProps extends IAccordionTitleBaseProps {
  children?: ReactNode[] | JSX.Element | string[] | string;
  onFocus?: (event: FocusEvent<any>) => any;
  onBlur?: (event: FocusEvent<any>) => any;
  onChange?: (event: ChangeEvent<any>) => any;
  onClick?: (event: MouseEvent<any>) => any;
  onKeyPress?: (event: KeyboardEvent<any>) => any;
}

const AccordionTitle = ({
  children,
  onClick: handleClick,
  ...rest
}: IAccordionTitleProps) => {
  return (
    <StyledAccordionTitle onClick={handleClick} {...rest}>
      {children}
    </StyledAccordionTitle>
  );
};

export default AccordionTitle;
