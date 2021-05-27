import styled from 'styled-components';

import { Column as ColumnBase } from '../../../atoms';

const Section = styled.section`
  &:first-child {
    padding-top: 58px;
  }

  @media ${props => props.theme.query.max.md} {
    &:first-child {
      padding-top: 24px;
    }
  }
`;

const FilterColumn = styled(ColumnBase)`
  @media ${props => props.theme.query.max.md} {
    display: none;
  }
`;

export { Section, FilterColumn };
