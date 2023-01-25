// essentials
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// external lib
import { PaperPlaneIcon } from "@radix-ui/react-icons";

// stitch styles
import { styled } from "../stitches.config";

// component
import { Box, Button, Container, Flex, Grid, Section, DropdownMenu } from "../components";

// custom
import { ToggleTheme } from "./ToggleTheme";
import { AccountDropDown } from "./AccountDropDown";

// redux

// Navbar style
const Nav = styled(Grid, {
  transition: "all 0.2s ease-in",
  gridTemplateColumns: "auto 1fr",
  position: "sticky",
  top: "0",
  backgroundColor: "$canvas",
  py: "$4",
  px: "$2",
  br: "$4",
});

// navbar element
export const Navbar = () => {
  const router = useRouter();
  return (
    <Nav align={"center"} justify={"center"}>
      {router.pathname === "/" ? (
        <Link href="/">
          <a>
            <Button
              ghost
              css={{
                placeSelf: "center start",
                background: "linear-gradient(to right, $teal7, $green7)",
              }}
            >
              <PaperPlaneIcon />
            </Button>
          </a>
        </Link>
      ) : (
        <Link href="/">
          <a>
            <Button ghost css={{ placeSelf: "center start" }}>
              <PaperPlaneIcon />
            </Button>
          </a>
        </Link>
      )}
      <Flex css={{ placeSelf: "center end" }}>
        <ToggleTheme />
        <AccountDropDown />
      </Flex>
    </Nav>
  );
};
