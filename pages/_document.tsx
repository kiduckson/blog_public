import Document, { Head, Html, Main, NextScript, DocumentContext } from "next/document";
import { reset, getCssText } from "../stitches.config";

const getCssAndReset = () => {
  const css = getCssText();
  reset();
  return css;
};

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <body>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssAndReset() }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
