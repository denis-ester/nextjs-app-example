import React from 'react';
import { NextSeo } from 'next-seo';

import {
  Banner,
  TextDescription,
  AboutList,
  ContactUs,
} from '../components/features/submission';

const title = 'Submissions | APP';

const Submissions = () => {
  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          title: title,
          url: 'https://app.com/submissions',
        }}
        canonical="https://app.com/submissions"
      />
      <Banner />
      <TextDescription />
      <AboutList />
      <ContactUs />
    </>
  );
};

export default Submissions;
