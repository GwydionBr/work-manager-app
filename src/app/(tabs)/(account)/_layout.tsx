import { IconSymbol } from "@/components/ui/IconSymbol";
import { Tabs } from "expo-router";

export default function AccountLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="navigator"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="line.3.horizontal" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="person.fill" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="gearshape.fill" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
