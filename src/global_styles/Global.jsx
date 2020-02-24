import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center; 
    background: ${({ theme }) => theme.primary.dark};
    color: ${({ theme }) => theme.secondary.dark};
    ${"" /* height: 100vh; */}
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
    font-family: "Rock Salt";
  }
  h2, h3, h4, h5, h6 {
    font-family: "Rock Salt";
  }
  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }
  div {
    text-align: center;
  }
  small {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.secondary.light};
    text-decoration: none;
  }

.navlink {
	text-decoration: none;
	font-size: ${({ theme }) => theme.fontSizes.normal};
	padding: 1rem;
}
`;