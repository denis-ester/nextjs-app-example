import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import find from 'lodash/find';
import NextLink from 'next/link';

import { Section, Headline, ButtonLink } from './styledComponents';

import { Row, Column } from '../../../atoms';

import { NewsCard } from '../../../molecules';

import { ArticleType } from '../../../../article';

import { tablet } from '../../../../constants/viewports';

import { changeViewportState } from '../../../../utils/changeViewportState';

interface INewsProps {
  articles: ArticleType[];
}

const News = ({ articles }: INewsProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  const RESIZE_DELAY = 50;

  const handleResize = debounce(() => {
    changeViewportState(setIsMobile, tablet.width);
  }, RESIZE_DELAY);

  const articlesAmount = isMobile ? articles.slice(0, 1) : articles.slice(0, 3);

  const cards = articlesAmount.map((article, index) => {
    const {
      data: {
        lead_image: { url: image_src },
        article_title,
        body,
      },
      uid,
    } = article;

    const title =
      article_title && article_title.length ? article_title[0].text : '';

    let description = '';
    try {
      const textList = find(body, item => item.slice_type === 'text')?.primary
        .text;

      if (textList) {
        // @ts-ignore
        description = find(textList, text => text.type === 'paragraph').text;
        description = description.split('\n')[0];
      }
    } catch (err) {
      console.error(title, err);
    }

    return (
      <Column sm="4" col="12" key={index}>
        <NewsCard
          image={image_src}
          title={title}
          description={description}
          link={`/news/${uid}`}
        />
      </Column>
    );
  });

  useEffect(() => {
    changeViewportState(setIsMobile, tablet.width);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Section>
      <Row>
        <Column>
          <Headline>News</Headline>
        </Column>
      </Row>
      <Row>{cards}</Row>
      <Row>
        <Column>
          <NextLink href="/news" passHref>
            <ButtonLink to="/news">See All News</ButtonLink>
          </NextLink>
        </Column>
      </Row>
    </Section>
  );
};

export default News;
