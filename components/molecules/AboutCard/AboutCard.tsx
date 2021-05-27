import React from 'react';

import {
  Card,
  CardImageWrapper,
  CardImage,
  CardTitle,
} from './styledComponents';

interface AboutCardProps {
  imageSrc: string;
  imageAlt?: string;
  imageTitle?: string;
  title?: string;
  className?: string[] | string;
}

const AboutCard = ({
  imageSrc,
  imageAlt,
  imageTitle,
  title,
  className = '',
}: AboutCardProps) => {
  return (
    <Card className={className}>
      <CardImageWrapper>
        <CardImage src={imageSrc} alt={imageAlt} title={imageTitle} />
      </CardImageWrapper>
      <CardTitle>{title}</CardTitle>
    </Card>
  );
};

export default AboutCard;
