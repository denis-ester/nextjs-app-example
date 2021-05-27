import styled from 'styled-components';

import { Column as ColumnBase } from './../../../atoms';

const Section = styled.section`
  padding: 97px 0;

  @media ${props => props.theme.query.max.sm} {
    padding: 12px 0 0;
  }
`;

const HeaderColumn = styled(ColumnBase)`
  text-align: center;

  @media ${props => props.theme.query.max.sm} {
    text-align: inherit;
  }
`;

const Headline = styled.h3`
  ${props => props.theme.typo.desktopDisplayXL};
  padding: 0 25px;
  margin: 0;
  margin-bottom: 15px;

  @media ${props => props.theme.query.max.sm} {
    ${props => props.theme.typo.mobileDisplayXL};
    padding: 0;
    margin-bottom: 17px;
  }
`;

const Description = styled.p`
  ${props => props.theme.typo.desktopBodyM};
  margin: 0;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 83px;
  }

  @media ${props => props.theme.query.max.sm} {
    ${props => props.theme.typo.mobileBodyM};
    margin-bottom: 13px;

    &:last-of-type {
      margin-bottom: 59px;
    }
  }
`;

export { Section, HeaderColumn, Headline, Description };
