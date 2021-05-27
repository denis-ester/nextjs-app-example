import styled from 'styled-components';

const HeaderTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 23px;

  @media ${props => props.theme.query.max.md} {
    display: block;
    margin-bottom: 25px;
  }
`;

const HeadlineField = styled.div`
  display: inline-flex;
  flex-wrap: wrap;

  @media ${props => props.theme.query.max.md} {
    margin-bottom: 16px;
  }
`;

const Headline = styled.h4`
  font-family: ${props => props.theme.type.serif};
  font-size: 33px;
  line-height: 39px;
  margin: 0;

  @media ${props => props.theme.query.max.md} {
    ${props => props.theme.typo.mobileDisplayL};
  }
`;

const TextPrimary = styled.span`
  font-family: ${props => props.theme.type.serif};
  font-size: 33px;
  line-height: 39px;
  color: ${props => props.theme.colors.primary};
  font-variant: lining-nums;

  @media ${props => props.theme.query.max.md} {
    ${props => props.theme.typo.mobileDisplayL};
  }
`;

export { HeaderTitle, HeadlineField, Headline, TextPrimary };
