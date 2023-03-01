import { styled } from "../stitches.config";
import { Flex, Avatar, Text } from "@components/.";

type PostProps = {
  title: string;
  author: string;
  publishedAt: string;
  readingTime: string;
};

const Nav = styled("div", {
  display: "flex",
  transition: "all 0.2s ease-in",
  gridTemplateColumns: "auto 1fr",
  alignItems: "center",
  justifyContent: "space-between",
  mb: "$4",
  br: "$4",
  "& * + *": {
    ml: "$2",
  },
});

export const PostLayout = ({ title, author, publishedAt, readingTime }: PostProps) => {
  return (
    <Flex direction="column" gap={5}>
      <Text
        size={{ "@initial": "8", "@bp1": "9" }}
        css={{ fontWeight: 800, bp1: { fontSize: "$1" } }}
      >
        {title}
      </Text>
      <Nav>
        <Flex align="center">
          <Avatar src="/avatar.jpeg" alt="Picture of the author" width="25" height="25" />
          <Text variant="gray" size="2">
            {author}
          </Text>
        </Flex>
        <Flex align="center">
          <Text variant="gray" size="2">
            {publishedAt}
          </Text>
          <Text variant="crimson" size="2">
            {readingTime}
          </Text>
        </Flex>
      </Nav>
    </Flex>
  );
};
