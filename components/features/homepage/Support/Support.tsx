import React from 'react';

import {
  Section,
  MainColumn,
  Headline,
  Description,
  AvatarsContent,
  AvatarImage,
  Image,
} from './styledComponents';

import { Row, Column, Link } from '../../../atoms';

const Support = () => {
  return (
    <Section>
      <Row>
        <Column md="5" col="12">
          <MainColumn>
            <Headline>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates mollitia est ipsa, aspernatur amet, tempora, saepe cum ex voluptas ad repellendus incidunt ipsam tenetur beatae dolore nemo dolor. Dolore, repellendus?</Headline>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates mollitia est ipsa, aspernatur amet, tempora, saepe cum ex voluptas ad repellendus incidunt ipsam tenetur beatae dolore nemo dolor. Dolore, repellendus?
            </Description>
          </MainColumn>
        </Column>
        <Column md="7" col="12">
          <AvatarsContent>
            <AvatarImage>
              <Link to="/news/five-questions-with-liam-tamne">
                <Image
                  src={require('../../../../public/images/homepage/avatar-one.jpg')}
                />
              </Link>
            </AvatarImage>
            <AvatarImage>
              <Link to="/news/five-questions-with-cassie-leon">
                <Image
                  src={require('../../../../public/images/homepage/avatar-two.jpg')}
                />
              </Link>
            </AvatarImage>
            <AvatarImage>
              <Link to="/news/five-questions-with-josh-williams">
                <Image
                  src={require('../../../../public/images/homepage/avatar-three.jpg')}
                />
              </Link>
            </AvatarImage>
            <AvatarImage>
              <Link to="/news/five-questions-with-amanda-mascarenhas">
                <Image
                  src={require('../../../../public/images/homepage/avatar-four.jpg')}
                />
              </Link>
            </AvatarImage>
          </AvatarsContent>
        </Column>
      </Row>
    </Section>
  );
};

export default Support;
