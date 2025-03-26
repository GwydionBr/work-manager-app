import { Stack } from "expo-router";

export default function WorkLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
      <Stack.Screen name="newProject" options={{headerShown: false}}/>
      <Stack.Screen name="projectDetail" options={{headerShown: false}}/>
    </Stack>
  );
}