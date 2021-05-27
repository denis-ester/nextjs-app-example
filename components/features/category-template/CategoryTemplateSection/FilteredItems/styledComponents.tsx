import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 40px;
  padding-top: 5px;

  @media ${props => props.theme.query.max.lg} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${props => props.theme.query.max.md} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${props => props.theme.query.max.xs} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 20px;
  }
`;

export { Container };
