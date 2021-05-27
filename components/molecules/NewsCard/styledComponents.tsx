import styled from 'styled-components';

import { Link as LinkBase, Image as ImageBase } from '../../atoms';

const Link = styled(LinkBase)`
  display: block;
`;

const CardImage = styled.div`
  position: relative;
  margin-bottom: 14px;

  &::before {
    content: '';
    display: block;
    width: 100%;
    padding-bottom: calc(248 / 408 * 100%);
  }

  @media ${props => props.theme.query.max.sm} {
    left: -20px;
    width: calc(100% + 40px);
  }
`;

const Image = styled(ImageBase)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Headline = styled.h4`
  font-family: ${props => props.theme.type.serif};
  font-size: 32px;
  line-height: 40px;
  margin: 0;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeight.normal};
  line-height: 27px;
  margin: 0;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export { Link, CardImage, Image, Headline, Description };
