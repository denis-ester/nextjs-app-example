import React from 'react';

import {
  FilterTagsContainer,
  FilterTag,
  Tag,
  CloseButton,
  ClearAllButton,
} from './styledComponents';

import { IFilterableListProps } from '../FilterableList/FilterableList';
import { IAllFilterListsLabels } from '../../CategoryTemplate';

interface IFilterTagsProps extends IFilterableListProps {}

const FilterTags = ({ allFilters, setAllFilters }: IFilterTagsProps) => {
  const filterTags: IAllFilterListsLabels[] = [];

  allFilters.forEach(item => {
    if (item.checked) {
      filterTags.push({ ...item });
    }
  });

  const removeTag = (item: IAllFilterListsLabels) => {
    const tagToRemove = allFilters.find(
      ({ label }: IAllFilterListsLabels) => label === item.label
    );

    if (tagToRemove) {
      tagToRemove.checked = false;
    }

    setAllFilters([...allFilters]);
  };

  const clearFilter = () => {
    allFilters.forEach(item => (item.checked = false));

    setAllFilters([...allFilters]);
  };

  return (
    <>
      {filterTags.length > 0 && (
        <FilterTagsContainer>
          {filterTags?.map((item, index) => (
            <FilterTag key={index}>
              <Tag>{`${item.category}: ${item.label}`}</Tag>

              <CloseButton onClick={() => removeTag(item)} />
            </FilterTag>
          ))}

          <ClearAllButton title="Clear All" onClick={clearFilter} size="auto" />
        </FilterTagsContainer>
      )}
    </>
  );
};

export default FilterTags;
