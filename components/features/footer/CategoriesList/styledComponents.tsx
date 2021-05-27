import styled from 'styled-components';

import hexToRGBA from '../../../../utils/hexToRGBA';

import {
  List as ListBase,
  ListItem as ListItemBase,
  Link as LinkBase,
} from '../../../atoms';

const Headline = styled.p`
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: 14px;
  line-height: 27px;
  letter-spacing: 0.583333px;
  color: ${hexToRGBA('#ffffff', 0.6)};
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 9px;
`;

const List = styled(ListBase)`
  margin-bottom: 35px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ListItem = styled(ListItemBase)`
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Link = styled(LinkBase)`
  color: #ffffff;
`;

export { Headline, List, ListItem, Link };
