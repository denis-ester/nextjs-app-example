import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styledComponents/styles';
import 'reflex-grid';
import '../utils/reflex-hidden.css';
import 'react-day-picker/lib/style.css';
import '../components/FilterModal.css';
import 'swiper/swiper-bundle.css';
require('nprogress/nprogress.css')
import { page } from './../analytics';
import Router from 'next/router';
import { Auth0Provider } from '../react-auth0-wrapper';
import config from '../auth0.config.json';
import { DefaultSeo } from 'next-seo';
import seoConfig from '../next-seo.config';
import { HistoryProvider } from '../HistoryContext';
import * as Sentry from '@sentry/browser';
import { asyncFetchAndHandleCancel } from '../utils/asyncFetchAndHandleCancel';
import { api } from '../api';
import { getPlatformsFromProductions } from '../utils/getPlatformsFromProductions';
import { isLocalStorageEnabled } from '../utils/localStorage';
import { enableProgressIndicator } from '../utils/progressIndicator';
import Layout from '../components/Layout';
import { Category } from '../classes/Category';

// this is a polyfill that's required for react-lazy-images. if we ever switch to another lazy image
// package, we may or may not need to change this.
import 'intersection-observer';

enableProgressIndicator();

const onRedirectCallback = (appState: any) => {
  if (appState && appState.redirectUrl) {
    window.location.replace(appState.redirectUrl);
  } else {
    window.history.replaceState(
      {},
      document.title,
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
};

const handleRouteChange: (url: any) => void = url => {
  // this fires when the SPA changes pages
  page(url);
};

Router.events.on('routeChangeComplete', handleRouteChange);

const StyleSheets = () => {
  const links = [
    {
      href:
        'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css',
    },
  ];

  links.forEach(item => {
    const link = document.createElement('link');
    link.href = item.href;
    link.rel = 'stylesheet';
    link.type = 'text/css';

    document.head.appendChild(link);
  });
};

const Fonts = () => {
  const links = [
    { href: 'https://cloud.typenetwork.com/projects/3223/fontface.css/' },
    {
      href:
        'https://fonts.googleapis.com/css?family=Raleway:400,600,700&display=swap',
    },
  ];

  links.forEach(item => {
    const link = document.createElement('link');
    link.href = item.href;
    link.rel = 'stylesheet';
    link.type = 'text/css';

    document.head.appendChild(link);
  });
};

export default class TApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // make categories be able for all pages
    const allCategories: Category[] = await api.getCategories();

    return {
      pageProps: {
        allCategories,
        ...pageProps,
      },
    };
  }

  componentDidMount() {
    Fonts();
    StyleSheets();
    // this fires when the SPA is first loaded
    page();

    // warm the cache by calling the API (which will automatically warm the cache if it's empty or
    // out of date)
    if (isLocalStorageEnabled()) {
      asyncFetchAndHandleCancel(
        async () => ({
          productions: await api.getLiveProductions(false),
          digital: await api.getLiveDigitalProductions(false),
          popular: await api.getPopularShows(),
          allCategories: await api.getCategories(),
          allProductions: await api.getLiveDigitalProductions(),
        }),
        response => {
          // pre-calculate the platforms from the productions as well
          getPlatformsFromProductions(response.digital);
        }
      );
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={
          typeof window !== 'undefined' ? window.location.origin : ''
        }
        onRedirectCallback={onRedirectCallback}
      >
        <HistoryProvider>
          <DefaultSeo {...seoConfig} />
          <ThemeProvider theme={theme}>
            <Layout {...pageProps}>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </HistoryProvider>
      </Auth0Provider>
    );
  }
}
