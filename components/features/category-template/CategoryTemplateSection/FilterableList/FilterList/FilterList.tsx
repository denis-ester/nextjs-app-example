import React, { useState, useEffect, ChangeEvent } from 'react';

import {
  Filter,
  FilterName,
  ListItem,
  ShowMore,
  ArrowSmallIcon,
  ArrowSmallIconRotated,
  ShowMoreLabel,
} from './styledComponents';

import { List } from '../../../../../atoms';

import CheckboxItem from './CheckboxItem';

import { ICheckboxItemProps } from './CheckboxItem/CheckboxItem';
import { IAllFilterListsLabels } from '../../../CategoryTemplate';

interface IFilterListBaseProps {
  allFilters?: IAllFilterListsLabels[];
  setAllFilters?: (allFilters: IAllFilterListsLabels[]) => void;
}

export interface IFilterListProps extends IFilterListBaseProps {
  label?: string;
  items: ICheckboxItemProps[];
}

const FilterList = ({
  label,
  items,
  allFilters = [],
  setAllFilters,
}: IFilterListProps) => {
  const [itemsLength, setItemsLength] = useState<number>(items.length);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const MAX_ITEMS_LENGTH = 6;

  const toggleCheckbox = (item: ICheckboxItemProps, checked: boolean) => {
    const checkedItem = allFilters.find(({ label }) => label === item.label);

    if (checkedItem) {
      checkedItem.checked = checked;
    }

    if (setAllFilters) {
      setAllFilters(allFilters);
    }
  };

  const toggleShowMore = () => {
    if (itemsLength === MAX_ITEMS_LENGTH) {
      setItemsLength(listItems.length);
    } else {
      setItemsLength(MAX_ITEMS_LENGTH);
    }
  };

  const listItems = items.map((item, index) => {
    const isChecked = allFilters.find(
      ({ label }: ICheckboxItemProps) => label === item.label
    )?.checked;

    return (
      <ListItem key={index}>
        <CheckboxItem
          label={item.label}
          checked={isChecked}
          onClick={(event: ChangeEvent<any>) =>
            toggleCheckbox(item, event.target.checked)
          }
        />
      </ListItem>
    );
  });

  useEffect(() => {
    if (itemsLength > MAX_ITEMS_LENGTH) {
      setItemsLength(MAX_ITEMS_LENGTH);
      setIsHidden(true);
    }
  }, []);

  return (
    <Filter>
      <FilterName>{label}</FilterName>

      <List>{listItems.slice(0, itemsLength)}</List>

      {isHidden && (
        <ShowMore onClick={toggleShowMore}>
          {itemsLength <= MAX_ITEMS_LENGTH ? (
            <>
              <ArrowSmallIcon />
              <ShowMoreLabel>Show More</ShowMoreLabel>
            </>
          ) : (
            <>
              <ArrowSmallIconRotated />
              <ShowMoreLabel>Show Less</ShowMoreLabel>
            </>
          )}
        </ShowMore>
      )}
    </Filter>
  );
};

export default FilterList;
