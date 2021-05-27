import React from 'react';

import {
  Section,
  AboutListTitle,
  AboutListDescription,
} from './styledComponents';

import { Row, Column } from '../../../atoms';
import { AboutCard } from '../../../molecules';

const AboutList = () => {
  const AboutListCards = data.cards.map(
    ({ image_src, image_alt, image_title, title }, index) => {
      return (
        <AboutCard
          imageSrc={image_src}
          imageAlt={image_alt}
          imageTitle={image_title}
          title={title}
          className="col-xs-4"
          key={index}
        />
      );
    }
  );

  return (
    <Section>
      <Row>
        <Column sm="8" col="12" className="offset-sm-2">
          <AboutListTitle>{data.header.title}</AboutListTitle>
          <AboutListDescription>{data.header.description}</AboutListDescription>
        </Column>
      </Row>
      <Row>{AboutListCards}</Row>
    </Section>
  );
};

export default AboutList;
