import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import HeaderBackground from "@/components/ui/HeaderBackground";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarActiveBackgroundColor:
          Colors[colorScheme ?? "light"].tabBarActiveBackground,
        headerShown: false,
        // tabBarButton: HapticTab,
        tabBarBackground: () => <HeaderBackground />,
        tabBarItemStyle: styles.tabBatItem,
        // tabBarStyle: styles.tabBar,
        // tabBarLabelStyle: styles.tabBarLabel,
        // tabBarIconStyle: styles.tabBarIcon,
      }}
    >
      <Tabs.Screen
        name="(work)"
        options={{
          title: "Work",
          tabBarIcon: ({ color, size }) => (
            <IconSymbol size={size} name="suitcase.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(finances)"
        options={{
          title: "Finances",
          tabBarIcon: ({ color, size }) => (
            <IconSymbol size={size} name="arrow.up.arrow.down" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(analysis)"
        options={{
          title: "Analysis",
          tabBarIcon: ({ color, size }) => (
            <IconSymbol
              size={size}
              name="chart.line.uptrend.xyaxis"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(account)"
        options={{
          title: "Account",
          tabBarIcon: ({ color, size }) => (
            <IconSymbol size={size} name="person.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBatItem: {
    flex: 1,
    // paddingHorizontal: 8,
    borderRadius: 30,
    overflow: "hidden",
  },
  tabBar: {
    flex: 1,
    borderRadius: 15,
    marginHorizontal: 30,
    position: "absolute",
    bottom: 20,
    height: 60,
  },
  tabBarIcon: {},
  tabBarLabel: {
    fontSize: 10,
  },
});
