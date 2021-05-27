import styled from 'styled-components';

import { ButtonLink as ButtonLinkBase } from '../../../atoms';

const Section = styled.section`
  padding: 55px 0 115px;

  @media ${props => props.theme.query.max.md} {
    padding: 20px 0 65px;
  }
`;

const Headline = styled.h3`
  ${props => props.theme.typo.desktopDisplayL};
  text-align: center;
  margin: 0;
  margin-bottom: 50px;

  @media ${props => props.theme.query.max.md} {
    ${props => props.theme.typo.mobileDisplayL};
    margin-bottom: 34px;
  }
`;

const ButtonLink = styled(ButtonLinkBase)`
  display: block;
  text-align: center;
  margin: 35px auto 0;

  @media ${props => props.theme.query.max.sm} {
    max-width: 210px;
    margin-top: 30px;
  }
`;

export { Section, Headline, ButtonLink };
