import styled from 'styled-components';

import { Link as LinkBase } from '../../atoms';

const Headline = styled.h3`
  ${props => props.theme.typo.desktopDisplayL};
  color: ${props => props.theme.colors.secondary};
  margin: 0;
  margin-bottom: 15px;

  @media ${props => props.theme.query.max.sm} {
    ${props => props.theme.typo.mobileDisplayL};
    margin-bottom: 11px;
  }
`;

const Link = styled(LinkBase)`
  display: inline-flex;
  max-width: 210px;
  width: 100%;
  min-height: 70px;
  color: #fff;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 4px;
  margin-top: 24px;

  &:hover {
    background-color: #9d287c;
  }
`;

export { Headline, Link };
