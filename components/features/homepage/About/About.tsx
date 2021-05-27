import React from 'react';
import NextLink from 'next/link';

import {
  Section,
  Headline,
  Description,
  AboutColumn,
  AboutImageContainer,
  AboutImage,
  Image,
} from './styledComponents';

import { Row, Column, Link } from '../../../atoms';

const About = () => {
  return (
    <Section>
      <Row className="align-center">
        <Column sm="6" col="12">
          <AboutImageContainer>
            <AboutImage>
              <Image
                src={require('../../../../public/images/homepage/about.jpg')}
              />
            </AboutImage>
          </AboutImageContainer>
        </Column>
        <AboutColumn sm="6" col="12">
          <Headline>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, placeat. Deleniti nam deserunt aut beatae nihil doloribus animi eveniet, nostrum libero, enim eos! Esse odit dignissimos voluptatum eius? Veniam, iusto.
          </Headline>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, placeat. Deleniti nam deserunt aut beatae nihil doloribus animi eveniet, nostrum libero, enim eos! Esse odit dignissimos voluptatum eius? Veniam, iusto.
          </Description>
          <NextLink
            href="/b/[category]"
            as="/b/theatre-streaming-video"
            passHref
          >
            <Link to="/b/theatre-streaming-video" withArrow={true}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, placeat. Deleniti nam deserunt aut beatae nihil doloribus animi eveniet, nostrum libero, enim eos! Esse odit dignissimos voluptatum eius? Veniam, iusto.
            </Link>
          </NextLink>
        </AboutColumn>
      </Row>
    </Section>
  );
};

export default About;
