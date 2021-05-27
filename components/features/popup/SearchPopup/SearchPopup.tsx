import React, { useState, useEffect, ChangeEvent, useRef } from 'react';
import Modal from 'react-aria-modal';
import matchSorter, { rankings } from 'match-sorter';

import {
  Section,
  Container,
  Logo,
  SearchField,
  SearchInput,
  SearchIcon,
  SearchCloseIcon,
  TagFilters,
} from './styledComponents';
import { PopupCloseWrapper, CloseIcon } from '../StyledPopup';

import { Row, Column } from '../../../atoms';

import { exploreLondonTheatreData } from '../../../../pages/index';
import { FORMATS_TAGS, GENRE_GROUP_TAGS } from '../../../../constants';

import SearchResult from './SearchResult';

import { track } from '../../../../analytics';
import { Production } from '../../../../classes/Production';

interface ISearchPopupProps {
  isOpen?: boolean;
  closePopup?: () => void;
  items?: Production[];
  tracking?: { area: string; production?: Production };
}

const SearchPopup = ({
  isOpen,
  closePopup,
  items,
  tracking = { area: 'Share Modal' },
}: ISearchPopupProps) => {
  const [searchedProductions, setSearchedProductions] = useState<Production[]>(
    []
  );
  const [hiddenProductions, setHiddenProductions] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>('');

  const searchInputRef = useRef<HTMLInputElement>();

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const getItems = (value: string) => {
    const mainSortByName =
      items &&
      matchSorter(items, value, {
        keys: ['work_name', 'venue.name', 'platform.name'],
        threshold: rankings.WORD_STARTS_WITH,
      });

    const sortByPopularity = mainSortByName
      ? mainSortByName.sort(
          (item1: Production, item2: Production) =>
            item1.popularity - item2.popularity
        )
      : [];

    return sortByPopularity.slice(0, 9);
  };

  useEffect(() => {
    if (inputValue === '') {
      setHiddenProductions(true);
    } else {
      setHiddenProductions(false);
    }

    setSearchedProductions(getItems(inputValue));
  }, [inputValue]);

  // set focus on search input
  useEffect(() => {
    const searchInputRefCurrent = searchInputRef.current;

    searchInputRefCurrent?.focus();
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Modal
          titleText={'Search'}
          onExit={closePopup}
          getApplicationNode={() => document.getElementById('__next') as Node}
          initialFocus="#modal"
          underlayStyle={{
            background: 'rgb(26, 33, 73, 0.7)',
          }}
          dialogStyle={{ width: '100%', maxWidth: '590px' }}
          onEnter={() => {
            track.shareModalView(tracking.area, tracking.production);
          }}
        >
          <Section id="modal">
            <Container className="container">
              <Logo
                src={require('../../../../public/logo.svg?original')}
                alt="logo"
              />

              <PopupCloseWrapper onClick={closePopup} id="close">
                <CloseIcon />
              </PopupCloseWrapper>

              <Row>
                <Column>
                  <SearchField>
                    <SearchInput
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleSearchInputChange(e)
                      }
                      name="search"
                      type="text"
                      placeholder="Search..."
                      value={inputValue}
                      refName={searchInputRef}
                    >
                      <SearchIcon />
                      {!hiddenProductions && (
                        <SearchCloseIcon
                          onClick={() => {
                            setInputValue('');
                          }}
                        />
                      )}
                    </SearchInput>
                  </SearchField>
                </Column>
              </Row>

              {hiddenProductions && (
                <>
                  <TagFilters
                    tags={FORMATS_TAGS}
                    title="Explore Theatre Anywhere"
                    onClick={closePopup}
                  />

                  <TagFilters
                    tags={GENRE_GROUP_TAGS}
                    title="Explore by Genre"
                    onClick={closePopup}
                  />

                  <TagFilters
                    tags={exploreLondonTheatreData.tags}
                    title={exploreLondonTheatreData.title}
                    onClick={closePopup}
                  />
                </>
              )}

              {!hiddenProductions && (
                <Row>
                  <Column>
                    {searchedProductions.map((item, index) => (
                      <SearchResult
                        production={item}
                        key={index}
                        onClick={closePopup}
                      />
                    ))}

                    {!searchedProductions.length && (
                      <p>No search results found</p>
                    )}
                  </Column>
                </Row>
              )}
            </Container>
          </Section>
        </Modal>
      )}
    </>
  );
};

export default SearchPopup;
