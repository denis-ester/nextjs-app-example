import styled from 'styled-components';

import { ListItem as ListItemBase, Link as LinkBase } from '../../../../atoms';

const CategoryCard = styled.div`
  height: 100%;
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 4px;
  padding: 26px 30px 23px;
  box-sizing: border-box;

  @media ${props => props.theme.query.max.xs} {
    max-width: 300px;
    height: auto;
    padding: 26px 20px 23px;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const TitleLink = styled(LinkBase)`
  display: inline-block;
  margin-bottom: 15px;
`;

const Title = styled.h3`
  ${props => props.theme.typo.desktopDisplayL};
  margin: 0;

  &::after {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border: 2px solid ${props => props.theme.colors.secondary};
    border-bottom: 0;
    border-left: 0;
    transform: rotate(45deg) translateY(-7px);
  }

  @media ${props => props.theme.query.max.xs} {
    ${props => props.theme.typo.mobileDisplayL};

    &::after {
      margin-left: 4px;
    }
  }
`;

const ListItem = styled(ListItemBase)`
  line-height: unset;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Link = styled(LinkBase)`
  font-size: 18px;
  line-height: 27px;
  color: ${props => props.theme.colors.primary};
`;

const Disabled = styled.p`
  font-weight: bold;
  color: #c8cade;
  margin: 0;
`;

const DisabledSmall = styled.span`
  font-size: 12px;
`;

export {
  CategoryCard,
  TitleLink,
  Title,
  ListItem,
  Link,
  Disabled,
  DisabledSmall,
};
