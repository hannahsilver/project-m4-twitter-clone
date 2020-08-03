import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    font-family: 'sans-serif';
  }

  body {
    margin-left: 160px;
  }

  p {
    margin: 20px 0;
  }

  li {
    padding-left: 30px;
    height: 100%;
    display: flex;
    align-items: center;
  }

  button {
    border: none;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    &:hover {
    }
  }`;
