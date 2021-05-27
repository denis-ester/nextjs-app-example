import React from 'react';
import Imgix from 'react-imgix';

interface ImageProps {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  title?: string;
  className?: string;
  isStatic?: boolean;
}

const Image = ({
  src,
  alt,
  title,
  className,
  isStatic = true,
  width,
  height,
  ...rest
}: ImageProps) => {
  return (
    <>
      {isStatic ? (
        <img src={src} alt={alt} title={title} className={className} />
      ) : (
        <Imgix
          src={src}
          width={width}
          height={height}
          className={className}
          htmlAttributes={{ alt: alt, title: title, src }}
          {...rest}
        />
      )}
    </>
  );
};

export default Image;
