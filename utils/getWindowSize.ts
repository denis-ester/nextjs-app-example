export let windowSize = { width: 0, height: 0 };

if (typeof window !== 'undefined') {
  const getWindowSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  windowSize = getWindowSize();

  window.addEventListener('resize', () => {
    windowSize = getWindowSize();
  });
}
