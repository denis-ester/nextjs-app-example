import styled, { css } from 'styled-components';

import { ILinkBaseProps } from './Link';

const Arrow = css`
  position: relative;
  color: ${props => props.theme.colors.primary};
  padding-right: 18px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 10px;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
    transform: translateY(-50%);
  }

  &::before {
    transform: translateY(calc(-50% - 3px)) rotate(45deg);
  }

  &::after {
    transform: translateY(calc(-50% + 3px)) rotate(-45deg);
  }
`;

const AnchorLink = styled.a<ILinkBaseProps>`
  font-family: ${props => props.theme.type.sans};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.theme.colors.secondary};
  text-decoration: none;

  ${props => props.withArrow && Arrow}
`;

export { AnchorLink };
