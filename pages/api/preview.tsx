import { linkResolver } from '../../prismic-configuration'
import { Client } from '../../utils/prismicHelpers'
import { NextApiRequest, NextApiResponse } from 'next';

export const Preview = async (req:NextApiRequest, res:NextApiResponse) => {
  const token = req && req.query && req.query.token;
  const docId = req && req.query && req.query.documentId;
  if (token) {
    try {
      // tell Prismic to start a preview session -- this will normally return a URL, but for some
      // reason Prismic is expecting a non-existent mainDocument property on the response to the
      // previewSession call. for an example of how it's SUPPOSED to work, see
      // https://github.com/prismicio/nextjs-blog/blob/master/pages/api/preview.js
      let url = await Client(req).previewSession(token, linkResolver, '/')
      // if we got a docId from the request we can just use that directly
      if(url == '/' && docId) {
        url = linkResolver(await Client(req).getByID(docId))
      }
      res.writeHead(302, { Location: url })
      res.end()
    } catch {
      res.status(400).send('Something went wrong with the previewSession request');
    }
  } else {
    res.status(400).send('Missing token from preview request');
  }
}

export default Preview
