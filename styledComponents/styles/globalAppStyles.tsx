import { createGlobalStyle } from 'styled-components';

const GlobalAppStyles = createGlobalStyle`
  body {
    font-family: ${props => props.theme.type.sans};
    font-display: swap;
    color: ${props => props.theme.colors.secondary};
    overflow-x: hidden;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    /*reset for mobile browsers */
    font-weight: normal;
    text-shadow: 0 0 0;
  }

  /* modal dialog can't be styled thru styled-components */
  @media screen and (min-width: 768px) {
    #react-aria-modal-dialog {
      margin: 84px 0;
    }
  }

  .fadein-enter {
    opacity: 0;
  }

  .fadein-enter-active {
    opacity: 1;
    transition: opacity 1000ms;
  }

  .fadein-exit {
    opacity: 1;
  }
  
  .fadein-exit-active {
    opacity: 0;
    transition: opacity 1000ms;
  }
`;

export { GlobalAppStyles };
