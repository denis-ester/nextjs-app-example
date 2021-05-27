import React from 'react';
import NextLink from 'next/link';

import { Headline, List, ListItem, Link } from './styledComponents';

import { DigitalCategories } from '../../../../interfaces';

export interface ICategoriesListProps {
  title: DigitalCategories['title'];
  items?: DigitalCategories['categories'];
}

const CategoriesList = ({ title, items }: ICategoriesListProps) => {
  const categories = items?.map(({ label, alt_label, link, query }, index) => {
    return (
      <ListItem key={index}>
        {/*
         * if explore categories will be made by dynamic output
         * then delete this condition
         */}
        {query ? (
          <NextLink
            href={{ pathname: `/b/[category]`, query: { [query.type]: label } }}
            as={{ pathname: query.pathname, query: { [query.type]: label } }}
            passHref
          >
            <Link to={link}>{alt_label || label}</Link>
          </NextLink>
        ) : (
          <NextLink href={link} passHref>
            <Link to={link}>{alt_label || label}</Link>
          </NextLink>
        )}
      </ListItem>
    );
  });

  return (
    <>
      <Headline>{title}</Headline>
      {categories && <List>{categories}</List>}
    </>
  );
};

export default CategoriesList;
