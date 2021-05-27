import React, { ReactNode } from 'react';

import {
  HeaderTitle,
  HeadlineField,
  Headline,
  TextPrimary,
} from './styledComponents';

interface IFilterableHeaderProps {
  children?: ReactNode[] | JSX.Element | string[] | string;
  label?: string | JSX.Element;
  quantity?: number;
}

const FilterableHeader = ({
  children,
  label,
  quantity,
}: IFilterableHeaderProps) => {
  return (
    <HeaderTitle>
      <HeadlineField>
        <Headline>
          {label} <TextPrimary>{quantity}</TextPrimary>
        </Headline>
      </HeadlineField>

      {children}
    </HeaderTitle>
  );
};

export default FilterableHeader;
