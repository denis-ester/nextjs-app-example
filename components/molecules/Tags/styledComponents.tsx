import styled from 'styled-components';

import { ListItem as ListItemBase, Link as LinkBase } from '../../atoms';

const ListItem = styled(ListItemBase)`
  display: inline-flex;
  align-items: center;
  margin: 11.5px 0;

  &::after {
    content: '';
    width: 1px;
    height: 22.5px;
    background-color: ${props => props.theme.colors.secondary};
    margin: 0 30px;
    opacity: 0.25;
  }

  &:last-child {
    &::after {
      content: none;
    }
  }

  @media ${props => props.theme.query.max.sm} {
    margin: 4.5px 0;

    &::after {
      margin: 0 14px;
    }
  }
`;

const Link = styled(LinkBase)`
  font-size: 20px;
  line-height: 27px;
  color: ${props => props.theme.colors.primary};

  @media ${props => props.theme.query.max.sm} {
    font-size: 16px;
  }
`;

export { ListItem, Link };
