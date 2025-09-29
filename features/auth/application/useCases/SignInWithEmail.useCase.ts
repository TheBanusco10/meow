import AuthRepository from "@/features/auth/domain/repositories/AuthRepository";

export default class SignInWithEmailUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(email: string, password: string) {
    return await this.authRepository.signInWithEmail(email, password);
  }
}
