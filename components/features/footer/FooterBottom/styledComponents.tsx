import styled from 'styled-components';

import {
  List as ListBase,
  ListItem as ListItemBase,
  Link as LinkBase,
} from '../../../atoms';

const FooterBottomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListItem = styled(ListItemBase)`
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  @media ${props => props.theme.query.max.xlg} {
    font-size: 14px;
  }
`;

const Link = styled(LinkBase)`
  color: #ffffff;

  @media ${props => props.theme.query.max.xlg} {
    font-size: 14px;
  }
`;

const Copyright = styled(ListBase)`
  display: inline-flex;
  flex-wrap: wrap;

  ${Link} {
    font-weight: ${props => props.theme.fontWeight.normal};
  }

  ${ListItem} {
    margin-right: 29px;
  }

  @media ${props => props.theme.query.max.xlg} {
    max-width: 430px;
    justify-content: flex-end;
  }

  @media ${props => props.theme.query.max.md} {
    max-width: 100%;
    width: 100%;
    justify-content: space-around;

    ${ListItem} {
      margin-right: 0;
    }
  }

  @media ${props => props.theme.query.max.sm} {
    ${ListItem} {
      margin: 0 15px;
      margin-bottom: 6px;
    }
  }

  @media ${props => props.theme.query.max.xs} {
    padding: 0 40px;

    ${ListItem} {
      &:first-child {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

const FooterBottomMenu = styled(ListBase)`
  display: inline-flex;

  ${ListItem} {
    line-height: 16px;
    margin-right: 29px;

    &:last-child {
      margin-right: 0;
    }
  }

  @media ${props => props.theme.query.max.lg} {
    padding-left: 60px;
    flex: 1;

    ${ListItem} {
      white-space: nowrap;

      &:last-child {
        white-space: unset;
      }
    }
  }
`;

export { FooterBottomContainer, Copyright, FooterBottomMenu, ListItem, Link };
