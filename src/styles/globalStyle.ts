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
`;
