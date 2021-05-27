import styled from 'styled-components';

import { Image as ImageBase } from '../../../atoms';

const Section = styled.section`
  background-color: #f5f6fa;
  border-radius: 4px;
  margin: 22px 0 27px;
  overflow: hidden;

  @media ${props => props.theme.query.max.sm} {
    border-radius: 0;
    margin: 22px 0 16px;
  }
`;

const MainColumn = styled.div`
  padding: 50px 40px 58px 60px;

  @media ${props => props.theme.query.max.sm} {
    padding: 45px 0 35px;
  }
`;

const Headline = styled.h3`
  ${props => props.theme.typo.desktopDisplayXL};
  margin: 0;
  margin-bottom: 15px;

  @media ${props => props.theme.query.max.sm} {
    ${props => props.theme.typo.mobileDisplayXL};
  }
`;

const Description = styled.p`
  ${props => props.theme.typo.desktopBodyM};
  margin: 0;

  @media ${props => props.theme.query.max.sm} {
    ${props => props.theme.typo.mobileBodyM};
  }
`;

const AvatarsContent = styled.div`
  display: flex;
  height: 100%;

  @media ${props => props.theme.query.max.lg} {
    width: calc(100% + 30px);
    margin-left: -15px;
  }

  @media ${props => props.theme.query.max.sm} {
    width: calc(100% + 40px);
    margin-left: -20px;
  }
`;

const AvatarImage = styled.div`
  position: relative;
  width: 100%;

  &::before {
    content: '';
    display: block;
    width: 100%;
    padding-bottom: calc(331 / 183 * 100%);
  }

  @media ${props => props.theme.query.max.sm} {
    &::before {
      padding-bottom: calc(166 / 94 * 100%);
    }
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

export {
  Section,
  MainColumn,
  Headline,
  Description,
  AvatarsContent,
  AvatarImage,
  Image,
};
