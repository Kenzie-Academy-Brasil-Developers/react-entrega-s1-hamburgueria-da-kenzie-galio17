import { createGlobalStyle } from "styled-components";

const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

const Global = createGlobalStyle`
  :root {
    /* Palettes */
    /* Main Palette */
    --color-primary-100: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;

    /* Grey Scale Palette */
    --grey-100: ${darkMode ? "#F5F5F5" : "#333333"};
    --grey-50: ${darkMode ? "#E0E0E0" : "#828282"};
    --grey-30: #BDBDBD;
    --grey-20: ${darkMode ? "#828282" : "#E0E0E0"};
    --grey-0: ${darkMode ? "#333333" : "#F5F5F5"};

    /* Feedback Palette */
    --negative: #E60000;
    --warning: #FFCD07;
    --sucess: #168821;
    --information: #155BCB;

    /* Others Palette */
    --white: #FFFFFF;
    --black: #000000;

    /* Fonts */
    --font-inter: 'Inter', sans-serif;
    --heading-1: bold 1.625rem var(--font-inter);
    --heading-2: bold 1.375rem var(--font-inter);
    --heading-3: bold 1.125rem var(--font-inter);
    --heading-3: bold 1.125rem var(--font-inter);
    --heading-4: bold 0.875rem var(--font-inter);
    --headline: 1rem var(--font-inter);
    --caption: 0.75rem var(--font-inter);
    font-family: var(--font-inter);
  }

  * {
    background-color: transparent;
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
    font: inherit;
  }

  ul {
    list-style: none;
  }

  body {
    background-color: ${darkMode ? "var(--black)" : "var(--white)"};
    color: ${darkMode ? "var(--white)" : "var(--black)"};
    font-size: 0.875rem;
  }

  h2, h3 {
    font: var(--heading-3);
  }
  
  button {
    font-weight: 600;
    cursor: pointer;
  }

  span {
    color: var(--grey-50);
    font: var(--caption);
  }

  strong {
    color: var(--color-primary-100);
    font-weight: 600;
  }

  div, section, main, aside {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  figure {
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  :focus {
    outline: 0;
  }

  ::-webkit-scrollbar {
    background-color: var(--grey-0);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--grey-100);
    border-radius: 10rem;
    border: 5px solid var(--grey-0);
  }
`;
export default Global;
