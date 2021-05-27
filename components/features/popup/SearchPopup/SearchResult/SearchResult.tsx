import React from 'react';
import NextLink from 'next/link';

import {
  SearchItem,
  Link,
  ImageWrapper,
  Image,
  Description,
  Name,
  Details,
} from './styledComponents';

import { Production } from '../../../../../classes/Production';

interface ISearchResultProps {
  production: Production;
  onClick?: () => void;
}

const getFormatName = (production:Production) => {
  const format = production.tags.filter(t => t.type === 'format');
  if(!format || !format[0] || !format[0].name) return null;
  return format[0].name[0].toUpperCase() + format[0].name.slice(1)
}

const SearchResult = ({
  production,
  onClick: handleClick,
}: ISearchResultProps) => {
  const productionImage = production.work_image.replace(
    'app-assets.s3.amazonaws.com',
    'app.imgix.net'
  );

  const productionDetailsArray = [];
  const format = getFormatName(production);
  format && productionDetailsArray.push(format);
  production.venue && productionDetailsArray.push(production.venue.name);
  production.platform && productionDetailsArray.push(production.platform.name);
  const productionDetails =
    productionDetailsArray.length > 1
      ? productionDetailsArray.toString().split(',').join('  |  ').split(',')
      : productionDetailsArray;
  const title = `${production.work_name} Tickets - ${productionDetails} | APP`;

  return (
    <SearchItem>
      <NextLink href={production.href()} as={production.link()} passHref>
        <Link onClick={handleClick}>
          <ImageWrapper>
            <Image src={productionImage} width={90} alt={title} />
          </ImageWrapper>
          <Description>
            <Name>{production.workNameWithBreaks()}</Name>
            <Details>{productionDetails}</Details>
          </Description>
        </Link>
      </NextLink>
    </SearchItem>
  );
};

export default SearchResult;
