import React from "react";
import { supabase } from "../lib/supabase";
import { DropdownMenu, FullScreenLoading } from "../components";
import { PersonIcon, EnterIcon, ExitIcon } from "@radix-ui/react-icons";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updateSession, selectSession } from "../redux/sessionSlice";

export const Auth = () => {
  const session = useAppSelector(selectSession);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    let mounted = true;
    async function getInitialSession() {
      const session = await supabase.auth.session();
      if (mounted && session) {
        dispatch(updateSession({ session }));
      }
    }
    getInitialSession();
    const { data: listener } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
      dispatch(updateSession({ session }));
    });
    return () => {
      mounted = false;
      listener?.unsubscribe();
    };
  }, [dispatch]);

  const signInWithGithub = async () => {
    try {
      const { user, session, error } = await supabase.auth.signIn({
        provider: "github",
      });
      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };
  async function signOutFromGithub() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }
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
