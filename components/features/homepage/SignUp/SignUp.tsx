import React from 'react';
import { useAuth0 } from '../../../../react-auth0-wrapper';

import { Section, Headline, Description, Button } from './styledComponents';

import { Row, Column } from '../../../atoms';

const SignUp = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Section>
      <Row>
        <Column sm="6" col="12" className="offset-sm-3">
          <Headline>
            Join <span>App</span> For Free
          </Headline>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates mollitia est ipsa, aspernatur amet, tempora, saepe cum ex voluptas ad repellendus incidunt ipsam tenetur beatae dolore nemo dolor. Dolore, repellendus?
          </Description>
          <Button
            title="Sign Up"
            onClick={() => loginWithRedirect({ initialScreen: 'signUp' })}
          />
        </Column>
      </Row>
    </Section>
  );
};

export default SignUp;
