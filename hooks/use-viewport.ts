import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

import { windowSize } from '../utils/getWindowSize';

const RESIZE_DELAY = 50;

export default function useViewport(width: number) {
  const [state, setState] = useState<boolean>(true);

  const checkViewportState = () => {
    if (windowSize.width >= width) {
      setState(false);
    } else {
      setState(true);
    }
  };

  const handleResize = debounce(() => {
    checkViewportState();
  }, RESIZE_DELAY);

  useEffect(() => {
    checkViewportState();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return [state];
}
