// essentials
import Link from "next/link";

// external lib
import { PaperPlaneIcon } from "@radix-ui/react-icons";

// stitch styles
import { styled } from "../stitches.config";

// component
import { Box, Button, Container, Flex, Grid, Section, DropdownMenu } from "../components";

// custom
import { ToggleTheme } from "./ToggleTheme";
import { AccountDropDown } from "./AccountDropDown";
import { AccountToast } from "./AccountToast";

// redux
import { useAppSelector } from "../redux/hooks";

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
export const Navbar = () => {
  const toast = useAppSelector((state) => state.toast);
  return (
    <Nav align={"center"} justify={"center"}>
      <Link href="/">
        <a>
          <Button ghost css={{ placeSelf: "center start" }}>
            <PaperPlaneIcon />
          </Button>
        </a>
      </Link>
      <Flex css={{ placeSelf: "center end" }}>
        <ToggleTheme />
        <AccountDropDown />
      </Flex>
    </Nav>
  );
};
