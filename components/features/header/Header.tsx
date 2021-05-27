import { useState, useEffect } from 'react';
import NextLink from 'next/link';

import { Wrapper, BurgerMenu, Logotype, SearchIcon } from './styledComponents';

import Menu from './Menu';
import ProfileMenu from './ProfileMenu';
import { SearchPopup } from '../popup';

import { Production } from '../../../classes/Production';

import useViewport from '../../../hooks/use-viewport';
import { xtablet } from '../../../constants/viewports';
import { Featured } from '../../../interfaces';

import { api } from '../../../api';

const Header = () => {
  const [productions, setProductions] = useState<Production[]>([]);
  const [featured, setFeatured] = useState<Featured[]>([]);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isTablet] = useViewport(xtablet.width);

  // get api data
  useEffect(() => {
    let didCancel = false;

    async function fetchApiData() {
      const allDigitalProductions: Production[] = await api.getLiveDigitalProductions();
      const allExploreProductions: [
        Production
      ] = await api.getLiveProductions();
      const allFeatured: Featured[] = await api.getFeatured();

      if (allDigitalProductions && allExploreProductions && !didCancel) {
        const allProductions = allExploreProductions.concat(
          allDigitalProductions
        );

        setProductions(allProductions);
      }

      if (allFeatured && !didCancel) {
        setFeatured(allFeatured);
      }
    }

    fetchApiData();

    return () => {
      didCancel = true;
    };
  }, []);

  return (
    <Wrapper>
      {isTablet && (
        <BurgerMenu
          onClick={() => {
            setMenuOpen(true);
          }}
        />
      )}

      <Logotype>
        <NextLink href="/">
          <a>
            <img
              src={require('../../../public/logo.svg?original')}
              alt="logo"
            />
          </a>
        </NextLink>

        <SearchIcon
          onClick={() => {
            setSearchOpen(true);
          }}
        />
      </Logotype>

      <Menu
        productions={productions}
        featuredItems={featured}
        isOpen={menuOpen}
        setOpen={setMenuOpen}
      />

      <ProfileMenu />

      <SearchPopup
        isOpen={searchOpen}
        closePopup={() => setSearchOpen(false)}
        items={productions}
        tracking={{
          area: 'Search',
        }}
      />
    </Wrapper>
  );
};

export default Header;
