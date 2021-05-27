import styled from 'styled-components';

const Section = styled.section`
  padding-top: 18px;
  margin-bottom: 14px;

  @media ${props => props.theme.query.max.md} {
    padding-top: 25px;
  }
`;

export { Section };
