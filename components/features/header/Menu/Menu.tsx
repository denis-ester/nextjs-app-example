import { useState, useEffect } from 'react';
import NextLink from 'next/link';
import { format as urlFormat } from 'url';

import {
  Wrapper,
  List,
  ListItem,
  MenuLink,
  MobileWrapper,
  MobileHeader,
  Logo,
  CloseIcon,
  MobileList,
  MobileListItem,
  Button,
  Socials,
  IconsList,
  IconsListItem,
} from './styledComponents';

import { TextPrimary } from '../../../Highlights';

import MenuDropdownListItem from './MenuDropdownListItem';
import ProfileMenu from '../ProfileMenu';
import ShareModal from '../../../ShareModal';

import { Production } from '../../../../classes/Production';

import useViewport from '../../../../hooks/use-viewport';
import { xtablet } from '../../../../constants/viewports';
import { Featured } from '../../../../interfaces';

import { IDropdownItem } from '../Dropdown/DropdownItem/DropdownItem';

const digitalDropdownData: IDropdownItem[] = [
  {
    title: 'Theatre Streaming & Video',
    digital: true,
    list: [
      [
        {
          label: 'Musical',
          alt_label: 'Musicals',
          link: urlFormat({
            pathname: '/b/theatre-streaming-video',
            query: { genre: 'Musical' },
          }),
          query: { pathname: '/b/theatre-streaming-video', type: 'genre' },
        },
        {
          label: 'Play',
          alt_label: 'Plays',
          link: urlFormat({
            pathname: '/b/theatre-streaming-video',
            query: { genre: 'Play' },
          }),
          query: { pathname: '/b/theatre-streaming-video', type: 'genre' },
        },
        {
          label: 'All Genres',
          link: urlFormat('/b/theatre-streaming-video'),
        },
      ],
      [
        {
          label: 'livestream',
          alt_label: 'Livestreams',
          link: urlFormat({
            pathname: '/b/theatre-streaming-video',
            query: { format: 'livestream' },
          }),
          query: { pathname: '/b/theatre-streaming-video', type: 'format' },
        },
        {
          label: 'artist talk',
          alt_label: 'Artist Talks',
          link: urlFormat({
            pathname: '/b/theatre-streaming-video',
            query: { format: 'artist talk' },
          }),
          query: { pathname: '/b/theatre-streaming-video', type: 'format' },
        },
        {
          label: 'film',
          alt_label: 'Films',
          link: urlFormat({
            pathname: '/b/theatre-streaming-video',
            query: { format: 'film' },
          }),
          query: { pathname: '/b/theatre-streaming-video', type: 'format' },
        },
      ],
    ],
  },
  {
    title: 'More digital theatre',
    digital: true,
    list: [
      [
        {
          label: 'Theatre Audio & Music',
          link: urlFormat('/b/theatre-audio-music'),
        },
        {
          label: 'Theatre & Arts eBooks',
          link: urlFormat('/b/theatre-ebooks-scripts-songbooks'),
        },
        {
          label: 'Theatre Learning Resources',
          link: urlFormat('/b/theatre-learning-resources'),
        },
      ],
    ],
  },
];

const exploreDropdownData: IDropdownItem[] = [
  {
    title: 'Genres',
    digital: false,
    list: [
      [
        {
          label: 'Musical',
          alt_label: 'Musicals',
          link: urlFormat({
            pathname: '/explore',
            query: { genre: 'Musical' },
          }),
        },
        {
          label: 'Play',
          alt_label: 'Plays',
          link: urlFormat({
            pathname: '/explore',
            query: { genre: 'Play' },
          }),
        },
        {
          label: 'All Genres',
          link: urlFormat('/explore'),
        },
      ],
    ],
  },
  {
    title: 'Collections',
    digital: false,
    list: [
      [
        {
          label: 'West End',
          link: urlFormat({
            pathname: '/explore',
            query: { collection: 'West End' },
          }),
        },
        {
          label: 'Off West End',
          link: urlFormat({
            pathname: '/explore',
            query: { collection: 'Off West End' },
          }),
        },
        {
          label: 'Outdoors',
          link: urlFormat({
            pathname: '/explore',
            query: { collection: 'Outdoor' },
          }),
        },
      ],
    ],
  },
];

const SocialImage = ({ icon }: { icon: string }) => {
  return (
    <img
      src={require(`../../../../public/${icon}.svg`)}
      alt={`${icon.charAt(0).toUpperCase() + icon.slice(1)} icon`}
    />
  );
};

interface IMenuProps {
  productions: Production[];
  featuredItems: Featured[];
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

const Menu = ({ productions, featuredItems, isOpen, setOpen }: IMenuProps) => {
  const [digitalDropdowns, setDigitalDropdowns] = useState<IDropdownItem[]>(
    digitalDropdownData
  );
  const [exploreDropdowns, setExploreDropdowns] = useState<IDropdownItem[]>(
    exploreDropdownData
  );
  const [isShareModuleOpen, setIsShareModuleOpen] = useState(false);
  const [isTablet] = useViewport(xtablet.width);

  const handleClick = () => {
    setOpen(false);
  };

  // set overflow styles on mobile menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
  }, [isOpen]);

  // add featured & popular items to dropdown data
  useEffect(() => {
    featuredItems.forEach(({ name, production }) => {
      if (name === 'Streaming') {
        const featured = productions.find(item => item.id === production);

        const digitalItems = productions.filter(({ digital }) => digital);

        const popular: Production = digitalItems.sort(
          (a, b) => a.popularity - b.popularity
        )[0];

        const newest: Production = digitalItems.sort((a, b) => b.id - a.id)[0];

        if (featured) {
          const featuredProduction = new Production(featured);

          const featuredItem = {
            title: 'Featured',
            digital: true,
            image: featured.work_image,
            link: featuredProduction.link(),
            href: featuredProduction.href(),
          };

          if (popular) {
            const popularProduction = new Production(popular);

            const popularItem = {
              title: 'Popular',
              digital: true,
              image: popular.work_image,
              link: popularProduction.link(),
              href: popularProduction.href(),
            };

            setDigitalDropdowns([
              featuredItem,
              ...digitalDropdowns,
              popularItem,
            ]);
          }
        } else if (popular && newest) {
          const popularProduction = new Production(popular);
          const newestProduction = new Production(newest);

          const popularItem = {
            title: 'Popular',
            digital: true,
            image: popular.work_image,
            link: popularProduction.link(),
            href: popularProduction.href(),
          };

          const newestItem = {
            title: 'Featured',
            digital: true,
            image: newest.work_image,
            link: newestProduction.link(),
            href: newestProduction.href(),
          };

          setDigitalDropdowns([newestItem, ...digitalDropdowns, popularItem]);
        }
      }

      if (name === 'London') {
        const featured = productions.find(item => item.id === production);

        const exploreItems = productions.filter(({ digital }) => !digital);

        const popular: Production = exploreItems.sort(
          (a, b) => a.popularity - b.popularity
        )[0];

        const newest: Production = exploreItems.sort((a, b) => b.id - a.id)[0];

        if (featured) {
          const featuredProduction = new Production(featured);

          const featuredItem = {
            title: 'Featured',
            digital: false,
            image: featured.work_image,
            link: featuredProduction.link(),
            href: featuredProduction.href(),
          };

          if (popular) {
            const popularProduction = new Production(popular);

            const popularItem = {
              title: 'Popular',
              digital: false,
              image: popular.work_image,
              link: popularProduction.link(),
              href: popularProduction.href(),
            };

            setExploreDropdowns([
              featuredItem,
              ...exploreDropdowns,
              popularItem,
            ]);
          }
        } else if (popular && newest) {
          const popularProduction = new Production(popular);

          const popularItem = {
            title: 'Popular',
            digital: false,
            image: popular.work_image,
            link: popularProduction.link(),
            href: popularProduction.href(),
          };

          const newestProduction = new Production(newest);

          const newestItem = {
            title: 'Featured',
            digital: false,
            image: newest.work_image,
            link: newestProduction.link(),
            href: newestProduction.href(),
          };

          setExploreDropdowns([newestItem, ...exploreDropdowns, popularItem]);
        }
      }
    });
  }, [productions, featuredItems]);

  return !isTablet ? (
    <Wrapper>
      <List>
        <MenuDropdownListItem title="Digital" dropdownList={digitalDropdowns} />

        <MenuDropdownListItem
          title="London Shows"
          dropdownList={exploreDropdowns}
        />

        <ListItem>
          <NextLink href="/news" passHref>
            <MenuLink to="/news">News</MenuLink>
          </NextLink>
        </ListItem>

        <ListItem>
          <NextLink href="/about" passHref>
            <MenuLink to="/about">About</MenuLink>
          </NextLink>
        </ListItem>
      </List>
    </Wrapper>
  ) : (
    <>
      <MobileWrapper isOpen={isOpen}>
        <MobileHeader>
          <CloseIcon onClick={handleClick} />

          <NextLink href="/">
            <a onClick={handleClick}>
              <Logo
                src={require('../../../../public/logo.svg?original')}
                alt="logo"
              />
            </a>
          </NextLink>

          <ProfileMenu onClick={handleClick} />
        </MobileHeader>

        <MobileList>
          <MobileListItem>
            <NextLink
              href="/b/[category]"
              as="/b/theatre-streaming-video"
              passHref
            >
              <MenuLink to="/b/theatre-streaming-video" onClick={handleClick}>
                Streaming & Video
              </MenuLink>
            </NextLink>
          </MobileListItem>
          <MobileListItem>
            <NextLink href="/b/[category]" as="/b/theatre-audio-music" passHref>
              <MenuLink to="/b/theatre-audio-music" onClick={handleClick}>
                Theatre Audio & Music
              </MenuLink>
            </NextLink>
          </MobileListItem>
          <MobileListItem>
            <NextLink
              href="/b/[category]"
              as="/b/theatre-ebooks-scripts-songbooks"
              passHref
            >
              <MenuLink
                to="/b/theatre-ebooks-scripts-songbooks"
                onClick={handleClick}
              >
                Theatre & Arts eBooks
              </MenuLink>
            </NextLink>
          </MobileListItem>
          <MobileListItem>
            <NextLink
              href="/b/[category]"
              as="/b/theatre-learning-resources"
              passHref
            >
              <MenuLink
                to="/b/theatre-learning-resources"
                onClick={handleClick}
              >
                Theatre Learning Resources
              </MenuLink>
            </NextLink>
          </MobileListItem>
          <MobileListItem>
            <NextLink href="/explore" passHref>
              <MenuLink to="/explore" onClick={handleClick}>
                London Shows
              </MenuLink>
            </NextLink>
          </MobileListItem>
        </MobileList>

        <MobileList>
          <MobileListItem>
            <NextLink href="/about" passHref>
              <MenuLink to="/about" onClick={handleClick}>
                About
              </MenuLink>
            </NextLink>
          </MobileListItem>
          <MobileListItem>
            <NextLink href="/news" passHref>
              <MenuLink to="/news" onClick={handleClick}>
                News
              </MenuLink>
            </NextLink>
          </MobileListItem>
          <MobileListItem>
            <NextLink href="/submissions" passHref>
              <MenuLink to="/submissions" onClick={handleClick}>
                Add Shows/Resources to app
              </MenuLink>
            </NextLink>
          </MobileListItem>
          <MobileListItem>
            <Button
              title="Invite Friends"
              onClick={() => {
                setIsShareModuleOpen(true);
              }}
              size="auto"
              variant="inline"
            />
          </MobileListItem>
        </MobileList>

        <Socials>
          <IconsList>
            <IconsListItem>
              <a href="https://www.instagram.com/app_/">
                <SocialImage icon="instagram-dark" />
              </a>
            </IconsListItem>
            <IconsListItem>
              <a href="https://twitter.com/app_">
                <SocialImage icon="twitter-dark-circle" />
              </a>
            </IconsListItem>
            <IconsListItem>
              <a href="https://www.facebook.com/app/">
                <SocialImage icon="facebook-dark-circle" />
              </a>
            </IconsListItem>
            <IconsListItem>
              <a href="https://www.linkedin.com/company/app/">
                <SocialImage icon="linkedin-dark" />
              </a>
            </IconsListItem>
            <IconsListItem>
              <a href="mailto: feedback@app.com">
                <SocialImage icon="mail-dark" />
              </a>
            </IconsListItem>
          </IconsList>
        </Socials>
      </MobileWrapper>

      <ShareModal
        isOpen={isShareModuleOpen}
        closeModal={() => {
          setIsShareModuleOpen(false);
        }}
        message="Check out app, the new home for theatre. | https://app.com"
        tweet="Check out app, the new home for theatre. | https://app.com"
        url="app.com"
        modalTitle="Invite Friends"
        tracking={{
          area: 'Invite Friends',
        }}
      >
        Share <TextPrimary color="Provocative">app</TextPrimary>
        <br />
        with a Friend!
      </ShareModal>
    </>
  );
};

export default Menu;
