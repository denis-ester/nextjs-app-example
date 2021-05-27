import React from 'react';
import NextLink from 'next/link';

import {
  Link,
  CardImage,
  Image,
  Headline,
  Description,
} from './styledComponents';

interface INewsCardProps {
  image: string;
  title?: string;
  description?: string;
  link: string;
}

const NewsCard = ({ image, title, description, link }: INewsCardProps) => {
  return (
    <NextLink href={link} passHref>
      <Link to={link}>
        <CardImage>
          <Image src={image} isStatic={false} width={480} />
        </CardImage>
        <Headline>{title}</Headline>
        <Description>{description}</Description>
      </Link>
    </NextLink>
  );
};

export default NewsCard;
