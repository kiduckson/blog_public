import React from "react";
import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Layout } from "../custom/Layout";
import Link from "next/link";
import { Text, Button, Toast } from "../components";

const Home: NextPage = () => {
  return (
    <Layout>
      <Text size={5} css={{ fontWeight: "900" }}>
        HOME
      </Text>
      <Link href="/blog/new">
        <a>Create a new article</a>
      </Link>
    </Layout>
  );
};

export default Home;
