import React from "react";
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";

import Link from "next/link";
import { Text, Flex, Button } from "../components";
import Typed from "typed.js";

type GspPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const TypedReactHooks = ({ strings }: { strings: string[] | undefined }) => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef<any>(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef<any>(null);

  React.useEffect(() => {
    const options = {
      strings,
      showCursor: false,
      typeSpeed: 30,
      backSpeed: 10,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, [strings]);

  return (
    <Flex>
      <Flex
        css={{
          background: "linear-gradient(to right, $crimson11, $plum11)",
          padding: "0.5em",
          minHeight: "2em",
          borderRadius: "10px",
        }}
      >
        <Text
          size={4}
          variant="lo_contrast"
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

const Home: NextPage<Props> = (props: GspPageProps) => {
  return (
    <Flex align={"center"} direction={"column"} gap={5}>
      <Text size={{ "@initial": "8", "@bp1": "9" }} css={{ fontWeight: "900" }}>
        {props.contents[props.locale].layoutTexts.headerText}
      </Text>
      <TypedReactHooks strings={props.contents[props.locale].typedTexts} />
      <Link href="/posts/portfolio">
        <Button size={3} ghost variant={"gray"} css={{ placeSelf: "center start" }}>
          <Text size={2} css={{ fontWeight: "600" }}>
            <a>{props.contents[props.locale].layoutTexts.buttonText}</a>
          </Text>
        </Button>
      </Link>
    </Flex>
  );
};

type Props = {
  locale: string;
  locales?: string[];
  contents: {
    [locale: string]: {
      typedTexts: string[];
      layoutTexts: {
        headerText: string;
        buttonText: string;
      };
    };
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale = "en", locales }) => {
  return {
    props: {
      locale,
      locales,
      contents: {
        en: {
          typedTexts: [
            "Hi, My name is Ted Son, a full-stack developer.",
            "I am a problem solver.",
            "Not limited to a specific language.",
            "Fluent in both English and Korean",
          ],
          layoutTexts: {
            headerText: "Hello! 😀",
            buttonText: "Find out more",
          },
        },
        ko: {
          typedTexts: [
            "풀스택 개발자 손기덕입니다.",
            "C to Python, 언어에 국한되지 않습니다.",
            "원어민 수준 영어실력으로 필요한 스택을 쉽게 습득 가능합니다.",
          ],
          layoutTexts: {
            headerText: "안녕하세요! 😀",
            buttonText: "더 자세히 알아보기",
          },
        },
      },
    },
  };
};

export default Home;
