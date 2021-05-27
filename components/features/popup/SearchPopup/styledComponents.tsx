import styled from 'styled-components';

import {
  SearchIcon as SearchIconBase,
  CloseIcon as CloseIconBase,
} from '../../../atoms/Icon';
import { Field } from '../../../molecules';
import { TagFilters as TagFiltersBase } from '../../../organisms';

import { Section as SectionBase, PopupCloseWrapper } from '../StyledPopup';

import {
  ListItem,
  Link as ListItemLink,
} from '../../../molecules/Tags/styledComponents';
import { Headline } from '../../../organisms/TagFilters/styledComponents';

const Section = styled(SectionBase)`
  @media ${props => props.theme.query.max.sm} {
    width: 100%;
  }

  ${PopupCloseWrapper} {
    position: absolute;
  }
`;

const Container = styled.div`
  @media ${props => props.theme.query.max.sm} {
    max-width: 100%;
    padding: 0;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 17px;
  left: 50%;
  transform: translateX(-50%);
`;

const SearchField = styled.div`
  margin-bottom: 30px;

  @media ${props => props.theme.query.max.xs} {
    margin-bottom: 20px;
  }
`;

const SearchInput = styled(Field)`
  padding: 20px 52px;
`;

const SearchIcon = styled(SearchIconBase)`
  position: absolute;
  top: 50%;
  left: 20px;
  font-size: 22px;
  color: ${props => props.theme.colors.secondary};
  transform: translateY(-50%);
  opacity: 0.3;
`;

const SearchCloseIcon = styled(CloseIconBase)`
  position: absolute;
  top: 50%;
  right: 20px;
  font-size: 22px;
  color: ${props => props.theme.colors.secondary};
  transform: translateY(-50%);
  opacity: 0.6;
  cursor: pointer;
`;

const TagFilters = styled(TagFiltersBase)`
  margin-top: 20px;
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }

  ${Headline} {
    ${props => props.theme.typo.mobileDisplayXL};
  }

  ${ListItem} {
    margin: 4.5px 0;

    &::after {
      margin: 0 14px;
    }
  }

  ${ListItemLink} {
    font-size: 16px;
  }
`;

export {
  Section,
  Container,
  Logo,
  SearchField,
  SearchInput,
  SearchIcon,
  SearchCloseIcon,
  Headline,
  TagFilters,
};
