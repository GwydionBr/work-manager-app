import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import HeaderBackground from "@/components/ui/HeaderBackground";

export default function WorkLayout() {
  return (
    <Tabs
      screenOptions={{
        headerBackground: () => <HeaderBackground />,
      }}
    >
      <Tabs.Screen
        name="navigator"
        options={{
          title: "Menu",
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="line.3.horizontal" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="(workTab)"
        options={{
          headerShown: false,
          title: "Work",
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="folder" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  addButton: {
    marginBottom: 20,
  },
})