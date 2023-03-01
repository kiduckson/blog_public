import { GetStaticProps, GetStaticPaths } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts, type Post } from "contentlayer/generated";
import { PostLayout } from "@custom/.";
import { Text } from "@components/.";
import { styled, css } from "../../stitches.config";
import { table } from "console";

type PostProps = {
  post: Post;
};

const Code = styled("code", {
  color: "$lo_contrast",
  fontSize: "85%",
  background: "$crimson6",
  padding: "0.2em 0.4em",
  borderRadius: "$1",
  whiteSpace: "nowrap",
});
const A = styled("a", {
  color: "$crimson11",
  fontWeight: "700",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});
const BlockQuote = styled("blockquote", {
  borderLeftWidth: "3px",
  borderLeftColor: "#d3d3d3",
  borderLeftStyle: "solid",
  backgroundColor: "$canvas",
  fontSize: "italic",
  p: "$1 $4",
  m: "$4 $1",
});

const tableStyle = css({
  /* GitHub-style table styling */
  borderCollapse: "collapse",
  marginBottom: "1.5em",
  "& th": {
    padding: "$1",
    border: "1px solid",
    backgroundColor: "$slate3",
    fontWeight: "bold",
    textAlign: "left",
  },
  "& td": {
    padding: "$1",
    border: "1px solid",
    backgroundColor: "$canvas",
  },
  "tr:nth-of-type(even)": {
    backgroundColor: "$slate2",
  },
});

const Table = styled("table", tableStyle);

const components = {
  code: (props: any) => <Code {...props}>{props.children}</Code>,
  a: (props: any) => <A {...props}>{props.children}</A>,
  blockquote: (props: any) => <BlockQuote {...props}>{props.children}</BlockQuote>,
  table: (props: any) => <Table {...props}>{props.children}</Table>,
};

const Post = ({ post }: PostProps) => {
  const Component = useMDXComponent(post.body.code);
  return (
    <>
      <PostLayout
        title={post.title}
        author={post.author}
        publishedAt={post.publishedAt}
        readingTime={post.readingTime.text}
      />
      <Component components={components} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async (param) => {
  const paths = allPosts.map((post: Post) => {
    return { params: { slug: post.slug }, locale: post.locale };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  let post;
  if (params) {
    post = allPosts.find((post: Post) => post._raw.flattenedPath === `${params.slug}.${locale}`);
  }
  return { props: { post } };
};

export default Post;
