import React from 'react';
import NextLink from 'next/link';

import {
  CategoryCard,
  TitleLink,
  Title,
  ListItem,
  Link,
  Disabled,
  DisabledSmall,
} from './styledComponents';

import { List } from '../../../../atoms';

import { DigitalCategories } from '../../../../../interfaces';

interface ICategoriesColumnProps extends DigitalCategories {
  className?: string;
}

const CategoriesColumn = ({
  title,
  slug,
  categories,
  className,
}: ICategoriesColumnProps) => {
  const categoriesList = categories?.map(
    ({ label, alt_label, link, query }, index) => (
      <ListItem key={index}>
        {link && query ? (
          <NextLink
            href={{
              pathname: '/b/[category]',
              query: { [query.type]: label },
            }}
            as={{
              pathname: `/b/${slug}`,
              query: { [query.type]: label },
            }}
            passHref
          >
            <Link to={link}>{alt_label || label}</Link>
          </NextLink>
        ) : (
          <Disabled>
            {alt_label || label}
            <DisabledSmall>(Coming Soon)</DisabledSmall>
          </Disabled>
        )}
      </ListItem>
    )
  );

  return (
    <CategoryCard className={className}>
      {title && (
        <NextLink href="/b/[category]" as={`/b/${slug}`}>
          <TitleLink to={`/b/${slug}`}>
            <Title>{title}</Title>
          </TitleLink>
        </NextLink>
      )}
      {categoriesList && <List>{categoriesList}</List>}
    </CategoryCard>
  );
};

export default CategoriesColumn;
