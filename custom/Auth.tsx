import React from "react";
import { supabase } from "../lib/supabase";
import { DropdownMenu, FullScreenLoading } from "../components";
import { PersonIcon, EnterIcon, ExitIcon } from "@radix-ui/react-icons";
import { Session } from "@supabase/gotrue-js/src/lib/types";

export const Auth = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [session, setSession] = React.useState<Session>();

  React.useEffect(() => {
    let mounted = true;
    async function getInitialSession() {
      const session = await supabase.auth.session();
      if (mounted) {
        if (session) {
          setSession(session);
        }
        setIsLoading(false);
      }
    }
    getInitialSession();
    const { data: listener } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
      setSession(session);
    });
    return () => {
      mounted = false;
      listener?.unsubscribe();
    };
  }, []);

  const signInWithGithub = async () => {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
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
    } finally {
      setIsLoading(false);
    }
  }
  if (isLoading) {
    return <FullScreenLoading />;
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
          <EnterIcon />
        </DropdownMenu.DropdownMenuItem>
      )}
    </>
  );
};
