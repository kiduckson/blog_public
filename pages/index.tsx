import React from "react";
import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Layout } from "../custom/Layout";
import { Text, Button, Toast } from "../components";

const Home: NextPage = () => {
  return (
    <Layout>
      <Text size={5} css={{ fontWeight: "900" }}>
        HOME
      </Text>
    </Layout>
  );
};

export default Home;
