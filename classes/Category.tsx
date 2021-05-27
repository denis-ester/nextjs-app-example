import { format as urlFormat } from 'url';

import { DIGITAL_CATEGORIES } from '../constants';

import { Tag } from '../interfaces';

export class Category {
  name!: string;
  tags!: Tag[];
  slug!: string;
  digital!: boolean;
  explore!: boolean;

  [key: string]: any;

  constructor(obj: Category) {
    obj && Object.assign(this, obj);
  }

  href(): string {
    return `/b/[category]`;
  }
}

export class Categories {
  categories!: Category[];

  constructor(categories: Category[]) {
    this.categories = [];

    Object.assign(this.categories, categories);
  }

  /**
   * returns an array of digital categories that connected
   * with DIGITAL_CATEGORIES to make array which meets
   * the requirements of some components
   */
  getDigitalCategories() {
    return this.categories
      .map(({ name, slug, tags }) => {
        const digitalCategory = DIGITAL_CATEGORIES.find(
          ({ slug: digitalSlug }) => digitalSlug === slug
        );

        return {
          title: digitalCategory!.title,
          name,
          slug,
          categories: tags.map(tag => ({
            label: tag.name,
            alt_label: tag.alt_name || tag.name,
            link: urlFormat({
              pathname: `/b/${slug}`,
              query: { format: tag.name },
            }),
            query: {
              pathname: `/b/${slug}`,
              type: tag.type,
            },
          })),
          order: digitalCategory!.order,
        };
      })
      .sort((c1, c2) => c1.order - c2.order);
  }
}
