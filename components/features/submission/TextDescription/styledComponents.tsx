import styled from 'styled-components';

import { Column as ColumnBase } from './../../../atoms';

const Section = styled.section`
  padding: 85px 0 35px;

  @media ${props => props.theme.query.max.sm} {
    padding: 70px 0 35px;
  }
`;

const TextDescriptionColumn = styled(ColumnBase)`
  padding: 0;

  &::after {
    content: url(${require('../../../../public/article-divider.svg')});
    display: block;
    text-align: center;
    margin-top: 45px;
  }

  @media ${props => props.theme.query.max.sm} {
    &::after {
      margin-top: 35px;
    }
  }
`;

const TextDescriptionTitle = styled.h3`
  font-family: ${props => props.theme.type.serif};
  font-size: 33px;
  line-height: 44px;
  text-align: center;
  margin: 0;

  span {
    color: ${props => props.theme.colors.primary};
  }

  @media ${props => props.theme.query.max.sm} {
    font-size: 24px;
    line-height: 32px;
  }
`;

export { Section, TextDescriptionColumn, TextDescriptionTitle };
