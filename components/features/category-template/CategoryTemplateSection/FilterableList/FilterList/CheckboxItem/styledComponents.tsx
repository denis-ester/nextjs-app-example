import styled from 'styled-components';

import { Field } from '../../../../../../molecules';

const Checkbox = styled(Field)`
  margin: 0;

  & + label {
    line-height: 24px;
  }

  @media ${props => props.theme.query.max.md} {
    line-height: 27px;
  }
`;

export { Checkbox };
