import React, { useState, useEffect } from 'react';

import { Section } from './styledComponents';

import { Row, Column } from '../../../atoms';

import UserRoute from './UserRoute';

import { IAllFilterListsLabels } from '../CategoryTemplate';

interface ICategoryTemplateHeaderProps {
  categoryTitle: string;
  allCategoryFilters: IAllFilterListsLabels[];
  setAllCategoryFilters: (allCategoryFilters: IAllFilterListsLabels[]) => void;
}

const CategoryTemplateHeader = ({
  categoryTitle,
  allCategoryFilters,
  setAllCategoryFilters,
}: ICategoryTemplateHeaderProps) => {
  const [activeCategory, setActiveCategory] = useState<
    IAllFilterListsLabels | undefined
  >(undefined);

  useEffect(() => {
    const filterFormats = allCategoryFilters.filter(
      items => items.category === 'format'
    );
    const findActiveCategory = filterFormats.find(item => item.active);

    if (findActiveCategory) {
      setActiveCategory(findActiveCategory);
    } else {
      setActiveCategory(undefined);
    }
  }, [allCategoryFilters]);

  return (
    <>
      {activeCategory && (
        <Section>
          <Row>
            <Column>
              <UserRoute
                categoryTitle={categoryTitle}
                categories={allCategoryFilters}
                activeCategory={activeCategory}
                setCategories={(allCategoryFilters: IAllFilterListsLabels[]) =>
                  setAllCategoryFilters([...allCategoryFilters])
                }
              />
            </Column>
          </Row>
        </Section>
      )}
    </>
  );
};

export default CategoryTemplateHeader;
