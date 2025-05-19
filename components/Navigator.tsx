import { Button } from "react-native";  
import { ThemedText } from "@/components/ThemedText";
import ThemedSafeAreaView from "@/components/ThemedSafeAreaView";
import { router } from "expo-router";

export default function Navigator() {
  return (
    <ThemedSafeAreaView>
      <ThemedText>Navigator</ThemedText>
      <Button title="Work" onPress={() => router.replace("/(tabs)/(work)")} />
      <Button title="Finances" onPress={() => router.replace("/(tabs)/(finances)")} />
      <Button title="Analysis" onPress={() => router.replace("/(tabs)/(analysis)")} />
      <Button title="Account" onPress={() => router.replace("/(tabs)/(account)/settings")} />
      <Button title="WG" onPress={() => router.replace("/(tabs)/(wg)/wg")} />
    </ThemedSafeAreaView>
  )
}