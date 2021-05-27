import { useState } from 'react';

import { ListItem, Title } from './styledComponents';

import Dropdown from '../../Dropdown';

import { IDropdownItem } from '../../Dropdown/DropdownItem/DropdownItem';

interface IMenuDropdownListItemProps {
  title?: string;
  dropdownList?: IDropdownItem[];
}

const MenuDropdownListItem = ({
  title,
  dropdownList,
}: IMenuDropdownListItemProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <ListItem
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <Title>{title}</Title>
      <Dropdown
        cols={dropdownList}
        isOpen={isDropdownOpen}
        setIsOpen={setIsDropdownOpen}
      />
    </ListItem>
  );
};

export default MenuDropdownListItem;
