import styled from 'styled-components';

import {
  List as ListBase,
  ListItem as ListItemBase,
  Button as ButtonBase,
} from '../../../../atoms';

import { ArrowSmallIcon } from '../../../../atoms/Icon';

const List = styled(ListBase)`
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled(ListItemBase)`
  display: flex;
  font-size: 14px;
  line-height: 26px;
  align-items: center;

  &:last-child {
    color: #8c8fa4;
  }

  @media ${props => props.theme.query.max.md} {
    font-size: 13px;
  }
`;

const Button = styled(ButtonBase)`
  color: ${props => props.theme.colors.secondary};
  background-color: transparent;

  span {
    font-size: 14px;
    line-height: 26px;
    font-weight: ${props => props.theme.fontWeight.normal};
  }

  &:hover {
    color: ${props => props.theme.colors.secondary};
    background-color: transparent;
  }

  @media ${props => props.theme.query.max.md} {
    span {
      font-size: 13px;
    }
  }
`;

const ArrowIcon = styled(ArrowSmallIcon)`
  font-size: 11px;
  color: transparent;
  margin: 0 7px;
  transform: rotate(-90deg);

  path {
    stroke: #8c8fa4;
  }

  @media ${props => props.theme.query.max.md} {
    font-size: 10px;
    margin: 0 6px;
  }
`;

export { List, ListItem, Button, ArrowIcon };
