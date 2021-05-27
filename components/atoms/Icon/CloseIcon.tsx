import React from 'react';

import createIcon from './createIcon';

const CloseIcon = createIcon({
  viewBox: '0 0 22 22',
  path: (
    <>
      <rect
        x="0.393433"
        y="20.1924"
        width="28"
        height="2"
        transform="rotate(-45 0.393433 20.1924)"
      />
      <rect
        x="1.80762"
        y="0.393433"
        width="28"
        height="2"
        transform="rotate(45 1.80762 0.393433)"
      />
    </>
  ),
});

export default CloseIcon;
