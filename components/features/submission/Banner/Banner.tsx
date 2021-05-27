import React from 'react';

import {
  Section,
  BannerImageColumn,
  FirstImageContainer,
  SecondImageContainer,
  BannerTitle,
  BannerButtons,
  BannerTitleHeadline,
  BannerTitleText,
  Link,
} from './styledComponents';

import { Row, Column, Button, Image } from './../../../atoms';

import { scrollTo } from '../../../../utils/scrollTo';

const Banner = () => {
  const scrollToContactUs = () => {
    scrollTo('contact-us');
  };

  return (
    <Section>
      <Row className="align-center">
        <BannerImageColumn sm="6" col="12">
          <FirstImageContainer>
            <Image
              src={require('../../../../public/images/submission/banner/mobile-one.png')}
            />
          </FirstImageContainer>
          <SecondImageContainer>
            <Image
              src={require('../../../../public/images/submission/banner/mobile-two.png')}
            />
          </SecondImageContainer>
        </BannerImageColumn>
        <Column sm="6" col="12">
          <BannerTitle>
            <BannerTitleHeadline>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque a exercitationem quaerat obcaecati hic, ut fuga, quam omnis tempora reiciendis! Blanditiis officiis nam dolorum obcaecati distinctio a, cum repellendus?
            </BannerTitleHeadline>
            <BannerTitleText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque a exercitationem quaerat obcaecati hic, ut fuga, quam omnis tempora reiciendis! Blanditiis officiis nam dolorum obcaecati distinctio a, cum repellendus?
            </BannerTitleText>
          </BannerTitle>
          <BannerButtons>
            <Button title="Submit a Show" onClick={scrollToContactUs} />
            <Link to="/about" withArrow={true}>
              More About Us
            </Link>
          </BannerButtons>
        </Column>
      </Row>
    </Section>
  );
};

export default Banner;
