// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
var getLocale = (path) => {
  const pathArray = path.split(".");
  return pathArray.length > 2 ? pathArray.slice(-2)[0] : "en";
};
var getSlug = (path) => {
  const pathArray = path.split(".");
  return pathArray[0];
};
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", description: "The title of the post", required: true },
    author: { type: "string", description: "The Author of the post", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string", required: true },
    cover: { type: "string", required: false }
  },
  computedFields: {
    locale: {
      type: "string",
      resolve: (post) => {
        return getLocale(post._raw.sourceFilePath);
      }
    },
    readingTime: {
      type: "json",
      resolve: (post) => readingTime(post.body.raw)
    },
    slug: {
      type: "string",
      resolve: (post) => getSlug(`${post._raw.flattenedPath}`)
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      rehypeAutolinkHeadings,
      rehypeAccessibleEmojis
    ]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-SRCVGBUR.mjs.map
