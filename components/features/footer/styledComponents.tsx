import styled from 'styled-components';

const Section = styled.footer`
  background-image: url(${require('../../../public/images/footer.jpg')});
  background-size: cover;
  padding: 65px 0 35px;

  @media ${props => props.theme.query.max.md} {
    padding: 50px 0;
  }

  @media ${props => props.theme.query.max.sm} {
    padding: 44px 0 34px;
  }

  @media ${props => props.theme.query.max.xs} {
    padding: 40px 0 34px;
  }
`;

const Container = styled.div`
  max-width: 1520px;
  margin: 0 auto;

  @media ${props => props.theme.query.max.xlg} {
    max-width: 1000px;
  }

  @media ${props => props.theme.query.max.lg} {
    max-width: 872px;
  }

  @media ${props => props.theme.query.max.md} {
    max-width: 684px;
  }

  @media ${props => props.theme.query.max.sm} {
    max-width: 100%;
  }
`;

export { Section, Container };
