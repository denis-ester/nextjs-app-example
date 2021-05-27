import React, { ReactNode } from 'react';
import Modal from 'react-aria-modal';

import { CloseIcon, Headline } from './styledComponents';

import { Row, Column } from '../../../atoms';

import { track } from '../../../../analytics';

interface IFilterPopupProps {
  isOpen?: boolean;
  closePopup?: () => void;
  tracking?: { area: string };
  children?: ReactNode[] | JSX.Element | string[] | string;
}

const FilterPopup = ({
  children,
  isOpen = false,
  closePopup,
  tracking = { area: 'Filter Modal' },
}: IFilterPopupProps) => {
  return (
    <>
      {isOpen && (
        <Modal
          titleText={'Filter'}
          onExit={closePopup}
          getApplicationNode={() => document.getElementById('__next') as Node}
          initialFocus="#filter-modal"
          underlayStyle={{
            background: '#ffffff',
          }}
          dialogStyle={{
            width: '100%',
            maxWidth: '590px',
            margin: '25px 0 85px',
          }}
          onEnter={() => {
            track.shareModalView(tracking.area);
          }}
        >
          <CloseIcon onClick={closePopup} />

          <Row id="filter-modal">
            <Column>
              <Headline>Filters</Headline>
            </Column>

            {children}
          </Row>
        </Modal>
      )}
    </>
  );
};

export default FilterPopup;
