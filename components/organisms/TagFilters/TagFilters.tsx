import React from 'react';
import NextLink from 'next/link';

import { Headline, Link } from './styledComponents';

import { Row, Column } from '../../atoms';
import { Tags } from '../../molecules';

import { ITagsBaseProps } from '../../molecules/Tags/Tags';

interface ILink {
  href: string;
  title: string;
}

export interface ITagFiltersProps {
  title?: string;
  tags?: ITagsBaseProps[];
  link?: ILink;
  tagsClassName?: string;
  className?: string;
  onClick?: () => void;
}

const TagFilters = ({
  title,
  tags,
  link,
  tagsClassName,
  className,
  onClick: handleClick,
}: ITagFiltersProps) => (
  <Row className={className}>
    {title && (
      <Column>
        <Headline>{title}</Headline>
      </Column>
    )}

    {tags && (
      <Column className={tagsClassName}>
        <Tags tags={tags} onClick={handleClick} />
      </Column>
    )}

    {link && (
      <Column>
        <NextLink href={link.href} as={link.href} passHref>
          <Link to={link.href}>{link.title}</Link>
        </NextLink>
      </Column>
    )}
  </Row>
);

export default TagFilters;
