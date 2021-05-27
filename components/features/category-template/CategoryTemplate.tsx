import React, { useState, useEffect } from 'react';
import { ParsedUrlQuery } from 'querystring';

import CategoryTemplateHeader from './CategoryTemplateHeader';
import CategoryTemplateSection from './CategoryTemplateSection';

import { Category } from '../../../classes/Category';
import { Production } from '../../../classes/Production';

import { GENRES, MOODS } from '../../../constants';
import { Format, Genre, Mood } from '../../../interfaces';

import { ICheckboxItemProps } from './CategoryTemplateSection/FilterableList/FilterList/CheckboxItem/CheckboxItem';
import { ICategoryItemProps } from './CategoryTemplateSection/CategoryList/CategoryItem/CategoryItem';

const filterableListData = [
  {
    label: 'Pricing Options',
    items: [
      { label: 'Free' },
      { label: 'Rent' },
      { label: 'Buy' },
      { label: 'Digital Ticket' },
      { label: 'Subscription' },
    ],
  },
  // {
  //   label: 'Platforms',
  //   items: [
  //     { label: 'Apple' },
  //     { label: 'Audible' },
  //     { label: 'Digital Theatre' },
  //     { label: 'Globe Player' },
  //     { label: 'Google Arts & Culture' },
  //     { label: 'Kindle' },
  //     { label: 'Netflix' },
  //     { label: 'OntheBoards.tv' },
  //     { label: 'OperaVision' },
  //     { label: 'Prime Video' },
  //     { label: 'Spotify' },
  //     { label: 'STAGE' },
  //     { label: 'Vimeo' },
  //     { label: 'YouTube' },
  //   ],
  // },
  {
    label: 'Availability',
    items: [
      { label: 'Upcoming' },
      { label: 'Available Now' },
      { label: 'Ending Soon' },
    ],
  },
];

export interface SortOption {
  label: string;
  field: string | string[];
  direction: string;
  default?: boolean;
}

const sortOptions: SortOption[] = [
  { label: 'Newest', field: 'id', direction: 'desc' },
  { label: 'Popular', field: 'popularity', direction: 'asc', default: true },
];

export interface IFilterLabelsArray {
  label: string;
  items: ICheckboxItemProps[] | ICategoryItemProps[];
}

export interface IAllFilterListsLabels {
  label: string;
  alt_label?: string;
  checked?: boolean;
  category?: string;
  active?: boolean;
  type?: string;
  value?: string[];
}

const createFilterLabelsArray = (
  filterLists: IFilterLabelsArray[],
  query: any
) => {
  const allFilterListsLabels: IAllFilterListsLabels[] = [];

  filterLists?.forEach(({ label, items }) => {
    items.forEach((item: ICheckboxItemProps | ICategoryItemProps) => {
      allFilterListsLabels.push({
        ...item,
        category: label,
      });
    });
  });

  // set query on load
  for (const key in query) {
    let categoryFilters;
    const checkboxFilters = query[key].split(',');

    categoryFilters = allFilterListsLabels.find(
      item => item.label === query[key]
    );

    if (categoryFilters) {
      categoryFilters.active = true;
      categoryFilters.checked = true;
    } else {
      checkboxFilters.forEach((checkbox: any) => {
        categoryFilters = allFilterListsLabels.find(
          item => item.label === checkbox
        );

        if (categoryFilters) {
          categoryFilters.checked = true;
        }
      });
    }
  }

  return allFilterListsLabels;
};

export interface ICategoriesProps {
  format: Format[];
  // collection: Collection[];
  genre: Genre[];
  mood: Mood[];
}

export interface ICategoryTemplateProps {
  category: Category;
  pageUrl: string;
  allProductions: Production[];
  query: ParsedUrlQuery;
}

const CategoryTemplate = ({
  category,
  allProductions,
  query,
}: ICategoryTemplateProps) => {
  const [sortedItems, setSortedItems] = useState<Production[]>(allProductions);
  const [stateSortOptions, setSortOptions] = useState<SortOption[]>(
    sortOptions
  );

  const { name: categoryTitle, tags: categoryTags } = category;

  // change the key name from 'name' to 'label'
  const formats = categoryTags.map(({ name, alt_name, ...rest }) => ({
    label: name,
    alt_label: alt_name || name,
    ...rest,
  }));

  const categories: ICategoriesProps = {
    format: formats,
    // collection: COLLECTIONS,
    genre: GENRES,
    mood: MOODS,
  };

  let categoriesList: any[] = [];
  for (const key in categories) {
    if (categories.hasOwnProperty(key)) {
      const items = (categories as any)[key];

      categoriesList.push({
        label: key,
        items: JSON.parse(JSON.stringify(items)),
        isDropdown: key === 'format' ? false : true,
      });
    }
  }

  const [allCategoryFiltersLabels, setAllCategoryFiltersLabels] = useState(
    createFilterLabelsArray(categoriesList, query)
  );
  const [allFiltersLabels, setAllFiltersLabels] = useState(
    createFilterLabelsArray(filterableListData, query)
  );

  // set categories on query change
  useEffect(() => {
    // set all items to active false
    categoriesList.forEach(({ items }) =>
      items.forEach((item: any) => (item.active = false))
    );

    setAllCategoryFiltersLabels(createFilterLabelsArray(categoriesList, query));
  }, [query]);

  return (
    <>
      <CategoryTemplateHeader
        categoryTitle={categoryTitle}
        allCategoryFilters={allCategoryFiltersLabels}
        setAllCategoryFilters={setAllCategoryFiltersLabels}
      />

      <CategoryTemplateSection
        categoryTitle={categoryTitle}
        items={allProductions}
        sortedItems={sortedItems}
        setSortedItems={setSortedItems}
        categories={categoriesList}
        filterLists={filterableListData}
        allFilters={allFiltersLabels}
        allCategoryFilters={allCategoryFiltersLabels}
        sortOptions={stateSortOptions}
        setSortOptions={(options: SortOption[]) => {
          setSortOptions([...options]);
        }}
        setAllFilters={setAllFiltersLabels}
        setAllCategoryFilters={setAllCategoryFiltersLabels}
      />
    </>
  );
};

export default CategoryTemplate;
