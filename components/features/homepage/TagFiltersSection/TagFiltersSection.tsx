import React from 'react';

import { Section } from './styledComponents';

import { TagFilters } from '../../../organisms';

import { ITagFiltersProps } from '../../../organisms/TagFilters/TagFilters';

const TagFiltersSection = ({
  title,
  tags,
  link,
  tagsClassName,
}: ITagFiltersProps) => (
  <Section>
    <TagFilters
      title={title}
      tags={tags}
      link={link}
      tagsClassName={tagsClassName}
    />
  </Section>
);

export default TagFiltersSection;
