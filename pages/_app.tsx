// essentials
import type { AppProps } from "next/app";
// external libs
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";

// global style
import { darkTheme, globalStyles } from "../stitches.config";

// store wrapper
import { wrapper } from "../redux/store";
import { Providers } from "../components/Providers";

// providers

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        dark: darkTheme.className,
        light: "light",
      }}
    >
      <NextNProgress />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
