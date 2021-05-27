import React from 'react';

import {
  Footer,
  ButtonsContainer,
  ClearFilterButton,
  ApplyFilterButton,
} from './styledComponents';

import FilterList from './FilterList';

import { IFilterListProps } from './FilterList/FilterList';
import { IAllFilterListsLabels } from '../../CategoryTemplate';

import { xtablet } from '../../../../../constants/viewports';

import useViewport from '../../../../../hooks/use-viewport';

export interface IFilterableListProps {
  filterLists?: IFilterListProps[];
  allFilters: IAllFilterListsLabels[];
  allCategoryFilters?: IAllFilterListsLabels[];
  setAllFilters: (allFilters: IAllFilterListsLabels[]) => void;
  setAllCategoryFilters?: (allCategoryFilters: IAllFilterListsLabels[]) => void;
  setFilterPopupOpen?: (filterPopupOpen: boolean) => void;
}

const FilterableList = ({
  filterLists,
  allFilters,
  allCategoryFilters = [],
  setAllFilters,
  setAllCategoryFilters,
  setFilterPopupOpen,
}: IFilterableListProps) => {
  const [isTablet] = useViewport(xtablet.width);

  const clearFilter = () => {
    allFilters.forEach(item => (item.checked = false));

    allCategoryFilters?.forEach(item => {
      if (item.category !== 'format') {
        item.active = false;
      }
    });

    setAllFilters([...allFilters]);

    if (setAllCategoryFilters) {
      setAllCategoryFilters([...allCategoryFilters]);
    }
  };

  const handleApplyFilterButton = () => {
    if (setFilterPopupOpen) {
      setFilterPopupOpen(false);
    }
  };

  return (
    <>
      <div>
        {filterLists &&
          filterLists.map((list, index) => (
            <FilterList
              label={list.label}
              items={list.items}
              key={index}
              allFilters={allFilters}
              setAllFilters={(allFilters: IAllFilterListsLabels[]) =>
                setAllFilters([...allFilters])
              }
            />
          ))}
      </div>

      <Footer>
        <ButtonsContainer>
          <ClearFilterButton
            title="Clear All"
            onClick={clearFilter}
            size="auto"
          />

          {isTablet ? (
            <ApplyFilterButton
              title="Apply"
              onClick={handleApplyFilterButton}
              size="small"
            />
          ) : (
            ''
          )}
        </ButtonsContainer>
      </Footer>
    </>
  );
};

export default FilterableList;
