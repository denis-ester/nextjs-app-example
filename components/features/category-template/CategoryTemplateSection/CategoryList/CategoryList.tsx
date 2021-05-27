import React, { useState, useEffect } from 'react';

import {
  Accordion,
  Category,
  CategoryName,
  List,
  ArrowIcon,
} from './styledComponents';

import CategoryItem from './CategoryItem';

import { ICategoryItemProps } from './CategoryItem/CategoryItem';

import { IAllFilterListsLabels } from '../../CategoryTemplate';

export interface ICategoryListProps {
  label: string;
  items: ICategoryItemProps[];
  isDropdown?: boolean;
  isActive?: boolean;
  allCategoryFilters: IAllFilterListsLabels[];
  setAllCategoryFilters: (allCategoryFilters: IAllFilterListsLabels[]) => void;
}

const CategoryList = ({
  label,
  items,
  isDropdown,
  isActive = false,
  allCategoryFilters,
  setAllCategoryFilters,
}: ICategoryListProps) => {
  const [ListItems, setListItems] = useState(items);

  const handleClick = (item: ICategoryItemProps) => {
    const foundItem = allCategoryFilters.find(
      ({ label }) => label === item.label
    );

    if (foundItem) {
      const foundItemActive = foundItem.active;

      const categoryFilteredItems = allCategoryFilters.filter(
        ({ category }) => category === foundItem.category
      );

      categoryFilteredItems.forEach(item => (item.active = false));

      foundItem.active = !foundItemActive;
    }

    setAllCategoryFilters([...allCategoryFilters]);
  };

  // set current item to active
  useEffect(() => {
    const filteredItem = allCategoryFilters.filter(item => item.active);

    const foundItem = items.find(item1 => {
      return filteredItem.find(item2 => item2.label === item1.label);
    });

    if (foundItem) {
      items.forEach(item => (item.active = false));

      foundItem.active = true;
    } else {
      items.forEach(item => (item.active = false));
    }

    setListItems([...items]);
  }, [allCategoryFilters, items]);

  const listItems = ListItems.map((item, index) => {
    return (
      <CategoryItem
        label={item.alt_label || item.label}
        onClick={() => handleClick(item)}
        key={index}
        active={item.active}
      />
    );
  });

  return isDropdown ? (
    <Accordion
      header={
        <CategoryName>
          {label}
          <ArrowIcon />
        </CategoryName>
      }
      isOpen={isActive}
    >
      {listItems && <List>{listItems}</List>}
    </Accordion>
  ) : (
    <Category>
      <CategoryName>{label}</CategoryName>

      {listItems && <List>{listItems}</List>}
    </Category>
  );
};

export default CategoryList;
