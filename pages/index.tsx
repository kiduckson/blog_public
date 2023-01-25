import React from "react";
import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Layout } from "../custom/Layout";
import Link from "next/link";
import { Text, Flex, Button, Box } from "../components";
import Typed from "typed.js";
const TypedReactHooksDemo = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef<any>(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef<any>(null);

  React.useEffect(() => {
    const options = {
      strings: [
        "풀스택 개발자 손기덕입니다",
        "C to Python, 언어에 국한되지 않습니다",
        "원어민 수준 영어실력으로 필요한 스택을 쉽게 습득 가능합니다",
      ],
      showCursor: false,
      typeSpeed: 30,
      backSpeed: 15,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <Flex>
      <Flex
        css={{
          background: "linear-gradient(to right, $teal7, $green7)",
          padding: "0.5em",
          minHeight: "2em",
          borderRadius: "10px",
        }}
      >
        <Text
          size={4}
          css={{
            lineHeight: "normal",
            fontWeight: "bold",
            whiteSpace: "break-space",
          }}
          ref={el}
        ></Text>
      </Flex>
    </Flex>
  );
};

const Home: NextPage = () => {
  return (
    <Layout>
      <Flex direction={"column"} gap={5}>
        <Text size={7} css={{ fontWeight: "700" }}>
          안녕하세요😀
        </Text>
        <TypedReactHooksDemo />
        <Link href="/blog/my">
          <Button size={3} ghost variant={"green"} css={{ placeSelf: "center start" }}>
            <Text size={2} css={{ fontWeight: "600" }}>
              <a>더 자세히 알아보기</a>
            </Text>
          </Button>
        </Link>
        {/* <Link href="/blog/test">
          <a>포트폴리오</a>
        </Link> */}
      </Flex>
    </Layout>
  );
};

export default Home;
