import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

export default function PayoutLayout() {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme].headerBackground,
        },
        headerTintColor: colorScheme === "dark" ? "#ECEDEE" : "#11181C",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Finances" }} />
      <Stack.Screen name="newPayout" options={{ headerShown: false }} />
    </Stack>
  );
}
