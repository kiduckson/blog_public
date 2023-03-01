const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
module.exports = withContentlayer({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "en",
  },
});
