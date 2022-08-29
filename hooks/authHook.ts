import React from "react";
import { supabase } from "../lib/supabase";
import { Session } from "@supabase/gotrue-js/src/lib/types";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updateSession, selectSession } from "../redux/sessionSlice";

export const useAuth = () => {
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
};
