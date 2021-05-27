import styled from 'styled-components';

import { CloseIcon as CloseIconBase } from '../StyledPopup/styledComponents';

const CloseIcon = styled(CloseIconBase)`
  position: absolute;
  top: 23px;
  right: 23px;
  z-index: 1;
`;

const Headline = styled.h4`
  font-weight: ${props => props.theme.fontWeight.bold};
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
`;

export { CloseIcon, Headline };
