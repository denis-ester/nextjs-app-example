import { IncomingMessage } from "http";

export interface AbsoluteUrl {
  protocol: string;
  host?: string | string[];
  origin: string;
  url: string;
}

export const getAbsoluteUrl = (req:IncomingMessage, relativeUrl?:string):AbsoluteUrl => {
  let protocol:string, host:string | string[] | undefined;
  if(req) {
    protocol = process.env.NODE_ENV === 'production' ? 'https:' : 'http:';
    host = req.headers['x-forwarded-host'] || req.headers['host'];
  } else {
    protocol = window.location.protocol;
    host = (window.location.port == '80' || window.location.port == '443') ? window.location.hostname : window.location.host;
  }

  const origin:string = `${protocol}//${host}`;
  let url:string;

  if(relativeUrl) {
    url = `${origin}${relativeUrl}`
  } else if(req) {
    url = `${origin}${req.url}`;
  } else {
    url = window.location.href;
  }

  return {
    protocol: protocol,
    host: host,
    origin: origin,
    url: url
  };
}

export default getAbsoluteUrl;
