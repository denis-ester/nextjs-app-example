import styled from 'styled-components';

import Icon from './Icon';

const StyledIcon = styled(Icon)`
  width: 1em;
  fill: currentColor;
  display: inline-block;
  ${props => props.theme.typo.desktopBodyM};
  color: ${props => props.theme.colors.secondary};
`;

export default StyledIcon;
