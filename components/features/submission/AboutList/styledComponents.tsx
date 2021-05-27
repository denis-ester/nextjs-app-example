import styled from 'styled-components';

const Section = styled.section`
  padding: 65px 0;

  @media ${props => props.theme.query.max.sm} {
    padding: 25px 0;
  }
`;

const AboutListTitle = styled.h3`
  ${props => props.theme.typo.desktopDisplayXL};
  text-align: center;
  margin: 0;
  margin-bottom: 15px;

  @media ${props => props.theme.query.max.sm} {
    ${props => props.theme.typo.mobileDisplayXL};
    text-align: inherit;
    margin-bottom: 18px;
  }
`;

const AboutListDescription = styled.p`
  ${props => props.theme.typo.desktopBodyM};
  text-align: center;
  margin: 0;
  margin-bottom: 50px;

  @media ${props => props.theme.query.max.sm} {
    ${props => props.theme.typo.mobileBodyM};
    text-align: inherit;
    margin-bottom: 32px;
  }
`;

export { Section, AboutListTitle, AboutListDescription };
