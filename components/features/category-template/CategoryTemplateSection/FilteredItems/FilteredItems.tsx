import React, { useState } from 'react';

import { Container } from './styledComponents';

import ItemCard from './ItemCard';

import { Production } from '../../../../../classes/Production';

// ITEMS_QUANTITY should't be less than 29 to incorrect rendering
// of next small image-size items (~188x107px) appearance
const ITEMS_QUANTITY = 29;

interface IFilteredItemsProps {
  items: Production[];
  area: string;
}

const FilteredItems = ({ items, area }: IFilteredItemsProps) => {
  const [itemsQuantity, setItemsQuantity] = useState<number>(ITEMS_QUANTITY);

  return (
    <Container>
      {items.length ? (
        items?.slice(0, itemsQuantity).map((item, index) => {
          return (
            <ItemCard
              item={item}
              itemsQuantity={itemsQuantity}
              setItemsQuantity={setItemsQuantity}
              index={index}
              area={area}
              key={index}
            />
          );
        })
      ) : (
        <p>No results found.</p>
      )}
    </Container>
  );
};

export default FilteredItems;
