import { useAuth } from "@/features/auth/hooks/useAuth";
import { Button, Text, View } from "tamagui";

export default function Index() {
  const { signOut } = useAuth();
  return (
    <View>
      <Text>Index</Text>
      <Button onPress={() => signOut()}>Sign out</Button>
    </View>
  );
}
