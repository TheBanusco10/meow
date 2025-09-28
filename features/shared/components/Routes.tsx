import { useAuth } from "@/features/auth/hooks/useAuth";
import { Stack } from "expo-router";

export default function Routes() {
  const { session } = useAuth();

  const isLoggedIn = !!session?.user || false;
  return (
    <Stack>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="index" />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}
