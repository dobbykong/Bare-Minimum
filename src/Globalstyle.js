import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        color: ${({ isDark }) => (isDark ? 'white' : 'black')};
        background-color: ${({ isDark }) => (isDark ? 'black' : 'white')};
    }
    
    :root {
        --my-yellow: ${({ isDark }) => (isDark ? 'yellowgreen' : 'yellow')};
    }

`;

export default GlobalStyle;
