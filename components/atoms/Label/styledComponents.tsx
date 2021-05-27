import styled from 'styled-components';

const Label = styled.label`
  font-family: ${props => props.theme.type.sans};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 27px;
  color: ${props => props.theme.colors.secondary};
`;

export { Label };
