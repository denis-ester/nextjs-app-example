import styled from 'styled-components';

import {
  List as ListBase,
  ListItem as ListItemBase,
  Image as ImageBase,
} from '../../../../atoms';

const Wrapper = styled(ListItemBase)<{ isOpen?: boolean }>`
  position: relative;
  border-right: 1px solid #ebecf6;
  padding: 0 3.3vw;
  transition: transform 0.1s ease-in 0.05s, opacity 0.1s ease-in 0.05s;
  transform: ${props => (props.isOpen ? 'translateY(0)' : 'translateY(-5%)')};
  opacity: ${props => (props.isOpen ? '1' : '0')};
  backface-visibility: hidden;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
    border-right: 0;

    &::after {
      content: none;
    }
  }
`;

const Title = styled.span`
  display: block;
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: 14px;
  letter-spacing: 1px;
  color: #656a87;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const Image = styled(ImageBase)`
  display: block;
  max-width: 100%;
  max-height: 120px;
`;

const List = styled(ListBase)`
  display: flex;
  justify-content: space-between;
`;

const ListItem = styled(ListItemBase)`
  padding-right: 10px;

  &:last-child {
    padding-right: 0;
  }
`;

const CategoryListItem = styled(ListItemBase)`
  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export { Wrapper, Image, List, ListItem, Title, CategoryListItem };
