import styled from 'styled-components';
import hexToRGBA from '../../../../utils/hexToRGBA';

import {
  List as ListBase,
  ListItem as ListItemBase,
  Link as LinkBase,
  Image,
  Button as ButtonBase,
} from '../../../atoms';

import { CloseIcon as CloseIconBase } from '../../popup/StyledPopup';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const List = styled(ListBase)`
  display: inline-flex;
  padding-left: 9%;

  @media ${props => props.theme.query.max.lg} {
    padding-left: 0;
  }
`;

const MenuLink = styled(LinkBase)`
  font-size: 18px;
  line-height: 21px;

  @media ${props => props.theme.query.max.md} {
    font-size: 16px;
    line-height: 26px;
  }
`;

const ListItem = styled(ListItemBase)`
  padding: 22px 25px;

  &:hover {
    ${MenuLink} {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const MobileWrapper = styled.div<{ isOpen?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 9px 20px 27px;
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s;
  overflow-y: auto;
  z-index: 999;
  box-sizing: border-box;
`;

const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

const Logo = styled(Image)`
  transform: translate(14px, 2px);
`;

const CloseIcon = styled(CloseIconBase)`
  color: ${props => props.theme.colors.primary};
`;

const MobileListItem = styled(ListItemBase)`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const MobileList = styled(ListBase)`
  border-bottom: 1px solid
    ${props => hexToRGBA(props.theme.colors.secondary, 0.07)};
  padding-top: 30px;
  padding-bottom: 30px;

  &:last-of-type {
    border-bottom: 0;
    padding-bottom: 0;

    ${MobileListItem} {
      margin-bottom: 28px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const Button = styled(ButtonBase)`
  line-height: 26px;
  color: ${props => props.theme.colors.secondary};
`;

const Socials = styled.div`
  margin-top: 53px;
`;

const IconsList = styled(ListBase)`
  display: flex;
  justify-content: space-between;
`;

const IconsListItem = styled(ListItemBase)``;

export {
  Wrapper,
  List,
  ListItem,
  MenuLink,
  MobileWrapper,
  MobileHeader,
  Logo,
  CloseIcon,
  MobileList,
  MobileListItem,
  Button,
  Socials,
  IconsList,
  IconsListItem,
};
