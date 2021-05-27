import React from 'react';
import { NextPageContext } from 'next';

import CategoryTemplate from '../../components/features/category-template';

import WithClasses from '../../components/HOC/WithClasses';
import WithError from '../../components/HOC/WithError';

import { api } from '../../api';

import { Category } from '../../classes/Category';
import { Production } from '../../classes/Production';

import { ICategoryTemplateProps } from '../../components/features/category-template/CategoryTemplate';

const CategoryPage = (props: ICategoryTemplateProps) => {
  return <CategoryTemplate {...props} />;
};

CategoryPage.getInitialProps = async ({ query }: NextPageContext) => {
  const { category: currentCategory } = query;

  const caregories: Category[] = await api.getCategories();

  const foundCategory = caregories.find(({ slug }) => slug === currentCategory);

  if (!foundCategory) {
    // report all errors as a 404, via WithError
    return {
      title: 'Error locating show',
      statusCode: 404,
    };
  }

  const allProductions: Production[] = await api.getLiveDigitalProductions();

  // filter productions by id of api categories tags
  const filteredProductions = allProductions.filter(item =>
    item.tags.find(itemTag =>
      foundCategory.tags.some(categoryTag => categoryTag.id === itemTag.id)
    )
  );

  return {
    category: foundCategory,
    allProductions: filteredProductions,
    query,
  } as ICategoryTemplateProps;
};

export default WithClasses(WithError(CategoryPage));
