import SignInWithEmailUseCase from "@/features/auth/application/useCases/SignInWithEmail.useCase";
import { loginValidationSchema } from "@/features/auth/application/validations/login";
import SupabaseAuthRepository from "@/features/auth/infrastructure/repositories/SupabaseAuthRepository";
import GothamField from "@/features/shared/components/Gotham/GothamField";
import { Formik } from "formik";
import React, { useState } from "react";
import { Alert } from "react-native";
import { Button, SizableText, YStack } from "tamagui";

interface LoginFormProps {
  email: string;
  password: string;
}

const loginInitialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const [loading, setLoading] = useState(false);

  const signInWithEmail = async (values: LoginFormProps) => {
    setLoading(true);

    try {
      const supabaseAuthRepository = new SupabaseAuthRepository();
      const signInWithEmailUseCase = new SignInWithEmailUseCase(
        supabaseAuthRepository
      );

      const { email, password } = values;

      await signInWithEmailUseCase.execute(email, password);
    } catch (err: any) {
      const error: Error = err;

      Alert.alert(error.message);
    }

    setLoading(false);
  };

  // async function signUpWithEmail() {
  //   setLoading(true);
  //   const {
  //     data: { session },
  //     error,
  //   } = await supabase.auth.signUp({
  //     email: email,
  //     password: password,
  //   });

  //   if (error) Alert.alert(error.message);
  //   if (!session)
  //     Alert.alert("Please check your inbox for email verification!");
  //   setLoading(false);
  // }

  return (
    <YStack gap="$4">
      <SizableText size="$8">Access to Meow!</SizableText>
      <Formik
        initialValues={loginInitialValues}
        onSubmit={signInWithEmail}
        validationSchema={loginValidationSchema}
      >
        {({ handleSubmit }) => (
          <YStack>
            <GothamField
              type="email"
              name="email"
              label="Email"
              placeholder="example@email.com"
            />
            <GothamField
              type="text"
              name="password"
              label="Password"
              placeholder="Enter your password"
              secureText
            />
            <Button mt="$4" onPress={() => handleSubmit()}>
              Log in
            </Button>
          </YStack>
        )}
      </Formik>
      {/* <Button disabled={loading} onPress={() => signUpWithEmail()}>
        Sign up
      </Button> */}
    </YStack>
  );
}
