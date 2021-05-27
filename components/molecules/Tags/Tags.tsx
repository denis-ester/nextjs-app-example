import React from 'react';
import NextLink from 'next/link';

import { ListItem, Link } from './styledComponents';

import { List } from '../../atoms';

export interface ITagsBaseProps {
  label: string;
  href: string;
  external?: boolean;
}

interface ITagsProps {
  tags?: ITagsBaseProps[];
  onClick?: () => void;
}

const Tags = ({ tags = [], onClick: handleClick }: ITagsProps) => {
  const tagsItems = tags.map(({ href, external = false, label }, index) => (
    <ListItem key={index}>
      {!external ? (
        <NextLink href={href} passHref>
          <Link to={href} onClick={handleClick}>
            {label}
          </Link>
        </NextLink>
      ) : (
        <Link to={href}>{label}</Link>
      )}
    </ListItem>
  ));

  return <List>{tagsItems}</List>;
};

export default Tags;
