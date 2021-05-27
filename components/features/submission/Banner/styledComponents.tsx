import styled, { css } from 'styled-components';

import { Link as LinkBase, Column as ColumnBase } from './../../../atoms';

const Section = styled.section`
  padding: 50px 0;

  @media ${props => props.theme.query.max.sm} {
    padding: 5px 0;
    overflow-x: hidden;
  }
`;

const BannerImageColumn = styled(ColumnBase)`
  display: flex;

  @media ${props => props.theme.query.max.sm} {
    justify-content: center;
    padding: 0;
    margin-bottom: 20px;
  }
`;

const ImageAspectRatio = css`
  position: relative;
  max-width: 300px;
  width: 100%;

  &::before {
    content: '';
    display: block;
    width: 100%;
    padding-bottom: calc(504 / 300 * 100%);
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${props => props.theme.query.max.sm} {
    max-width: 180px;

    &::before {
      padding-bottom: calc(303 / 180 * 100%);
    }
  }
`;

const FirstImageContainer = styled.div`
  ${ImageAspectRatio}
  transform: translateX(-27px);

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -70px;
    left: -85%;
    width: 152%;
    height: 0;
    background-image: url(${require('../../../../public/images/submission/objects/object-q.png')});
    background-repeat: no-repeat;
    background-size: contain;
    padding-bottom: 213%;
    z-index: -1;
  }

  @media ${props => props.theme.query.max.sm} {
    transform: translateX(32px);

    &::after {
      top: -30px;
      left: -135px;
      width: 232px;
    }
  }
`;

const SecondImageContainer = styled.div`
  ${ImageAspectRatio}
  transform: translate(-125px, 35px);

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -15px;
    right: -104px;
    width: 185px;
    height: 0;
    background-image: url(${require('../../../../public/images/submission/objects/object-w.png')});
    background-repeat: no-repeat;
    background-size: contain;
    padding-bottom: 119%;
    z-index: -1;
  }

  @media ${props => props.theme.query.max.sm} {
    transform: translate(-25px, 20px);

    &::after {
      top: 10px;
      right: -33px;
      width: 100px;
    }
  }
`;

const BannerTitle = styled.div`
  margin-top: 5px;
  margin-bottom: 32px;

  span {
    color: ${props => props.theme.colors.primary};
  }

  @media ${props => props.theme.query.max.sm} {
    text-align: center;
    margin-bottom: 23px;
  }
`;

const BannerTitleHeadline = styled.h2`
  ${props => props.theme.typo.desktopDisplayXXL};
  margin: 0;
  margin-bottom: 24px;

  @media ${props => props.theme.query.max.sm} {
    ${props => props.theme.typo.mobileDisplayXXL};
    margin-bottom: 15px;
  }
`;

const BannerTitleText = styled.p`
  ${props => props.theme.typo.desktopBodyM};
  margin: 0;

  @media ${props => props.theme.query.max.sm} {
    ${props => props.theme.typo.mobileBodyM};
  }
`;

const Link = styled(LinkBase)`
  padding: 18px;
  margin-left: 20px;

  @media ${props => props.theme.query.max.sm} {
    margin-left: 0;
  }
`;

const BannerButtons = styled.div`
  display: flex;
  align-items: center;

  @media ${props => props.theme.query.max.sm} {
    justify-content: space-between;
  }
`;

export {
  Section,
  BannerImageColumn,
  FirstImageContainer,
  SecondImageContainer,
  BannerTitle,
  BannerTitleHeadline,
  BannerTitleText,
  BannerButtons,
  Link,
};
