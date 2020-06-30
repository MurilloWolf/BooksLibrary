import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
	text-decoration : none;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html,body, #root{
		width: 100%;
		height: 100%;
		font-family:'Roboto', sans-serif;
	}
`;
