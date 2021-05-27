import styled from 'styled-components';
import hexToRGBA from '../../../../../../utils/hexToRGBA';

import { ListItem as ListItemBase } from '../../../../../atoms';

import { ArrowSmallIcon as ArrowSmallIconBase } from '../../../../../atoms/Icon';

const Filter = styled.div`
  padding: 22px 0;
  border-bottom: 1px solid #f3f3f3;

  &:last-of-type {
    border-bottom: none;
  }
`;

const FilterName = styled.p`
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: 16px;
  line-height: 27px;
  margin: 0;
  margin-bottom: 12px;
`;

const ListItem = styled(ListItemBase)`
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ShowMore = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 2px;
  cursor: pointer;
`;

const ArrowSmallIcon = styled(ArrowSmallIconBase)`
  font-size: 14px;
  color: transparent;
  margin-right: 7px;

  path {
    stroke: #868b9e;
  }
`;

const ArrowSmallIconRotated = styled(ArrowSmallIconBase)`
  font-size: 14px;
  color: transparent;
  margin-right: 7px;
  transform: rotate(180deg);

  path {
    stroke: #868b9e;
  }
`;

const ShowMoreLabel = styled.span`
  font-weight: ${props => props.theme.fontWeight.bold};
  line-height: 19px;
  color: ${props => hexToRGBA(props.theme.colors.secondary, 0.53)};
`;

export {
  Filter,
  FilterName,
  ListItem,
  ShowMore,
  ArrowSmallIcon,
  ArrowSmallIconRotated,
  ShowMoreLabel,
};
