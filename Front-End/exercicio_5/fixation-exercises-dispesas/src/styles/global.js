import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    border-box: box-sizing;
  }

  body {
    font-family: 'Poppins', Sans-Serif;
    background-color: #f2f2f2;
}
`;

export default Global;