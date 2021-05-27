import React, { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

import { windowSize } from '../../../../utils/getWindowSize';

import {
  Section,
  Image,
  Column,
  Headline,
  Description,
} from './styledComponents';

import { Row } from '../../../atoms';

const changeBannerImage = (setLargeImage: Function) => {
  if (windowSize.width > 576) {
    setLargeImage(true);
  } else {
    setLargeImage(false);
  }
};

const Banner = () => {
  const [largeImage, setLargeImage] = useState<boolean>(true);

  const RESIZE_DELAY = 50;

  const BannerImage = largeImage ? (
    <Image src={require('../../../../public/images/homepage/banner.jpg')} />
  ) : (
    <Image
      src={require('../../../../public/images/homepage/banner-small.jpg')}
    />
  );

  const handleResize = debounce(() => {
    changeBannerImage(setLargeImage);
  }, RESIZE_DELAY);

  useEffect(() => {
    changeBannerImage(setLargeImage);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Section>
      {BannerImage}
      <Row>
        <Column sm="6" xs="8" col="12" className="offset-sm-3 offset-xs-2">
          <Headline>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates mollitia est ipsa, aspernatur amet, tempora, saepe cum ex voluptas ad repellendus incidunt ipsam tenetur beatae dolore nemo dolor. Dolore, repellendus?</Headline>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates mollitia est ipsa, aspernatur amet, tempora, saepe cum ex voluptas ad repellendus incidunt ipsam tenetur beatae dolore nemo dolor. Dolore, repellendus?
          </Description>
        </Column>
      </Row>
    </Section>
  );
};

export default Banner;
