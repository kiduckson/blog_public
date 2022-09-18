import React from "react";
import { DropdownMenu } from "../components";
import { EnterIcon, ExitIcon } from "@radix-ui/react-icons";

import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { selectSession } from "../redux/sessionSlice";
import { signInWithGithub, signOutFromGithub } from "../hooks/authHook";
import { selectToast, openToast } from "../redux/toastSlice";

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
      dispatch(openToast({ title: "오류 발생" }));
    } finally {
      dispatch(openToast({ title: "로그아웃 성공" }));
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
