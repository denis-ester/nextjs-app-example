import React from 'react';

import {
  Section,
  Headline,
  Description,
  HeaderColumn,
} from './styledComponents';

import { Row, ButtonLink } from './../../../atoms';

const ContactUs = () => {
  return (
    <Section id="contact-us">
      <Row>
        <HeaderColumn sm="8" col="12" className="offset-sm-2">
          <Headline>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque a exercitationem quaerat obcaecati hic, ut fuga, quam omnis tempora reiciendis! Blanditiis officiis nam dolorum obcaecati distinctio a, cum repellendus?</Headline>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque a exercitationem quaerat obcaecati hic, ut fuga, quam omnis tempora reiciendis! Blanditiis officiis nam dolorum obcaecati distinctio a, cum repellendus?
          </Description>
          <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque a exercitationem quaerat obcaecati hic, ut fuga, quam omnis tempora reiciendis! Blanditiis officiis nam dolorum obcaecati distinctio a, cum repellendus?
          </Description>
          <ButtonLink to="mailto: contact@app.com" size="medium">
            Contact Us
          </ButtonLink>
        </HeaderColumn>
      </Row>
    </Section>
  );
};

export default ContactUs;
