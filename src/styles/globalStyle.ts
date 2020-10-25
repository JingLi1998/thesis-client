import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --hue: 236;
    --primary: hsl(var(--hue), 39%, 28%);
    --primary-light: hsl(var(--hue), 39%, 33%);
    --primary-dark: hsl(var(--hue), 39%, 25%);
    --text: hsl(0, 0%, 0%);
    --border: hsl(0, 0%, 86%);
    --background: hsl(0, 0%, 99%);

    --body-font: 'Open Sans', sans-serif;
    --heading-font: 'Montserrat', sans-serif;
  }

  html {
    color: var(--text);
    box-sizing: border-box;
    font-size: 100%;
    line-height: 1.5rem;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: var(--body-font);
  }
  
  h1, h2, h3, h4, h5, h6, p, ol, ul {
    font-weight: 400;
    padding: 0;
    margin: 1.5rem 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    letter-spacing: -0.5px;
    font-family: var(--heading-font);
  }

  ol, ul {
    list-style: none;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    border: none;
    cursor: pointer;
    background: none;
  }

  button:focus {
    outline: none;
  }

  sup {
    font-size: 0.5em;
  }

  textarea {
    resize: none;
  }


  /* .wf-loading h1,
  .wf-loading h2,
  .wf-loading h3,
  .wf-loading h4,
  .wf-loading h5,
  .wf-loading h6,
  .wf-loading p,
  .wf-loading ol,
  .wf-loading ul,
  .wf-loading a,
  .wf-loading span {
    visibility: visible;
  }

  .wf-active h1, 
  .wf-active h2, 
  .wf-active h3, 
  .wf-active h4, 
  .wf-active h5, 
  .wf-active h6, 
  .wf-active p,
  .wf-active ol,
  .wf-active ul,
  .wf-active a,
  .wf-active span {
    visibility: visible;
  }

  .wf-inactive h1, 
  .wf-inactive h2, 
  .wf-inactive h3, 
  .wf-inactive h4, 
  .wf-inactive h5, 
  .wf-inactive h6, 
  .wf-inactive p,
  .wf-inactive ol,
  .wf-inactive ul,
  .wf-inactive a,
  .wf-inactive span {
    visibility: visible;
  } */
`;
