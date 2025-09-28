import { supabase } from "@/features/shared/libs/supabase";
import React, { useState } from "react";
import { Alert } from "react-native";
import { Button, Input, SizableText, YStack } from "tamagui";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  }

  return (
    <YStack gap="$4">
      <SizableText size="$8">Access to Meow!</SizableText>
      <Input
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        autoCapitalize={"none"}
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        autoCapitalize={"none"}
      />
      <Button
        theme="green"
        disabled={loading}
        onPress={() => signInWithEmail()}
      >
        Log in
      </Button>
      <Button disabled={loading} onPress={() => signUpWithEmail()}>
        Sign up
      </Button>
    </YStack>
  );
}
