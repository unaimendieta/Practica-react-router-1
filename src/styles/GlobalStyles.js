import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@100;200;300;400;500;600;700&family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap');
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
  }
body {
  background: url("./images/background-stars.svg");
  background-color: #070724;
  height: 100vh;
  width: 100vw;
}
`;

export {GlobalStyles};