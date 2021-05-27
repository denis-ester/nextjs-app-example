import React, { useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import debounce from 'lodash/debounce';

import { Section, Column } from './styledComponents';

import { Row } from '../../../atoms';

import CategoriesColumn from './CategoriesColumn';

import { DigitalCategories } from '../../../../interfaces';

import { windowSize } from '../../../../utils/getWindowSize';
import { mobile } from '../../../../constants/viewports';

interface ICategoriesProps {
  items?: DigitalCategories[];
}

const changeIsMobile = (setIsMobile: Function) => {
  if (windowSize.width > mobile.width) {
    setIsMobile(false);
  } else {
    setIsMobile(true);
  }
};

const Categories = ({ items }: ICategoriesProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  const RESIZE_DELAY = 50;

  const handleResize = debounce(() => {
    changeIsMobile(setIsMobile);
  }, RESIZE_DELAY);

  const itemsColumns = items?.map(
    (
      {
        title: itemTitle,
        slug: itemSlug,
        categories: itemCategories,
      }: DigitalCategories,
      index: number
    ) => {
      if (isMobile) {
        return (
          <CategoriesColumn
            title={itemTitle}
            slug={itemSlug}
            categories={itemCategories}
            key={index}
          />
        );
      } else {
        return (
          <Column md="3" xs="6" col="12" key={index}>
            <CategoriesColumn
              title={itemTitle}
              slug={itemSlug}
              categories={itemCategories}
            />
          </Column>
        );
      }
    }
  );

  const swiperOptions:{slidesPerView:number|"auto", spaceBetween: number} = {
    slidesPerView: 'auto',
    spaceBetween: 0,
  };

  useEffect(() => {
    changeIsMobile(setIsMobile);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {itemsColumns && (
        <Section>
          {isMobile ? (
            <Swiper {...swiperOptions}>{itemsColumns}</Swiper>
          ) : (
            <Row>{itemsColumns}</Row>
          )}
        </Section>
      )}
    </>
  );
};

export default Categories;
