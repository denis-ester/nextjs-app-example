import styled, { css } from 'styled-components';
import hexToRGBA from '../../../../../utils/hexToRGBA';

import { Button as ButtonBase } from '../../../../atoms';

import { FilterIcon as FilterIconBase } from '../../../../atoms/Icon';

const FilterButtons = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;

  @media ${props => props.theme.query.max.md} {
    width: 100%;
    margin-top: 10px;
  }
`;

const SortLabel = styled.span`
  margin-right: 19px;
`;

const Button = styled(ButtonBase)<{ active?: boolean }>`
  padding: 8px 14px;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }

  ${props =>
    !props.active &&
    css`
      color: ${props => props.theme.colors.secondary};
      background-color: ${props => props.theme.colors.gray};

      &:hover {
        color: ${props => props.theme.colors.secondary};
        background-color: ${props => props.theme.colors.lightGray};
      }
    `}
`;

const FilterIconWrapper = styled.div<{ choosed?: boolean }>`
  display: flex;
  position: relative;
  margin-left: auto;

  ${props =>
    props.choosed &&
    css`
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: -3px;
        right: -3px;
        width: 8px;
        height: 8px;
        background-color: ${props => props.theme.colors.primary};
        border-radius: 50%;
      }
    `};
`;

const FilterIcon = styled(FilterIconBase)`
  font-size: 17px;
  height: 1em;
  background-color: ${hexToRGBA('#7c80c1', 0.19)};
  border-radius: 3px;
  padding: 9px;
`;

export { FilterButtons, SortLabel, Button, FilterIconWrapper, FilterIcon };
