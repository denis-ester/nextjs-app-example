import styled from 'styled-components';

import { Button as ButtonBase } from '../../../atoms';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 252px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;

  @media ${props => props.theme.query.max.lg} {
    max-width: none;
    width: auto;
  }
`;

const LogIn = styled(ButtonBase)`
  margin-right: 28px;

  span {
    font-size: 18px;
    line-height: 21px;
    color: ${props => props.theme.colors.secondary};
  }

  @media ${props => props.theme.query.max.md} {
    display: none;
  }
`;

const SignUp = styled(ButtonBase)`
  width: 170px;
  padding: 13px 25px;

  @media ${props => props.theme.query.max.md} {
    width: auto;
    color: ${props => props.theme.colors.secondary};
    background-color: transparent;
    padding: 0;
  }
`;

export { Wrapper, LogIn, SignUp };
