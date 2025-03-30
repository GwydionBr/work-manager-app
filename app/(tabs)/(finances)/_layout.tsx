import { Stack, useRouter } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import HeaderBackground from "@/components/ui/HeaderBackground";
import IconButton from "@/components/ui/IconButton";

export default function PayoutLayout() {
  const colorScheme = useColorScheme() ?? "light";
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerBackground: () => <HeaderBackground />,
        headerTintColor: colorScheme === "dark" ? "#ECEDEE" : "#11181C",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Finances",
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="add"
              color={tintColor}
              size={24}
              onPress={() => router.push("/(tabs)/(finances)/newCashFlow")}
            />
          ),
        }}
      />
      <Stack.Screen name="newCashFlow" />
    </Stack>
  );
}
