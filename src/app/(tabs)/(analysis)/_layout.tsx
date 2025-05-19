import HeaderBackground from "@/components/ui/HeaderBackground";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Tabs } from "expo-router";

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
        name="(analysisTab)"
        options={{
          headerShown: false,
          title: "Analysis",
          tabBarIcon: ({ color, size }) => (
            <IconSymbol
              name="chart.line.uptrend.xyaxis"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
