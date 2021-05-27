import styled from 'styled-components';
import hexToRGBA from '../../../utils/hexToRGBA';

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  height: 120px;
  background-color: #ffffff;
  border: 1px solid ${props => hexToRGBA(props.theme.colors.secondary, 0.18)};
  border-radius: 4px;
  padding: 20px;
  resize: none;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

export { Textarea };
