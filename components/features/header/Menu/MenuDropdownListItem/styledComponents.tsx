import styled from 'styled-components';

import { ListItem as ListItemBase } from '../styledComponents';

const Title = styled.span`
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: 18px;
  line-height: 21px;
`;

const ListItem = styled(ListItemBase)`
  &:hover {
    ${Title} {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export { ListItem, Title };
