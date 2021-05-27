import styled from 'styled-components';

import { Image as ImageBase, Column as ColumnBase } from '../../../atoms';

const Section = styled.section`
  position: relative;
`;

const Image = styled(ImageBase)`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100vw;
  height: 100%;
  object-fit: cover;
  transform: translateX(-50%);
  z-index: -1;
`;

const Column = styled(ColumnBase)`
  text-align: center;
  padding-top: 65px;
  padding-bottom: 69px;

  @media ${props => props.theme.query.max.xs} {
    padding-top: 90px;
    padding-bottom: 90px;
  }
`;

const Headline = styled.h1`
  ${props => props.theme.typo.desktopDisplayXXL};
  color: #fff;
  margin: 0;
  margin-bottom: 24px;

  @media ${props => props.theme.query.max.md} {
    ${props => props.theme.typo.mobileDisplayXXL};
    margin-bottom: 15px;
    padding: 0 5px;
  }
`;

const Description = styled.p`
  ${props => props.theme.typo.desktopBodyM};
  color: #fff;
  padding: 0 55px;
  margin: 0;

  @media ${props => props.theme.query.max.md} {
    ${props => props.theme.typo.mobileBodyM};
    padding: 0;
  }
`;

export { Section, Image, Column, Headline, Description };
