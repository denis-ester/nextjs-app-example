import styled, { css } from 'styled-components';

import { Link as LinkBase } from '../../atoms';

import { ButtonBaseProps, ButtonLinkBaseProps } from './Button';

const DefaultBtn = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: transparent;
  padding: 0;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

const Title = styled.span`
  font-family: ${props => props.theme.type.sans};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: 16px;
  line-height: 19px;
`;

const PurpleBtn = css`
  color: #ffffff;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.primary};

  &:hover {
    color: #ffffff;
    background-color: #9d287c;
  }
`;

const SmallWidth = css`
  width: 210px;
  min-height: 70px;
  padding: 25px 30px;

  @media ${props => props.theme.query.max.sm} {
    width: auto;
    padding: 25px 29px;
  }
`;

const MediumWidth = css`
  width: 250px;
  min-height: 60px;
  padding: 20px 30px;

  @media ${props => props.theme.query.max.sm} {
    width: 100%;
  }
`;

const AutoWidth = css`
  width: auto;
`;

const FullWidth = css`
  width: 100%;
`;

const VariantProp = css<ButtonBaseProps>`
  ${({ variant }) => {
    switch (variant) {
      case 'purple':
        return PurpleBtn;

      default:
        return;
    }
  }}
`;

const SizeProp = css<ButtonBaseProps>`
  ${({ size }) => {
    switch (size) {
      case 'small':
        return SmallWidth;

      case 'medium':
        return MediumWidth;

      case 'auto':
        return AutoWidth;

      case 'fullWidth':
        return FullWidth;

      default:
        return '';
    }
  }}
`;

const Button = styled.button<ButtonBaseProps>`
  ${DefaultBtn};

  ${VariantProp};

  ${SizeProp};
`;

const ButtonLink = styled(LinkBase)<ButtonLinkBaseProps>`
  ${DefaultBtn};
  box-sizing: border-box;

  ${VariantProp};

  ${SizeProp};
`;

export { Button, Title, ButtonLink };
