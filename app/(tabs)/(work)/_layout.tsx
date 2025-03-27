import { Stack, useRouter } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import HeaderBackground from "@/components/ui/HeaderBackground";
import IconButton from "@/components/ui/IconButton";
import { StyleSheet } from "react-native";

export default function WorkLayout() {
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
          title: "Work",
          headerRight: ({ tintColor }) => (
            <IconButton 
              icon="add"
              size={30} 
              color={tintColor} 
              onPress={() => router.push("/(tabs)/(work)/newProject")}
              buttonStyle={styles.addButton}
            />
          ),
        }}
      />
      <Stack.Screen name="newProject" />
      <Stack.Screen name="[projectId]/index" />
    </Stack>
  );
}

const styles = StyleSheet.create({
  addButton: {
    marginBottom: 20,
  },
})