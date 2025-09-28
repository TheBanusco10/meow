import { supabase } from "@/features/shared/libs/supabase";
import React, { useState } from "react";
import { Alert, View } from "react-native";
import { Button, Input } from "tamagui";

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
    <View>
      <View>
        <Input
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize={"none"}
          keyboardType="email-address"
        />
      </View>
      <View>
        <Input
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          autoCapitalize={"none"}
        />
      </View>
      <View>
        <Button disabled={loading} onPress={() => signInWithEmail()}>
          Log in
        </Button>
      </View>
      <View>
        <Button disabled={loading} onPress={() => signUpWithEmail()}>
          Sign up
        </Button>
      </View>
    </View>
  );
}
