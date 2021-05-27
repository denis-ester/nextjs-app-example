import styled from 'styled-components';

const ListItem = styled.li`
  font-family: ${props => props.theme.type.sans};
  font-size: 18px;
  line-height: 26px;
  color: ${props => props.theme.colors.secondary};

  @media ${props => props.theme.query.max.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export { ListItem };
