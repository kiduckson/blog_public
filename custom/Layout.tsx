import React from "react";
import { Container } from "../components";
import { Navbar } from "./Navbar";
import { useAuth } from "../hooks/authHook";

interface props {
  children: React.ReactNode;
}

export function Layout({ children }: props) {
  // set session store
  useAuth();
  return (
    <Container size="1">
      <Navbar />
      <Container isMargin>{children}</Container>
    </Container>
  );
}
