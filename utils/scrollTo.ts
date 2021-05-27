export const scrollTo = (target: string) => {
  const elementTarget = document.getElementById(target);

  if (elementTarget !== null) {
    window.scrollTo({
      top: elementTarget.offsetTop,
      behavior: 'smooth',
    });

    return;
  }
};
