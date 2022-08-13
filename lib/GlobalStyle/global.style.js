import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
    }

    body{
        background-color: ${({ theme }) =>
          theme.PrimaryColor && theme.PrimaryColor};
        transition: all 1.5s linear;
    }
`;
