import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
	font-family: 'Poppins', sans-serif;
	

	.layout {
	height: 100%;
	width: 100%;
  display: flex;
	flex-direction: column;
	align-items: center;
	background:#f4f5f8;
	min-height:100vh;
}

.content {
				flex: 1;
        display: flex;
        flex-direction: column;
				align-items:center;
      }
}
`;

export default GlobalStyle;
