import GothamField from "@/features/shared/components/Gotham/GothamField";
import { Formik } from "formik";
import React, { useState } from "react";
import { Button, SizableText, View, YStack } from "tamagui";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // async function signInWithEmail() {
  //   setLoading(true);
  //   const { error } = await supabase.auth.signInWithPassword({
  //     email: email,
  //     password: password,
  //   });

  //   if (error) Alert.alert(error.message);
  //   setLoading(false);
  // }

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

  const handleOnSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <YStack gap="$4">
      <SizableText size="$8">Access to Meow!</SizableText>
      <Formik initialValues={{ email: "" }} onSubmit={handleOnSubmit}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <GothamField
              type="email"
              name="email"
              handleBlur={handleBlur}
              handleChange={handleChange}
              value={values.email}
            />
            {/* <Input
              inputMode="email"
              onChange={() => handleChange(name)}
              onBlur={() => handleBlur(name)}
              value={values.email}
            /> */}
            <Button onPress={handleSubmit}>Submit</Button>
          </View>
        )}
      </Formik>
      {/* <Input
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
      </Button> */}
    </YStack>
  );
}
