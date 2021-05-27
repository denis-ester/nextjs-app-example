import React, { useState, useEffect, MouseEvent } from 'react';
import debounce from 'lodash/debounce';
import NextLink from 'next/link';

import {
  FooterBottomContainer,
  Copyright,
  FooterBottomMenu,
  ListItem,
  Link,
} from './styledComponents';

import SocialList from '../SocialList';

import { xdesktop, xtablet } from '../../../../constants/viewports';

import { changeViewportState } from '../../../../utils/changeViewportState';

const FooterBottom = () => {
  const [isXDesktop, setIsXDesktop] = useState<boolean>(true);
  const [isXTablet, setXTablet] = useState<boolean>(true);

  const RESIZE_DELAY = 50;

  const handleResize = debounce(() => {
    changeViewportState(setIsXDesktop, xdesktop.width - 1);
    changeViewportState(setXTablet, xtablet.width - 1);
  }, RESIZE_DELAY);

  const onManageCookiesClick = (e: MouseEvent) => {
    e.preventDefault();
    // @ts-ignore: this calls the termly module javascript function to popup the cookie manager modal
    displayPreferenceModal();
  };

  useEffect(() => {
    changeViewportState(setIsXDesktop, xdesktop.width - 1);
    changeViewportState(setXTablet, xtablet.width - 1);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <FooterBottomContainer>
      <Copyright>
        <ListItem>© App, Inc. 2019</ListItem>
        <ListItem>
          <Link
            to="https://app.termly.io/document/privacy-policy/7ca1eba8-8100-4b22-934c-6c5c6ab0460d"
            target="_blank"
          >
            Privacy Policy
          </Link>
        </ListItem>
        <ListItem>
          <Link
            to="https://app.termly.io/document/terms-of-use-for-website/e7e50bee-2bf5-486f-9be4-599a848b06c3"
            target="_blank"
          >
            Terms & Conditions
          </Link>
        </ListItem>
        <ListItem>
          <Link
            to="https://app.termly.io/document/cookie-policy/7f90f35f-c8f4-400a-83b4-bbbdc3c7fe26"
            target="_blank"
          >
            Cookie Policy
          </Link>
        </ListItem>
        <ListItem>
          <Link to="#" onClick={e => onManageCookiesClick(e)}>
            Manage Cookies
          </Link>
        </ListItem>
      </Copyright>

      {!isXTablet && (
        <FooterBottomMenu>
          <ListItem>
            <NextLink href="/about" passHref>
              <Link to="/about">About</Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href="/purpose" passHref>
              <Link to="/purpose">Our Purpose</Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href="/submissions" passHref>
              <Link to="/submissions">For theatre-makers and venue owners</Link>
            </NextLink>
          </ListItem>
        </FooterBottomMenu>
      )}

      {isXDesktop && !isXTablet && <SocialList />}
    </FooterBottomContainer>
  );
};

export default FooterBottom;
