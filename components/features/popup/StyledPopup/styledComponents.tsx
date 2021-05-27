import styled from 'styled-components';

import { CloseIcon as CloseIconBase } from '../../../atoms/Icon';

const Section = styled.section`
  position: relative;
  max-width: 1310px;
  background-color: #ffffff;
  border: solid 1px rgba(26, 33, 73, 0.2);
  border-radius: 3px;
  padding: 95px 0 45px;
  margin: 0 auto;
  box-shadow: 0 5px 28px 0 rgba(26, 33, 73, 0.27);

  @media ${props => props.theme.query.max.sm} {
    width: 100vw;
    min-height: calc(100vh - 140px);
    border: 0;
    border-radius: 0;
    box-shadow: none;
  }
`;

const PopupCloseWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 15px;
  z-index: 1;
  cursor: pointer;

  &:hover {
    background-color: #ebe9e9;
    border-radius: 50px;
  }

  @media ${props => props.theme.query.max.sm} {
    position: fixed;
  }
`;

const CloseIcon = styled(CloseIconBase)`
  display: block;
  font-size: 21px;
`;

export { Section, PopupCloseWrapper, CloseIcon };
