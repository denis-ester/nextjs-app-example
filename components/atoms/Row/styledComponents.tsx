import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 1310px) {
    margin-right: -15px;
    margin-left: -15px;
  }

  @media ${props => props.theme.query.max.sm} {
    padding-right: 5px;
    padding-left: 5px;
  }
`;

export { Row };
