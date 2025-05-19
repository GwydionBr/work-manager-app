import { IconSymbol } from "@/components/ui/IconSymbol";
import { Tabs } from "expo-router";
import HeaderBackground from "@/components/ui/HeaderBackground";

export default function FinancesLayout() {  
  return (
    <Tabs screenOptions={{
      headerBackground: () => <HeaderBackground />,
    }}>
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
        name="(financeTab)"
        options={{
          headerShown: false,
          title: "Finances",
        tabBarIcon: ({ color, size }) => (
          <IconSymbol name="dollarsign.circle" color={color} size={size} />
        ),
      }}
    />
    </Tabs>
  );
}
