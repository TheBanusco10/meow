import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Stack } from "tamagui";

const CONTAINER_PADDING = 10;

export default function GothamSafeContainer({
  children,
}: React.PropsWithChildren) {
  const insets = useSafeAreaInsets();

  return (
    <Stack
      pt={insets.top + CONTAINER_PADDING}
      pb={insets.bottom + CONTAINER_PADDING}
      pl={insets.left + CONTAINER_PADDING}
      pr={insets.right + CONTAINER_PADDING}
      flex={1}
    >
      {children}
    </Stack>
  );
}
