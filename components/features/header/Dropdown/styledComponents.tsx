import styled from 'styled-components';

import { List as ListBase } from '../../../atoms';

const Wrapper = styled.div<{ isOpen?: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 19px 15px 36px;
  backface-visibility: hidden;
  visibility: ${props => (props.isOpen ? `visible` : `hidden`)};
  z-index: 1;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top: 1px solid #e6e7f3;
    border-bottom: 1px solid #e6e7f3;
    background-color: #fff;
    transform: ${props => (props.isOpen ? `scaleY(1);` : `none`)};
    transform-origin: 50% 0;
    transition: all 0.1s linear 0.05s;
    opacity: ${props => (props.isOpen ? `1` : `0`)};
    backface-visibility: hidden;
  }
`;

const Dropdown = styled(ListBase)`
  display: flex;
  max-width: 1280px;
  justify-content: center;
  margin: 0 auto;
`;

export { Wrapper, Dropdown };
