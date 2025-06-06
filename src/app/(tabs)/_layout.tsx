import { Stack, Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function TabLayout() {

  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="(work)" />
      <Stack.Screen name="(finances)" />
      <Stack.Screen name="(analysis)" />
      <Stack.Screen name="(account)" />
    </Stack>
    // <Tabs
    //   screenOptions={{
    //     tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
    //     tabBarActiveBackgroundColor:
    //       Colors[colorScheme ?? "light"].tabBarActiveBackground,
    //     headerShown: false,
    //     // tabBarButton: HapticTab,
    //     tabBarBackground: () => <HeaderBackground />,
    //     tabBarItemStyle: styles.tabBatItem,
    //     // tabBarStyle: styles.tabBar,
    //     // tabBarLabelStyle: styles.tabBarLabel,
    //     // tabBarIconStyle: styles.tabBarIcon,
    //   }}
    // >
    //   <Tabs.Screen
    //     name="(account)"
    //     options={{
    //       title: "",
    //       tabBarIcon: ({ color, size }) => (
    //         <IconSymbol size={size} name="line.3.horizontal" color={color} />
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="(work)"
    //     options={{
    //       title: "Work",
    //       tabBarIcon: ({ color, size }) => (
    //         <IconSymbol size={size} name="suitcase.fill" color={color} />
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="(finances)"
    //     options={{
    //       title: "Finances",
    //       tabBarIcon: ({ color, size }) => (
    //         <IconSymbol size={size} name="arrow.up.arrow.down" color={color} />
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="(analysis)"
    //     options={{
    //       title: "Analysis",
    //       tabBarIcon: ({ color, size }) => (
    //         <IconSymbol
    //           size={size}
    //           name="chart.line.uptrend.xyaxis"
    //           color={color}
    //         />
    //       ),
    //     }}
    //   />
    // </Tabs>
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
