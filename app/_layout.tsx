import { AuthProvider } from "@/features/auth/contexts/authContext";
import Routes from "@/features/shared/components/Routes";
import { defaultConfig } from "@tamagui/config/v4";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TamaguiProvider, Theme, createTamagui } from "tamagui";

const config = createTamagui(defaultConfig);

type Conf = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

export default function RootLayout() {
  return (
    <TamaguiProvider config={config}>
      <Theme>
        <SafeAreaProvider>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </SafeAreaProvider>
      </Theme>
    </TamaguiProvider>
  );
}
