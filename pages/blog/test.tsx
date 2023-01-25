import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { supabase } from "../../lib/supabase";

interface Props {
  source: MDXRemoteSerializeResult;
}

import { Layout } from "../../custom/Layout";

const components = { Layout };

export default function TestPage({ source }: Props) {
  return (
    <Layout>
      <MDXRemote {...source} components={components} />
    </Layout>
  );
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const blog = await supabase.from("");
  const source = "Some **mdx** text, with a component";
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}
