import React, { useState, Dispatch, SetStateAction } from 'react';
import NextLink from 'next/link';
import VisibilitySensor from 'react-visibility-sensor';
import 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';

import { ItemCard as StyledItemCard, Image } from './styledComponents';

import { Link } from '../../../../../atoms';

import { Production } from '../../../../../../classes/Production';
import { track } from '../../../../../../analytics';

export const placeholderSrc = (width: number, height: number) =>
  `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;

export interface IItemCardProps {
  item: Production;
  itemsQuantity: number;
  setItemsQuantity: Dispatch<SetStateAction<number>>;
  index: number;
  area: string;
}

const ItemCard = ({
  item,
  itemsQuantity,
  setItemsQuantity,
  index,
  area,
}: IItemCardProps) => {
  const productionItem = new Production(item);

  const [viewed, setViewed] = useState(false);

  const onVisibilitySensorChange = (isVisible: boolean) => {
    if (!viewed && isVisible === true) {
      track.productionView(productionItem);
      setViewed(true);
      setItemsQuantity(itemsQuantity + 1);
    }
  };

  const imageSrc = `${item.work_image.replace(
    'app-assets.s3.amazonaws.com',
    'app.imgix.net'
  )}?fit=crop&crop=faces&w=241&auto=format,compress`;

  return (
    <VisibilitySensor onChange={onVisibilitySensorChange} scrollCheck={true}>
      <StyledItemCard>
        <NextLink href={productionItem.href()} as={productionItem.link()}>
          <Link to={productionItem.link()} onClick={() => {
            track.productionClick(productionItem, {area, position: index});
          }}>
            <Image
              src={imageSrc}
              width={241}
              className="lazyload"
              attributeConfig={{
                src: 'data-src',
                srcSet: 'data-srcset',
              }}
              htmlAttributes={{ alt: item.work_name, src: imageSrc }}
              key={item.id}
            />
          </Link>
        </NextLink>
      </StyledItemCard>
    </VisibilitySensor>
  );
};

export default ItemCard;
