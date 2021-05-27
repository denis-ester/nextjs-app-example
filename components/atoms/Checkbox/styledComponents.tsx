import styled from 'styled-components';

import { Input as InputBase } from '../../atoms';

const Input = styled(InputBase)`
  display: none;

  & + label {
    display: inline-flex;
    position: relative;
    cursor: pointer;

    &:before {
      content: '';
      display: block;
      min-width: 24px;
      height: 24px;
      border: 1px solid #c8cade;
      border-radius: 2px;
      margin-right: 10px;
      box-sizing: border-box;
    }
  }

  &:checked {
    & + label {
      font-weight: ${props => props.theme.fontWeight.bold};

      &::before {
        border: 1px solid ${props => props.theme.colors.primary};
        background-color: ${props => props.theme.colors.primary};
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 5px;
        width: 14px;
        height: 24px;
        background: url(${require('../../../public/check-white.svg')}) 50% 50%
          no-repeat;
        background-size: contain;
      }
    }
  }
`;

export { Input };
