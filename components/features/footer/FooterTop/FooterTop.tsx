import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

import {
  FooterTopContainer,
  LogotypeContainer,
  Logotype,
  SocialListContainer,
} from './styledComponents';

import CategoriesList from '../CategoriesList';
import SocialList from '../SocialList';

import { ICategoriesListProps } from '../CategoriesList/CategoriesList';

import { xdesktop, xtablet } from '../../../../constants/viewports';

import { changeViewportState } from '../../../../utils/changeViewportState';

interface IFooterTopProps {
  categories?: ICategoriesListProps[];
}

const FooterTop = ({ categories }: IFooterTopProps) => {
  const [isXDesktop, setIsXDesktop] = useState<boolean>(true);
  const [isXTablet, setXTablet] = useState<boolean>(true);

  const RESIZE_DELAY = 50;

  const handleResize = debounce(() => {
    changeViewportState(setIsXDesktop, xdesktop.width - 1);
    changeViewportState(setXTablet, xtablet.width - 1);
  }, RESIZE_DELAY);

  useEffect(() => {
    changeViewportState(setIsXDesktop, xdesktop.width - 1);
    changeViewportState(setXTablet, xtablet.width - 1);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <FooterTopContainer>
      {!isXTablet && (
        <LogotypeContainer>
          <Logotype />
        </LogotypeContainer>
      )}

      {!isXTablet && categories && (
        <>
          <div>
            <CategoriesList
              title={categories[0].title}
              items={categories[0].items}
            />
          </div>

          <div>
            <CategoriesList
              title={categories[1].title}
              items={categories[1].items}
            />
          </div>

          <div>
            <CategoriesList
              title={categories[2].title}
              items={categories[2].items}
            />
            <CategoriesList
              title={categories[3].title}
              items={categories[3].items}
            />
          </div>

          <div>
            <CategoriesList
              title={categories[4].title}
              items={categories[4].items}
            />
            <CategoriesList
              title={categories[5].title}
              items={categories[5].items}
            />
          </div>
        </>
      )}

      {!isXDesktop && (
        <SocialListContainer>
          <SocialList />
        </SocialListContainer>
      )}

      {isXTablet && (
        <SocialListContainer>
          <SocialList />
        </SocialListContainer>
      )}
    </FooterTopContainer>
  );
};

export default FooterTop;
