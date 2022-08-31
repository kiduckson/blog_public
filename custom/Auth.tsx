import React from "react";
import { DropdownMenu } from "../components";
import { EnterIcon, ExitIcon } from "@radix-ui/react-icons";

import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { selectSession } from "../redux/sessionSlice";
import { signInWithGithub, signOutFromGithub } from "../hooks/authHook";
import { selectToast, toggleToast } from "../redux/toastSlice";

export const Auth = () => {
  const dispatch = useAppDispatch();
  const session = useAppSelector(selectSession);

  const handleLogin = async () => {
    await signInWithGithub();
  };
  const handleLogout = async () => {
    try {
      await signOutFromGithub();
    } catch (err) {
      dispatch(toggleToast({ title: "Error" }));
    } finally {
      dispatch(toggleToast({ title: "Logged out successfully" }));
    }
  };
  return (
    <>
      {!session ? (
        <DropdownMenu.DropdownMenuItem onClick={handleLogin} css={{ cursor: "pointer" }}>
          로그인
          <EnterIcon />
        </DropdownMenu.DropdownMenuItem>
      ) : (
        <DropdownMenu.DropdownMenuItem onClick={handleLogout} css={{ cursor: "pointer" }}>
          로그아웃
          <ExitIcon />
        </DropdownMenu.DropdownMenuItem>
      )}
    </>
  );
};
