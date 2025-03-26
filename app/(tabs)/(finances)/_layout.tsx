import { Stack } from "expo-router";

export default function PayoutLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="newPayout" options={{ headerShown: false }} />
    </Stack>
  );
}
