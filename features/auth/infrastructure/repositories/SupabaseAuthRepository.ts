import AuthRepository from "@/features/auth/domain/repositories/AuthRepository";
import { supabase } from "@/features/shared/libs/supabase";

export default class SupabaseAuthRepository implements AuthRepository {
  async signInWithEmail(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) throw error;
  }
}
