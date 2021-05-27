import styled from 'styled-components';

import { Button } from '../../../../atoms';

const Footer = styled.div`
  @media ${props => props.theme.query.max.md} {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    border-top: 1px solid ${props => props.theme.colors.gray};
  }
`;

const ButtonsContainer = styled.div`
  @media ${props => props.theme.query.max.md} {
    display: flex;
    max-width: 590px;
    width: 100%;
    justify-content: space-between;
    padding: 10px 17px;
    margin: 0 auto;
    box-sizing: border-box;
  }
`;

const ClearFilterButton = styled(Button)`
  max-width: 150px;
  width: 100%;
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.gray};
  border-radius: 3px;
  padding: 14px;

  &:hover {
    color: ${props => props.theme.colors.secondary};
    background-color: ${props => props.theme.colors.lightGray};
  }

  @media ${props => props.theme.query.max.md} {
    max-width: 164px;
    width: 100%;
    min-height: 45px;
    background-color: transparent;
    padding: 12px 20px;

    &:hover {
      color: ${props => props.theme.colors.secondary};
      background-color: transparent;
    }
  }
`;

const ApplyFilterButton = styled(Button)`
  min-width: 164px;
  min-height: 45px;
  padding: 12px 20px;
`;

export { Footer, ButtonsContainer, ClearFilterButton, ApplyFilterButton };
