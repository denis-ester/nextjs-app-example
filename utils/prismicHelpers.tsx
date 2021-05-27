import Prismic from 'prismic-javascript'
import Link from 'next/link'
import {
  apiEndpoint,
  accessToken,
  linkResolver,
  hrefResolver
} from '../prismic-configuration'
import { ArticleType } from '../article'

// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (_type:string, element:{data:any}, content:string, _children:any, index:any) => {
  <Link
    key={index}
    href={hrefResolver(element.data)}
    as={linkResolver(element.data)}
  >
    <a>{content}</a>
  </Link>
}

// Client method to query documents from the Prismic repo
let frontClient:any
export const Client = (req?:any) => {
  // prevent generating a new instance for client side since we don't need the refreshed request object.
  if (!req && frontClient) {
    return frontClient
  } else {
    const options = Object.assign({}, req ? { req } : {}, accessToken ? { accessToken: accessToken } : {})
    const client = Prismic.client(apiEndpoint, options)
    if(!req) {
      frontClient = client
    }
    return client;
  }
}

const metaDescriptionLength = 160;
export const getArticleMetaDescription = (article:ArticleType):string => {
  let description = "";
  article && article.data && article.data.body && article.data.body.forEach((slice) => {
    if(!slice || !slice.primary || !slice.primary.text || slice.slice_type != 'text') {
      return true;
    }

    // `.every()` will shortcut when you return false, similar to using `break` in a regular loop
    slice.primary.text.every((text) => {
      if(text.type != 'paragraph' || !text.text) {
        return true;
      }

      if(description.length > metaDescriptionLength) {
        return false;
      }

      description += " " + text.text
    })
  })

  return description.trim();
};

/**
 * strips a URL of all query params, so we can specify our own Imgix params
 *
 * @param url the url to strip
 */
export const getBarePrismicImageUrl = (url:string):string => {
  return url.replace(/\?.*$/, '')
}

export const getPredicatePathReference = (
  path: string,
  value: string | number
) => {
  return Prismic.Predicates.at(path, value);
};

export default Client
