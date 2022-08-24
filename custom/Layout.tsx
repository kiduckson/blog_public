import React from "react";
import { Container } from "../components";
import { Navbar } from "./Navbar";

interface props {
  children: React.ReactNode;
}

export function Layout({ children }: props) {
  const [mount, setMount] = React.useState<boolean>(false);

  return (
    <Container size="1">
      <Navbar />
      <Container isMargin>{children}</Container>
    </Container>
  );
}
