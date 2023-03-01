// essentials
import type { AppProps } from "next/app";
// external libs
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";

// global style
import { darkTheme, globalStyles } from "../stitches.config";

// store wrapper
import { wrapper } from "../redux/store";
import { MDXProvider } from "@mdx-js/react";

import { Layout } from "@custom/.";

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
