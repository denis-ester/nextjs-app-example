import styled from 'styled-components';

import { SearchIcon as SearchIconBase } from '../../atoms/Icon';

const Wrapper = styled.header`
  display: flex;
  position: relative;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 0 53px 0 65px;

  @media ${props => props.theme.query.max.lg} {
    padding: 13px 20px 11px;
    border-bottom: 2px solid ${props => props.theme.colors.gray};
  }
`;

const BurgerMenu = styled.div`
  position: relative;
  width: 28px;
  height: 28px;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
  }

  &::before {
    top: 8.5px;
  }

  &::after {
    bottom: 8.5px;
  }
`;

const Logotype = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  @media ${props => props.theme.query.max.md} {
    flex-direction: row-reverse;
    margin-right: 15px;

    img {
      transform: translateY(4px);
    }
  }
`;

const SearchIcon = styled(SearchIconBase)`
  font-size: 22px;
  color: ${props => props.theme.colors.primary};
  margin-left: 23px;
  cursor: pointer;

  @media ${props => props.theme.query.max.md} {
    margin-left: 0;
    margin-right: 26px;
  }
`;

export { Wrapper, BurgerMenu, Logotype, SearchIcon };
