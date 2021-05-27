import React from 'react';

import { xtablet } from '../../../../../constants/viewports';

import useViewport from '../../../../../hooks/use-viewport';

import {
  FilterButtons as StyledFilterButtons,
  SortLabel,
  Button,
  FilterIconWrapper,
  FilterIcon,
} from './styledComponents';

import { SortOption } from '../../CategoryTemplate';

export interface ISortOption extends SortOption {
  active?: boolean;
}

interface IFilterButtonsProps {
  sortOptions: ISortOption[];
  setSortOptions: Function;
  setFilterPopupOpen?: (filterPopupOpen: boolean) => void;
  filterIsActive?: boolean;
}

const FilterButtons = ({
  sortOptions: options,
  setSortOptions,
  setFilterPopupOpen,
  filterIsActive,
}: IFilterButtonsProps) => {
  const [isTablet] = useViewport(xtablet.width);

  const handleClick = (option: SortOption) => {
    const currentItem = options.find(item => item.label === option.label);

    if (currentItem) {
      options.forEach(item => (item.active = false));
      currentItem.active = true;
    }

    setSortOptions(options);
  };

  return (
    <StyledFilterButtons>
      {!isTablet && <SortLabel>Sort:</SortLabel>}

      {options.map((item, index) => {
        return (
          <Button
            title={item.label}
            onClick={() => handleClick(item)}
            size="auto"
            key={index}
            active={item.active}
          />
        );
      })}

      {isTablet && (
        <FilterIconWrapper choosed={filterIsActive}>
          <FilterIcon onClick={setFilterPopupOpen} />
        </FilterIconWrapper>
      )}
    </StyledFilterButtons>
  );
};

export default FilterButtons;
