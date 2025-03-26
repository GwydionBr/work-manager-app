import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";


export default function WorkLayout() {
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
      <Stack.Screen name="index" options={{ title: "Work"}}/>
      <Stack.Screen name="newProject" options={{headerShown: false}}/>
      <Stack.Screen name="[projectId]" options={{headerShown: false}}/>
    </Stack>
  );
}