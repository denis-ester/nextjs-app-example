import styled from 'styled-components';

import { LogoIcon } from '../../../atoms/Icon';

const FooterTopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 125px;

  @media ${props => props.theme.query.max.xlg} {
    margin-bottom: 52px;

    & > div:last-child {
      padding-right: 47px;
    }
  }

  @media ${props => props.theme.query.max.md} {
    margin-bottom: 27px;

    & > div:last-child {
      padding-right: 0;
    }
  }

  @media ${props => props.theme.query.max.sm} {
    margin-bottom: 14px;
  }

  @media ${props => props.theme.query.max.xs} {
    margin-bottom: 20px;
  }
`;

const LogotypeContainer = styled.div`
  padding-right: 15px;

  @media ${props => props.theme.query.max.xlg} {
    width: 100%;
    text-align: center;
    padding-right: 0;
    margin-bottom: 40px;
  }
`;

const Logotype = styled(LogoIcon)`
  font-size: 120px;
  color: #ffffff;
  margin-top: 11px;
`;

const SocialListContainer = styled.div`
  padding-left: 65px;

  @media ${props => props.theme.query.max.md} {
    width: 100%;
    padding: 0;
  }
`;

export { FooterTopContainer, LogotypeContainer, Logotype, SocialListContainer };
