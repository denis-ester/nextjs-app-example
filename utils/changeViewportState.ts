import { windowSize } from './getWindowSize';

export const changeViewportState = (setState: Function, width: number) => {
  if (windowSize.width > width) {
    setState(false);
  } else {
    setState(true);
  }
};
