import type { AppProps } from "next/app";

//styles
import GlobalStyle from "../src/styles/globalStyle";
import { ThemeProvider } from "styled-components";
import "./_app.css";

//themes
import light from "../src/themes/light";

//provider
import { CartProvider } from "../src/contexts/CartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ThemeProvider>
  );
}

export default MyApp;
