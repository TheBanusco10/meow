import Routes from "@/features/shared/components/Routes";
import { defaultConfig } from "@tamagui/config/v4";
import { TamaguiProvider, Theme, createTamagui } from "tamagui";

const config = createTamagui(defaultConfig);

type Conf = typeof config;

declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

export default function RootLayout() {
  return (
    <TamaguiProvider config={config}>
      <Theme name="blue">
        <Routes />
      </Theme>
    </TamaguiProvider>
  );
}
