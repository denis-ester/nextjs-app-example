import styled from 'styled-components';

import { Column as ColumnBase } from '../../../atoms';

const Section = styled.section`
  padding: 55px 0 0;

  @media ${props => props.theme.query.max.xs} {
    padding: 45px 0 17px;

    .swiper-container {
      padding: 0 20px;
    }
  }
`;

const Column = styled(ColumnBase)`
  @media ${props => props.theme.query.max.md} {
    margin-bottom: 30px;
  }
`;

export { Section, Column };
