import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Stack } from "tamagui";

export default function GothamSafeContainer({
  children,
}: React.PropsWithChildren) {
  const insets = useSafeAreaInsets();

  return (
    <Stack
      pt={insets.top}
      pb={insets.bottom}
      pl={insets.left}
      pr={insets.right}
      flex={1}
    >
      {children}
    </Stack>
  );
}
