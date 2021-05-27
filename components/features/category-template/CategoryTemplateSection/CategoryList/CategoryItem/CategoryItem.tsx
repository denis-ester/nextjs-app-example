import React from 'react';

import { ListItem, Button } from './styledComponents';

export interface ICategoryItemProps {
  label: string;
  alt_label?: string;
  onClick: () => void;
  active?: boolean;
}

const CategoryItem = ({
  label,
  onClick: handleClick,
  active = false,
}: ICategoryItemProps) => {
  return (
    <ListItem>
      <Button onClick={handleClick} size="auto" title={label} active={active} />
    </ListItem>
  );
};

export default CategoryItem;
