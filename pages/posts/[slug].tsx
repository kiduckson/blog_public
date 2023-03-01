import { GetStaticProps, GetStaticPaths } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts, type Post } from "contentlayer/generated";
import { Layout, PostLayout } from "@custom/.";

type PostProps = {
  post: Post;
};

const Post = ({ post }: PostProps) => {
  const Component = useMDXComponent(post.body.code);
  return (
    <>
      {/* <PostLayout post={post} /> */}
      <Component />
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
