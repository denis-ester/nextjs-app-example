import styled from 'styled-components';
import hexToRGBA from '../../../utils/hexToRGBA';

const Input = styled.input`
  width: 100%;
  background-color: #ffffff;
  border: 1px solid ${props => hexToRGBA(props.theme.colors.secondary, 0.18)};
  border-radius: 4px;
  padding: 20px;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

export { Input };
