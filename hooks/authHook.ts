import React from "react";
import { supabase } from "../lib/supabase";

import { useAppDispatch } from "../redux/hooks";
import { updateSession } from "../redux/sessionSlice";

// login
export const signInWithGithub = async (): Promise<void> => {
  try {
    const { error } = await supabase.auth.signIn({
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
// logout
export const signOutFromGithub = async (): Promise<void> => {
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
};
// setSession
// 레이아웃에서 세션 관리
export const useAuth = () => {
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
};
