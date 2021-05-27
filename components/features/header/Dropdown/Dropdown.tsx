import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Wrapper, Dropdown as DropdownList } from './styledComponents';

import DropdownItem from './DropdownItem';

import { IDropdownItem } from './DropdownItem/DropdownItem';

interface IDropdownProps {
  cols?: IDropdownItem[];
  isOpen?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Dropdown = ({ cols, isOpen, setIsOpen }: IDropdownProps) => {
  const [items, setItems] = useState<IDropdownItem[] | undefined>(cols);

  const dropdownItems = items?.map((item, index) => (
    <DropdownItem
      item={item}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      key={index}
    />
  ));

  // update cols after getting api data
  useEffect(() => {
    setItems(cols);
  }, [cols]);

  return (
    <Wrapper isOpen={isOpen}>
      <DropdownList>
        <>{dropdownItems}</>
      </DropdownList>
    </Wrapper>
  );
};

export default Dropdown;
