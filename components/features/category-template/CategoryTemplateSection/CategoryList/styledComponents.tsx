import styled from 'styled-components';

import { List as ListBase } from '../../../../atoms';

import { AccordionItem } from '../../../../molecules';

import { AccordionTitle } from '../../../../atoms/AccordionTitle/styledComponents';

import { ArrowSmallIcon } from '../../../../atoms/Icon';

const CategoryName = styled.p`
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: 16px;
  line-height: 27px;
  text-transform: capitalize;
  margin: 0;
  margin-bottom: 9px;
`;

const List = styled(ListBase)``;

const ArrowIcon = styled(ArrowSmallIcon)`
  color: transparent;
  transition: transform 0.3s;

  path {
    stroke: #868b9e;
  }
`;

const Accordion = styled(AccordionItem)`
  padding: 22px 0 13px;
  border-bottom: 1px solid #f3f3f3;

  &:first-child {
    padding-top: 0;
  }

  &.active {
    ${ArrowIcon} {
      transform: rotate(180deg);
    }
  }

  ${AccordionTitle} {
    margin-bottom: 9px;
  }

  ${CategoryName} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
  }

  ${List} {
    margin-bottom: 9px;
  }
`;

const Category = styled.div`
  padding: 22px 0;
  border-bottom: 1px solid #f3f3f3;

  &:first-child {
    padding-top: 7px;
  }

  @media ${props => props.theme.query.max.md} {
    &:first-child {
      padding-top: 15px;
    }
  }
`;

export { Accordion, Category, CategoryName, List, ArrowIcon };
