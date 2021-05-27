import styled from 'styled-components';
import Imgix from 'react-imgix';

const SearchItem = styled.div`
  padding: 9.5px 0;
  border-bottom: 1px solid #eee;

  &:first-child {
    border-top: 1px solid #eee;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const ImageWrapper = styled.div`
  position: relative;
  max-width: 58px;
  width: 100%;
  height: 58px;
  margin-right: 13px;
`;

const Image = styled(Imgix)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Description = styled.div``;

const Name = styled.h3`
  font-family: ${props => props.theme.type.sans};
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.colors.secondary};
  margin: 0;
`;

const Details = styled.p`
  font-family: ${props => props.theme.type.sans};
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.theme.colors.secondary};
  margin: 0;
`;

export { SearchItem, Link, ImageWrapper, Image, Description, Name, Details };
