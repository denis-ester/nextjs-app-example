import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { format } from 'url';

import { Section, FilterColumn } from './styledComponents';

import { Row, Column } from '../../../atoms';

import { FilterPopup } from '../../popup';

import CategoryList from './CategoryList';
import FilterableList from './FilterableList';
import FilterableHeader from './FilterableHeader';
import FilterButtons from './FilterButtons';
import FilterTags from './FilterTags';
import FilteredItems from './FilteredItems';

import { ICategoryListProps } from '../CategoryTemplateSection/CategoryList/CategoryList';
import { IAllFilterListsLabels, IFilterLabelsArray } from '../CategoryTemplate';
import { ISortOption } from './FilterButtons/FilterButtons';

import { Production } from '../../../../classes/Production';

import { xtablet } from '../../../../constants/viewports';

import useViewport from '../../../../hooks/use-viewport';

interface ICategoryTemplateSectionProps {
  categoryTitle?: string;
  items: Production[];
  sortedItems: Production[];
  categories: ICategoryListProps[];
  filterLists?: IFilterLabelsArray[];
  allFilters: IAllFilterListsLabels[];
  sortOptions: ISortOption[];
  setSortedItems: (sortedItems: Production[]) => void;
  setSortOptions: Function;
  setAllFilters: (filterLists: IAllFilterListsLabels[]) => void;
  allCategoryFilters: IAllFilterListsLabels[];
  setAllCategoryFilters: (allCategoryFilters: IAllFilterListsLabels[]) => void;
}

const filterByTime = (item: Production, type: string) => {
  const dateNowInSec = Date.now() / 1000;

  switch (type.toLowerCase()) {
    case 'upcoming':
      if (item.availability_start) {
        return item.availability_start > dateNowInSec;
      }

      return false;

    case 'available now':
      const start = item.availability_start || 0;
      const end = item.availability_end || Infinity;

      return start < dateNowInSec && end > dateNowInSec;

    case 'ending soon':
      const oneWeekInSec = 604800;
      const previousWeek = dateNowInSec - oneWeekInSec;

      if (item.availability_end) {
        return item.availability_end < previousWeek;
      }

      return false;

    default:
      return false;
  }
};

const CategoryTemplateSection = ({
  categoryTitle,
  items,
  sortedItems,
  categories,
  filterLists,
  allFilters,
  allCategoryFilters,
  sortOptions,
  setSortedItems,
  setSortOptions,
  setAllFilters,
  setAllCategoryFilters,
}: ICategoryTemplateSectionProps) => {
  const router = useRouter();

  const [activeFormatCategory, setActiveFormatCategory] = useState<
    IAllFilterListsLabels | undefined
  >(undefined);
  const [filterPopupOpen, setFilterPopupOpen] = useState<boolean>(false);
  const [filterBtnIsActive, setFilterBtnIsActive] = useState<boolean>(false);
  const [isTablet] = useViewport(xtablet.width);

  const filterColumn = (
    <div>
      <div>
        {categories.map(({ label, items, isDropdown }, index) => {
          let accordionIsActive;

          const filteredActiveItem = allCategoryFilters.filter(
            ({ active }) => active
          );

          const categoryIsActive = items.find(({ label: itemLabel }) =>
            filteredActiveItem.find(
              ({ label: activeItemLabel }) => activeItemLabel === itemLabel
            )
          );

          if (categoryIsActive) {
            accordionIsActive = true;
          } else {
            accordionIsActive = false;
          }

          return (
            <CategoryList
              label={label}
              items={items}
              isDropdown={isDropdown}
              isActive={accordionIsActive}
              allCategoryFilters={allCategoryFilters}
              setAllCategoryFilters={(
                allCategoryFilters: IAllFilterListsLabels[]
              ) => setAllCategoryFilters([...allCategoryFilters])}
              key={index}
            />
          );
        })}
      </div>

      <FilterableList
        filterLists={filterLists}
        allFilters={allFilters}
        allCategoryFilters={allCategoryFilters}
        setAllFilters={setAllFilters}
        setAllCategoryFilters={setAllCategoryFilters}
        setFilterPopupOpen={setFilterPopupOpen}
      />
    </div>
  );

  // set router query
  useEffect(() => {
    const allActiveCategoryFilters = allCategoryFilters.filter(
      ({ active }) => active
    );
    const allCheckedFilters = allFilters.filter(({ checked }) => checked);

    // todo: refactor this !!!
    let allCheckedGroupFilters: any = {};
    allActiveCategoryFilters.forEach((item: any) => {
      allCheckedGroupFilters = {
        ...allCheckedGroupFilters,
        [item.category]: allCheckedGroupFilters[item.category]
          ? [...allCheckedGroupFilters[item.category], item.label]
          : [item.label],
      };
    });
    allCheckedFilters.forEach((item: any) => {
      allCheckedGroupFilters = {
        ...allCheckedGroupFilters,
        [item.category]: allCheckedGroupFilters[item.category]
          ? [...allCheckedGroupFilters[item.category], item.label]
          : [item.label],
      };
    });

    const formatGroupedQuery: any = {};
    Object.keys(allCheckedGroupFilters).forEach(key => {
      const item = allCheckedGroupFilters[key];
      formatGroupedQuery[key] = item.join(',');
    });

    const newUrl = format({
      pathname: router.pathname,
      query: formatGroupedQuery,
    });

    const newAsUrl = format({
      pathname: router.asPath.replace(/\?.+/gi, ''),
      query: formatGroupedQuery,
    });

    const absoluteUrl = format({
      pathname: router.asPath,
      query: formatGroupedQuery,
      host: window.location.host,
      protocol: window.location.protocol,
    });

    if (window.location.href != absoluteUrl) {
      router.push(newUrl, newAsUrl, { shallow: true });
    }
  }, [allFilters, allCategoryFilters]);

  // set label for FilterableHeader
  useEffect(() => {
    const filterFormats = allCategoryFilters.filter(
      items => items.category === 'format'
    );
    const findActiveFormatCategory = filterFormats.find(item => item.active);

    if (findActiveFormatCategory) {
      setActiveFormatCategory(findActiveFormatCategory);
    } else {
      setActiveFormatCategory(undefined);
    }
  }, [allCategoryFilters]);

  // set purple circle for Filter button
  useEffect(() => {
    const someCategory = allCategoryFilters.some(
      category => category.active === true
    );
    const someFilter = allFilters.some(filter => filter.checked === true);

    if (someCategory || someFilter) {
      setFilterBtnIsActive(true);
    } else {
      setFilterBtnIsActive(false);
    }
  }, [allFilters, allCategoryFilters]);

  // set filtering
  useEffect(() => {
    const query: any = router.query;

    const filteredItems = items.filter(item => {
      if (Object.keys(query).length > 1) {
        const listQuery = Object.keys(query);

        return listQuery.every(key => {
          let filter: (q: string) => void;

          switch (key.toLowerCase()) {
            case 'pricing options':
              filter = (q: string) => {
                const formatQueryValue = q.replace(' ', '_').toLowerCase();

                return item[`platform_${formatQueryValue}`];
              };
              return query[key].split(',').some(filter);

            case 'platforms':
              filter = (q: string) => {
                return item.platform?.name === q;
              };
              return query[key].split(',').some(filter);

            case 'availability':
              filter = (type: string) => {
                return filterByTime(item, type);
              };
              return query[key].split(',').some(filter);
          }

          const mainFilter = allCategoryFilters.find(
            ({ label }) => label.toLowerCase() === query[key].toLowerCase()
          );
          const filterValueArr = mainFilter?.value;

          if (filterValueArr) {
            return filterValueArr.every(value =>
              item.tags.find(
                ({ name }) => name.toLowerCase() === value.toLowerCase()
              )
            );
          }

          return item.tags.some(t => {
            if (key !== 'category') {
              if (t.name.toLowerCase() === query[key].toLowerCase()) {
                return true;
              } else {
                return false;
              }
            } else {
              return true;
            }
          });
        });
      }

      return true;
    });

    setSortedItems([...filteredItems]);
  }, [router.query]);

  // set sorting
  useEffect(() => {
    const activeOption = sortOptions.find(({ active }) => active);
    const newSortedItems = [...sortedItems];

    if (activeOption?.field === 'id') {
      newSortedItems.sort((item1, item2) => item2.id - item1.id);
    } else {
      newSortedItems.sort(
        (item1, item2) => item1.popularity - item2.popularity
      );
    }

    if (JSON.stringify(newSortedItems) !== JSON.stringify(sortedItems)) {
      setSortedItems(newSortedItems);
    }
  }, [sortOptions, sortedItems]);

  // set sorting on first load
  useEffect(() => {
    const defaultItem = sortOptions.find(item => item.default);

    if (defaultItem) {
      sortOptions.forEach(item => (item.active = false));
      defaultItem.active = true;

      setSortOptions(sortOptions);
    }
  }, []);

  return (
    <Section>
      <Row>
        {!isTablet ? (
          <FilterColumn md="2" col="12">
            {filterColumn}
          </FilterColumn>
        ) : (
          <FilterPopup
            isOpen={filterPopupOpen}
            closePopup={() => setFilterPopupOpen(false)}
          >
            <Column col="12">{filterColumn}</Column>
          </FilterPopup>
        )}

        <Column md="10" col="12" className={!isTablet ? '' : 'offset-md-2'}>
          <FilterableHeader
            label={
              activeFormatCategory ? (
                <span>
                  {activeFormatCategory.alt_label || activeFormatCategory.label}
                </span>
              ) : (
                categoryTitle
              )
            }
            quantity={sortedItems.length}
          >
            <FilterButtons
              setSortOptions={setSortOptions}
              sortOptions={sortOptions}
              setFilterPopupOpen={setFilterPopupOpen}
              filterIsActive={filterBtnIsActive}
            />
          </FilterableHeader>

          <FilterTags allFilters={allFilters} setAllFilters={setAllFilters} />

          <FilteredItems
            items={sortedItems}
            area={`Category Page: ${activeFormatCategory ? activeFormatCategory.alt_label || activeFormatCategory.label : categoryTitle}`}
          />
        </Column>
      </Row>
    </Section>
  );
};

export default CategoryTemplateSection;
