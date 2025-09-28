import { supabase } from "@/features/shared/libs/supabase";
import { Session } from "@supabase/supabase-js";
import React, { createContext, useEffect, useState } from "react";

// Define the shape of the auth context
interface AuthContextType {
  session: Session | null;
  signOut: () => void;
}

// Create the context
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState<Session | null>(null);

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (err: any) {
      console.error("Error when signing out", err.message);
    }
  };

  useEffect(() => {
    // Get the initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for changes
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    // Cleanup subscription on unmount
    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
