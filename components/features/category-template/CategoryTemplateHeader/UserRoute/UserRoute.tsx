import React from 'react';

import { List, ListItem, Button, ArrowIcon } from './styledComponents';

import { IAllFilterListsLabels } from '../../CategoryTemplate';

interface IUserRouteProps {
  categoryTitle: string;
  activeCategory?: IAllFilterListsLabels;
  categories: IAllFilterListsLabels[];
  setCategories: (allCategoryFilters: IAllFilterListsLabels[]) => void;
}

const UserRoute = ({
  categoryTitle,
  activeCategory,
  categories,
  setCategories,
}: IUserRouteProps) => {
  const {
    label: activeCategoryLabel,
    alt_label: activeCategoryAltLabel,
  } = activeCategory as IAllFilterListsLabels;

  const handleClick = () => {
    categories.forEach(category => {
      if (category.category === 'format') {
        category.active = false;
      }
    });

    setCategories([...categories]);
  };

  return (
    <List>
      <ListItem>
        <Button onClick={handleClick} title={categoryTitle} size="auto" />
        <ArrowIcon />
      </ListItem>
      <ListItem>{activeCategoryAltLabel || activeCategoryLabel}</ListItem>
    </List>
  );
};

export default UserRoute;
