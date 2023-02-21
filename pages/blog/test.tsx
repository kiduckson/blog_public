import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

export default function MyPage({ pageData }: any) {
  return (
    <div>
      <h1>{pageData.title}</h1>
      <MDXRemote {...pageData.mdxSource} />
    </div>
  );
}

async function getPageData(slug: any) {
  const fullPath = `/pages/blog/${slug}_wip.mdx`;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content);

  return {
    slug,
    ...data,
    mdxSource,
  };
}
export async function getStaticProps() {
  const pageData = await getPageData("test");
  return {
    props: {
      pageData,
    },
  };
}
