import styled from 'styled-components';

const Section = styled.section`
  padding: 46px 0;
  text-align: center;

  & + & {
    margin-top: -35px;
  }

  @media ${props => props.theme.query.max.sm} {
    padding: 35px 0;

    & + & {
      margin-top: -30px;
    }
  }
`;

export { Section };
