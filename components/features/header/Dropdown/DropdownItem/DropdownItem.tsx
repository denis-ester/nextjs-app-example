import NextLink, { LinkProps } from 'next/link';

import {
  Wrapper,
  Image,
  List,
  ListItem,
  Title,
  CategoryListItem,
} from './styledComponents';

import { Link, List as CategoryList } from '../../../../atoms';

export interface IDropdownItem {
  title: string;
  digital: boolean;
  image?: string;
  link?: LinkProps['as'];
  href?: LinkProps['href'] | undefined;
  list?: {
    label: string;
    alt_label?: string;
    link: string;
    query?: { pathname: string; type: string };
  }[][];
}

interface IDropdownItemProps {
  item: IDropdownItem;
  isOpen?: boolean;
  setIsOpen: (event: boolean) => void;
}

const DropdownItem = ({ item, isOpen, setIsOpen }: IDropdownItemProps) => {
  const {
    title,
    digital,
    image,
    link: imageLink,
    href: imageHref,
    list,
  } = item;

  const imageSrc = `${image?.replace(
    'app-assets.s3.amazonaws.com',
    'app.imgix.net'
  )}?fit=crop&crop=faces&w=241&auto=format,compress`;

  const categoryLists = list?.map((listItem, index) => {
    const categoryItems = listItem.map(
      ({ link, label, alt_label, query }, index) => (
        <CategoryListItem key={index}>
          {query ? (
            <NextLink
              href={{
                pathname: `/b/[category]`,
                query: { [query.type]: label },
              }}
              as={{ pathname: query.pathname, query: { [query.type]: label } }}
              passHref
            >
              <Link to={link} onClick={() => setIsOpen(false)}>
                {alt_label || label}
              </Link>
            </NextLink>
          ) : !digital ? (
            <NextLink href={link} passHref>
              <Link to={link} onClick={() => setIsOpen(false)}>
                {alt_label || label}
              </Link>
            </NextLink>
          ) : (
            <NextLink href="/b/[category]" as={link} passHref>
              <Link to={link} onClick={() => setIsOpen(false)}>
                {alt_label || label}
              </Link>
            </NextLink>
          )}
        </CategoryListItem>
      )
    );

    return (
      <ListItem key={index}>
        <CategoryList>{categoryItems}</CategoryList>
      </ListItem>
    );
  });

  return image || list ? (
    <Wrapper isOpen={isOpen}>
      <Title>{title}</Title>
      {image && imageHref && (
        <NextLink href={imageHref} as={imageLink} passHref>
          <a onClick={() => setIsOpen(false)}>
            <Image src={imageSrc} isStatic={false} />
          </a>
        </NextLink>
      )}

      {list && (
        <List>
          <>{categoryLists}</>
        </List>
      )}
    </Wrapper>
  ) : (
    <></>
  );
};

export default DropdownItem;
