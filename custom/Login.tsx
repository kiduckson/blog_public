import React from "react";
import { DropdownMenu } from "../components";
import { EnterIcon, ExitIcon } from "@radix-ui/react-icons";

import { useAppSelector } from "../redux/hooks";
import { selectSession } from "../redux/sessionSlice";
import { signInWithGithub, signOutFromGithub } from "../hooks/authHook";

export const Login = () => {
  const session = useAppSelector(selectSession);

  return (
    <>
      {!session ? (
        <DropdownMenu.DropdownMenuItem onClick={signInWithGithub} css={{ cursor: "pointer" }}>
          로그인
          <EnterIcon />
        </DropdownMenu.DropdownMenuItem>
      ) : (
        <DropdownMenu.DropdownMenuItem onClick={signOutFromGithub} css={{ cursor: "pointer" }}>
          로그아웃
          <ExitIcon />
        </DropdownMenu.DropdownMenuItem>
      )}
    </>
  );
};
