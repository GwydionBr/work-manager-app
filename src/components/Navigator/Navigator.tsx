import ThemedSafeAreaView from "@/components/ThemedSafeAreaView";
import { router } from "expo-router";
import { IconSymbol } from "../ui/IconSymbol";
import NavigatorRow from "./NavigatorRow";
import { StyleSheet, View } from "react-native";
import { useColorScheme } from "react-native";
import { ThemedText } from "../ThemedText";

export default function Navigator() {
  const colorScheme = useColorScheme();

  return (
    <ThemedSafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.title}>Navigator</ThemedText>
        <NavigatorRow
          title="Account"
          icon={
            <IconSymbol
              name="person.fill"
              color={colorScheme === "dark" ? "white" : "black"}
              size={20}
            />
          }
          onPress={() => router.replace("/(tabs)/(account)/profile")}
        />
        <NavigatorRow
          title="Settings"
          icon={
            <IconSymbol name="gear" color={colorScheme === "dark" ? "white" : "black"} size={20} />
          }
          onPress={() => router.replace("/(tabs)/(account)/settings")}
        />
      </View>
      <View>
        <NavigatorRow
          title="Analysis"
          icon={
            <IconSymbol
              name="chart.line.uptrend.xyaxis"
              color={colorScheme === "dark" ? "white" : "black"}
              size={20}
            />
          }
          onPress={() => router.replace("/(tabs)/(analysis)")}
        />
        <NavigatorRow
          title="Work"
          icon={
            <IconSymbol
              name="folder"
              color={colorScheme === "dark" ? "white" : "black"}
              size={20}
            />
          }
          onPress={() => router.replace("/(tabs)/(work)")}
        />
        <NavigatorRow
          title="Finances"
          icon={
            <IconSymbol
              name="dollarsign.circle"
              color={colorScheme === "dark" ? "white" : "black"}
              size={20}
            />
          }
          onPress={() => router.replace("/(tabs)/(finances)")}
        />
        <NavigatorRow
          title="WG"
          icon={
            <IconSymbol
              name="person.2.fill"
              color={colorScheme === "dark" ? "white" : "black"}
              size={20}
            />
          }
          onPress={() => router.replace("/(tabs)/(wg)/wg")}
        />
      </View>
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
  },
});
