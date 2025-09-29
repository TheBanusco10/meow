export default interface AuthRepository {
  signInWithEmail(email: string, password: string): Promise<void>;
}
