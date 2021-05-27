import { css } from 'styled-components';

import * as viewports from '../../constants/viewports';

const colors = Object.freeze({
  primary: '#811d65',
  secondary: '#1a2149',
  categories: {
    Imaginative: '#F6839C',
    Inspiring: '#2AACDF',
    Emotional: '#A86CDA',
    'Laugh-out-loud': '#F7A600',
    Chilling: '#43D0B0',
    Dark: '#1E53C1',
    Provocative: '#FF5353',
    Surreal: '#1E53C1',
    Suspenseful: '#43D0B0',
    'High-Energy': '#2AACDF',
  },
  gray: '#E6E7F3',
  lightGray: '#F5F6FA',
});

export const colorSelector = (colorKey: string) => (props: any) =>
  props.theme.colors[colorKey];

const type = Object.freeze({
  serif: '"Big Caslon Bla", Georgia, serif',
  sans: 'Raleway, Helvetica, Arial, sans-serif',
});

export const typeSelector = (typeKey: string) => (props: any) =>
  props.theme.type[typeKey];

const typo = Object.freeze({
  // According to Design StyleGuide i.e.:
  //   H1 => DisplayXXL
  //   H2 => DisplayXL
  //   H3 => DisplayL
  //   Body => BodyM
  //   ... etc.
  desktopDisplayXXL: css`
    font-family: 'Big Caslon Bla', Georgia, serif;
    font-size: 64px;
    line-height: 64px;
  `,
  desktopDisplayXL: css`
    font-family: 'Big Caslon Bla', Georgia, serif;
    font-size: 48px;
    line-height: 52px;
  `,
  desktopDisplayL: css`
    font-family: 'Big Caslon Bla', Georgia, serif;
    font-size: 32px;
    line-height: 36px;
  `,
  desktopBodyM: css`
    font-family: Raleway, Helvetica, Arial, sans-serif;
    font-size: 18px;
    line-height: 26px;
  `,
  desktopBodyS: css`
    font-family: Raleway, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 24px;
  `,
  mobileDisplayXXL: css`
    font-size: 40px;
    line-height: 45px;
  `,
  mobileDisplayXL: css`
    font-size: 33px;
    line-height: 36px;
  `,
  mobileDisplayL: css`
    font-size: 28px;
    line-height: 34px;
  `,
  mobileBodyM: css`
    font-size: 16px;
    line-height: 24px;
  `,
});

export const typoSelector = (typoKey: string) => (props: any) =>
  props.theme.typo[typoKey];

const fontWeight = Object.freeze({
  normal: 'normal',
  bold: 'bold',
});

export const fontWeightSelector = (fontWeightKey: string) => (props: any) =>
  props.theme.fontWeight[fontWeightKey];

const breakpoint: any = Object.freeze({
  xs: viewports.mobile.width,
  sm: viewports.tablet.width,
  md: viewports.xtablet.width,
  lg: viewports.desktop.width,
  xlg: viewports.xdesktop.width,
});

const query: any = {
  min: {
    solve: (width: number) => `(min-width: ${width}px)`,
    tablet: `(min-width: ${breakpoint.md}px)`,
  },
  max: {
    solve: (width: number) => `(max-width: ${width - 0.02}px)`,
    tablet: `(max-width: ${breakpoint.lg - 0.02}px)`,
  },
  mobile: `(max-width: ${breakpoint.md - 0.02}px)`,
  tablet: `(min-width: ${breakpoint.md}px) and (max-width: ${
    breakpoint.lg - 0.02
  }px)`,
  desktop: `(min-width: ${breakpoint.lg}px)`,
  dpr2x: `(min-resolution: 2dppx), (min-resolution: 192dpi)`,
  mobileDpr2x: `(max-width: ${
    breakpoint.md - 0.02
  }px) and (min-resolution: 2dppx), (max-width: ${
    breakpoint.md - 0.02
  }px) and (min-resolution: 192dpi)`,
};

Object.keys(breakpoint).forEach((key: string) => {
  query.min[key] = query.min.solve(breakpoint[key]);
  query.max[key] = query.max.solve(breakpoint[key]);
});

Object.freeze(query);
Object.freeze(query.min);
Object.freeze(query.max);

const theme = Object.freeze({
  colors,
  type,
  typo,
  fontWeight,
  breakpoint,
  query,
});

export { colors, type, typo, fontWeight, breakpoint, query };

export default theme;
