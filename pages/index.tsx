import React from 'react';
import { NextSeo } from 'next-seo';
import { format as urlFormat } from 'url';
import { useAuth0 } from '../react-auth0-wrapper';

import {
  Banner,
  TagFiltersSection,
  About,
  Support,
  SignUp,
  News,
  Categories,
} from '../components/features/homepage';

import { Category, Categories as CategoriesClass } from '../classes/Category';

import { ArticleType } from '../article';

import { Client, getPredicatePathReference } from '../utils/prismicHelpers';

import { GENRES } from '../constants';

const title = 'Homepage | APP';

interface IHomepageProps {
  articles: ArticleType[];
  allCategories: Category[];
}

const Homepage = ({ articles, allCategories }: IHomepageProps) => {
  const { isAuthenticated } = useAuth0();

  const categories = new CategoriesClass(allCategories);

  const digitalCategories = categories.getDigitalCategories();

  // Change format categories of Watch category to genre categories
  digitalCategories.find(item => {
    if (item.title === 'Watch') {
      item.categories = GENRES.map(({ label, alt_label }) => ({
        label,
        alt_label: alt_label || label,
        link: urlFormat({
          pathname: `/b/${item.slug}`,
          query: { genre: label },
        }),
        query: {
          pathname: `/b/${item.slug}`,
          type: 'genre',
        },
      }));
      return item;
    }
  });

  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          title: title,
          url: 'https://app.com',
        }}
        canonical="https://app.com"
      />

      <Banner />
      <Categories items={digitalCategories} />
      <About />
      <News articles={articles} />
      <Support />
      <TagFiltersSection
        title={artistReliefOrganisationsData.title}
        tags={artistReliefOrganisationsData.tags}
      />
      <TagFiltersSection
        title={exploreLondonTheatreData.title}
        tags={exploreLondonTheatreData.tags}
        link={exploreLondonTheatreData.link}
      />
      {!isAuthenticated && <SignUp />}
    </>
  );
};

Homepage.getInitialProps = async function ({ req }: { req: any }) {
  try {
    let options: { ref?: string } = {};
    if (process.env.PRISMIC_REF) {
      options.ref = process.env.PRISMIC_REF;
    }
    const query = await Client(req).query(
      getPredicatePathReference('document.type', 'article'),
      { pageSize: 3, orderings: '[my.article.publish_date desc]' }
    );
    if (!query) {
      throw new Error('Could not load articles from Prismic');
    }
    return {
      articles: query.results,
    };
  } catch (error) {
    console.error(error);

    if (process.env.NODE_ENV == 'production') {
      // report all errors as a 404, via WithError
      return {
        title: 'Error locating article',
        statusCode: 404,
      };
    } else {
      // in dev environments, just throw the error so Next renders it
      throw error;
    }
  }
};

export default Homepage;
