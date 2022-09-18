import React from "react";
import { supabase } from "../lib/supabase";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updateSession, selectSession } from "../redux/sessionSlice";
import { openToast } from "../redux/toastSlice";

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
  const session = useAppSelector(selectSession);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (session?.user?.app_metadata) {
      let lastSignin: string = session.user.last_sign_in_at!;
      if (Date.now() - Date.parse(lastSignin) < 1200) {
        dispatch(openToast({ title: "로그인 성공", type: "success" }));
      }
    }
  }, [session, dispatch]);

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
