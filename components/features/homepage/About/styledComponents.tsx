import styled from 'styled-components';

import { Image as ImageBase, Column as ColumnBase } from '../../../atoms';

const Section = styled.section`
  padding: 81px 0 5px;

  @media ${props => props.theme.query.max.sm} {
    padding: 27px 0 40px;
  }
`;

const Headline = styled.h3`
  ${props => props.theme.typo.desktopDisplayXL};
  margin: 0;
  margin-bottom: 25px;

  @media ${props => props.theme.query.max.sm} {
    ${props => props.theme.typo.mobileDisplayXL};
    margin-bottom: 17px;
  }
`;

const Description = styled.p`
  ${props => props.theme.typo.desktopBodyM};
  color: ${props => props.theme.colors.secondary};
  padding-right: 20px;
  margin: 0;
  margin-bottom: 23px;

  @media ${props => props.theme.query.max.sm} {
    ${props => props.theme.typo.mobileBodyM};
    padding-right: 0;
    margin-bottom: 20px;
  }
`;

const AboutColumn = styled(ColumnBase)`
  padding-bottom: 70px;

  @media ${props => props.theme.query.max.sm} {
    padding-bottom: 0;
  }
`;

const AboutImageContainer = styled.div`
  width: 116%;
  transform: translateX(-93px);

  @media ${props => props.theme.query.max.xlg} {
    width: 100%;
    transform: none;
  }

  @media ${props => props.theme.query.max.sm} {
    width: calc(100% + 20px);
    margin-left: -10px;
    margin-right: -10px;
    margin-bottom: 5px;
  }
`;

const AboutImage = styled.div`
  position: relative;
  padding-bottom: calc(494 / 728 * 100%);
`;

const Image = styled(ImageBase)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export {
  Section,
  Headline,
  Description,
  AboutColumn,
  AboutImageContainer,
  AboutImage,
  Image,
};
