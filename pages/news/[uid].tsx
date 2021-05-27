import { RichText } from 'prismic-reactjs';
import getAbsoluteUrl, { AbsoluteUrl } from '../../utils/getAbsoluteUrl';

// project type definitions
import { ArticleType } from '../../article';

// project components
import { ArticleHead, ArticleBody } from '../../components/news/article';
import WithError from '../../components/HOC/WithError';

// project functions & styles
import {
  Client,
  getArticleMetaDescription,
  getBarePrismicImageUrl,
} from '../../utils/prismicHelpers';
import { NextSeo, ArticleJsonLd } from 'next-seo';

const getShareImageUrl = (article: ArticleType): string => {
  const url = article.data.social_share_image
    ? article.data.social_share_image.url
    : article.data.lead_image.url;
  return (
    getBarePrismicImageUrl(url) +
    '?fit=crop&crop=faces&w=1200&h=628&auto=format,compress'
  );
};

const getSquareShareImageUrl = (article: ArticleType): string => {
  if (article.data.social_share_image_square) {
    return getBarePrismicImageUrl(article.data.social_share_image_square.url);
  } else {
    const url = getBarePrismicImageUrl(article.data.lead_image.url);
    return url + '?fit=crop&crop=faces&ar=1:1&auto=format,compress';
  }
};

/**
 * article page component
 */
const Article = ({
  article,
  absoluteUrl,
}: {
  article: ArticleType;
  absoluteUrl: AbsoluteUrl;
}) => {
  if (article) {
    const titled = RichText.asText(article.data.article_title).length !== 0;
    const title = titled
      ? RichText.asText(article.data.article_title)
      : 'Untitled';
    const meta_title = title ? `News | App | ${title}` : `News | App`;
    const meta_description = getArticleMetaDescription(article);
    const share_image_url = getShareImageUrl(article);
    const lead_image_url = getBarePrismicImageUrl(article.data.lead_image.url);

    return (
      <>
        <NextSeo
          title={meta_title}
          description={meta_description}
          canonical={absoluteUrl.url}
          openGraph={{
            type: 'article',
            title: meta_title,
            article: {
              publishedTime: article.first_publication_date,
              modifiedTime: article.last_publication_date,
            },
            images: [
              {
                url: share_image_url,
                width: 1200,
                height: 628,
                alt: article.data.lead_image.alt,
              },
            ],
          }}
        />
        <ArticleJsonLd
          url={absoluteUrl.url}
          title={meta_title}
          images={[
            share_image_url,
            getSquareShareImageUrl(article),
            lead_image_url + '?fit=crop&crop=faces&ar=4:3&auto=format,compress',
            lead_image_url +
              '?fit=crop&crop=faces&ar=16:9&auto=format,compress',
          ]}
          datePublished={article.first_publication_date}
          dateModified={article.last_publication_date}
          authorName="App"
          publisherName="App"
          // can't be an svg, annoyingly
          publisherLogo={`${
            absoluteUrl.origin
          }${require('../../public/logo.png?url')}`}
          description={meta_description}
        />
        <ArticleHead
          title={title}
          image={article.data.lead_image}
          publish_date={article.first_publication_date}
          shareUrl={absoluteUrl.url}
        />
        <ArticleBody body={article.data.body} />
      </>
    );
  }

  // // Call the standard error page if the document was not found
  // return <Error statusCode='404' />
  // TODO:
  return null;
};

/**
 * Query the article document from Prismic when the page is loaded
 */
Article.getInitialProps = async function ({
  req,
  query,
}: {
  req: any;
  query: any;
}) {
  try {
    const { uid } = query;
    let options: { ref?: string } = {};
    if (process.env.PRISMIC_REF) {
      options.ref = process.env.PRISMIC_REF;
    }
    const document = await Client(req).getByUID('article', uid, options);

    if (!document) {
      throw new Error('Could not load article from Prismic');
    }

    return {
      article: document,
      absoluteUrl: getAbsoluteUrl(req),
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

// use WithError HOC to show the error page if there is an error
export default WithError(Article);
