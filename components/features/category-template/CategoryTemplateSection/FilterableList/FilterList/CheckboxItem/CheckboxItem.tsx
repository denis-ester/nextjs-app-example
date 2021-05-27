import React, { ChangeEvent } from 'react';

import { Checkbox } from './styledComponents';

export interface ICheckboxItemProps {
  label: string;
  checked?: boolean;
  onClick?: (event: ChangeEvent<any>) => void;
}

const CheckboxItem = ({
  label,
  checked = false,
  onClick: handleClick,
}: ICheckboxItemProps) => (
  <Checkbox
    type="checkbox"
    name={label}
    shouldShowLabel={true}
    labelProps={{ label: label }}
    value={label}
    checked={checked}
    onClick={handleClick}
  />
);

export default CheckboxItem;
