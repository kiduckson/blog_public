import React from "react";
import { Container } from "../components";
import { type Post } from "contentlayer/generated";

interface props {
  post: Post;
}

export function PostLayout({ post }: props) {
  return <Container isMargin>test</Container>;
}
