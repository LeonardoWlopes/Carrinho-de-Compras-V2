import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`



html,
body {
  padding: 0;
  margin: 0;
  font-family: Ubuntu, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

}

body {
  background: ${({ theme }) => theme.COLORS.BACKGROUND.main};
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  color: ${({ theme }) => theme.COLORS.TEXT.primary};
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

::-webkit-scrollbar {
    width: 1px;
    height: 1px;
  }

  ::-webkit-scrollbar-thumb {
    background: #b3afb3;
    border-radius: 0px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #b3afb3;
  }

  ::-webkit-scrollbar-track {
    background: #f0f0f0;
    border-radius: 0px;
    box-shadow: inset 0px 0px 0px 0px #f0f0f0;
  }
`;
