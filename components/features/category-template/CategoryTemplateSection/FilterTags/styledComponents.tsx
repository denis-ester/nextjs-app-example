import styled from 'styled-components';
import hexToRGBA from '../../../../../utils/hexToRGBA';

import { Button } from '../../../../atoms';

import { CloseIcon } from '../../../../atoms/Icon';

const FilterTagsContainer = styled.div`
  margin-bottom: 12px;
`;

const FilterTag = styled.div`
  display: inline-flex;
  position: relative;
  border: 1px solid #dddddd;
  border-radius: 20px;
  padding: 4px 36px 5px 12px;
  margin-right: 16px;
  margin-bottom: 10px;

  &:last-of-type {
    margin-right: 20px;
  }
`;

const Tag = styled.span`
  ${props => props.theme.typo.desktopBodyS};
`;

const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: 50%;
  right: 12px;
  font-size: 13px;
  color: ${props => hexToRGBA(props.theme.colors.secondary, 0.6)};
  transform: translateY(-50%);
  cursor: pointer;

  @media ${props => props.theme.query.max.md} {
    font-size: 11px;
  }
`;

const ClearAllButton = styled(Button)`
  color: ${props => props.theme.colors.secondary};
  background-color: transparent;

  span {
    font-size: 14px;
  }

  &:hover {
    color: ${props => props.theme.colors.secondary};
    background-color: transparent;
  }
`;

export { FilterTagsContainer, FilterTag, Tag, CloseButton, ClearAllButton };
