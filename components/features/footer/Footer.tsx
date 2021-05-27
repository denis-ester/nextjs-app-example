import React from 'react';

import { Section, Container } from './styledComponents';

import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

import { DigitalCategories } from '../../../interfaces';

export interface IFooterProps {
  categories?: DigitalCategories[];
}

const Footer = ({ categories }: IFooterProps) => {
  const categoriesDataWithDigital =
    categories &&
    categoriesData.concat(
      categories.map(({ title, slug, categories }) => ({
        title,
        slug,
        items: categories,
      }))
    );

  return (
    <Section>
      <Container>
        <FooterTop categories={categoriesDataWithDigital} />
        <FooterBottom />
      </Container>
    </Section>
  );
};

export default Footer;
