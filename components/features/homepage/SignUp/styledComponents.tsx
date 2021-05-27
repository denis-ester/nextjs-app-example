import styled from 'styled-components';

import { Button as ButtonBase } from '../../../atoms';

const Section = styled.section`
  position: relative;
  text-align: center;
  padding: 72px 0 15px;
  margin-top: 57px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 100vw;
    height: 1px;
    background-color: #d8d8d8;
    transform: translateX(-50%);
    opacity: 0.5;
  }

  @media ${props => props.theme.query.max.sm} {
    padding: 52px 0 0;
    margin-top: 17px;
  }
`;

const Headline = styled.h3`
  ${props => props.theme.typo.desktopDisplayXL};
  color: ${props => props.theme.colors.secondary};
  margin: 0;
  margin-bottom: 17px;

  span {
    color: ${props => props.theme.colors.primary};
  }

  @media ${props => props.theme.query.max.sm} {
    ${props => props.theme.typo.mobileDisplayXL};
    margin-bottom: 12px;
  }
`;

const Description = styled.p`
  ${props => props.theme.typo.desktopBodyM};
  color: ${props => props.theme.colors.secondary};
  margin: 0;
  margin-bottom: 33px;

  @media ${props => props.theme.query.max.sm} {
    ${props => props.theme.typo.mobileBodyM};
  }
`;

const Button = styled(ButtonBase)`
  width: 245px;

  @media ${props => props.theme.query.max.sm} {
    width: 210px;
  }
`;

export { Section, Headline, Description, Button };
