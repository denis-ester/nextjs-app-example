import React from 'react';

import {
  Section,
  TextDescriptionColumn,
  TextDescriptionTitle,
} from './styledComponents';

import { Row } from './../../../atoms';

const TextDescription = () => {
  return (
    <Section>
      <Row>
        <TextDescriptionColumn sm="8" col="10" className="offset-sm-2 offset-1">
          <TextDescriptionTitle>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta quam consequatur alias enim corrupti omnis architecto ad rem atque nulla adipisci, sunt in tempora ea, numquam a sapiente nihil vitae?
          </TextDescriptionTitle>
        </TextDescriptionColumn>
      </Row>
    </Section>
  );
};

export default TextDescription;
