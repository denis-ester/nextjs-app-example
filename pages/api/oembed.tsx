import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'isomorphic-unfetch';
import { DEFAULT_FETCH_HEADERS } from '../../constants';

const providers:{[key: string]: string;} = {
  spotify: "https://open.spotify.com/oembed?url=",
  facebook: "https://www.facebook.com/plugins/video/oembed.json/?url=",
  youtube: "http://www.youtube.com/oembed?url=",
  vimeo: "https://vimeo.com/api/oembed.json?url=",
}

export const OEMBED_PROVIDERS = Object.keys(providers)

const getSingleQueryParam = (req:NextApiRequest, param:string):string|undefined => {
  if(req && req.query && req.query[param]) {
    return req.query[param].toString()
  }
}

export const Oembed = async (req:NextApiRequest, res:NextApiResponse) => {
  const provider = getSingleQueryParam(req, "provider");
  const url = getSingleQueryParam(req, "url");

  if (url && provider && providers[provider]) {
    const oembedResponse = await fetch(`${providers[provider]}${url}`, {headers: DEFAULT_FETCH_HEADERS})
    if(oembedResponse.ok) {
      const json = await oembedResponse.json()
      res.status(200).send(json.html)
    } else {
      console.error(`Error with oembed request: ${oembedResponse.status} ${oembedResponse.statusText} (url was "${oembedResponse.url}")`, )
      res.status(400).send('Error with oembed request');
    }
  } else {
    console.error(`Error with oembed API request query:`, req.query)
    res.status(400).send('Error with oembed API request query');
  }
}

export default Oembed
