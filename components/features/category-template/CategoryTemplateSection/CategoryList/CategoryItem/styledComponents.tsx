import styled, { css } from 'styled-components';

import {
  ListItem as ListItemBase,
  Button as ButtonBase,
} from '../../../../../atoms';

const ListItem = styled(ListItemBase)`
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${props => props.theme.query.max.md} {
    line-height: 27px;
    margin-bottom: 7px;
  }
`;

const ActiveButton = css`
  span {
    font-weight: ${props => props.theme.fontWeight.bold};
    color: ${props => props.theme.colors.primary};
  }

  &::after {
    content: '';
    background: url(${require('../../../../../../public/check-purple.svg')}) 50%
      50% no-repeat;
    background-size: contain;
    width: 17px;
    height: 11px;
    margin-left: 9px;
  }
`;

const Button = styled(ButtonBase)<{ active?: boolean }>`
  color: ${props => props.theme.colors.secondary};
  background-color: transparent;

  &:hover {
    background-color: transparent;

    span {
      font-weight: ${props => props.theme.fontWeight.bold};
      color: ${props => props.theme.colors.primary};
    }
  }

  span {
    font-weight: ${props => props.theme.fontWeight.normal};
    line-height: 24px;
    text-align: initial;
  }

  ${props => props.active && ActiveButton};
`;

export { ListItem, Button };
