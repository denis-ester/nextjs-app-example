// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      categories: {
        [category: string]: string;
      };
      gray: string;
      lightGray: string;
    };
    type: {
      serif: string;
      sans: string;
    };
    pageTheme?: {
      [key: string]: any;
    };
    typo: {
      desktopDisplayXXL: Array;
      desktopDisplayXL: Array;
      desktopDisplayL: Array;
      desktopBodyM: Array;
      desktopBodyS: Array;
      mobileDisplayXXL: Array;
      mobileDisplayXL: Array;
      mobileDisplayL: Array;
      mobileBodyM: Array;
    };
    fontWeight: {
      normal: string;
      bold: string;
    };
    query: {
      min: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xlg: number;
      };
      max: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xlg: number;
      };
      mobile: string;
      tablet: string;
      desktop: string;
      dpr2x: string;
      mobileDpr2x: string;
    };
  }
}
