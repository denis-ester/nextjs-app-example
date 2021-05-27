import styled from 'styled-components';

import { Link as LinkBase, Image as ImageBase } from '../../../../atoms';

const Link = styled(LinkBase)`
  display: flex;
  align-items: center;
`;

const Image = styled(ImageBase)`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 10px;
`;

const Text = styled.span`
  @media ${props => props.theme.query.max.md} {
    display: none;
  }
`;

export { Link, Image, Text };
