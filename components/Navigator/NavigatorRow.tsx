import { StyleSheet, Pressable, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useColorScheme } from "react-native";

interface NavigatorRowProps {
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
}

export default function NavigatorRow({
  title,
  icon,
  onPress,
}: NavigatorRowProps) {
  const colorScheme = useColorScheme();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { opacity: pressed ? 0.75 : 1, borderColor: colorScheme === "dark" ? "white" : "black" },
      ]}
      onPress={onPress}
    >
      <View style={styles.row}>
        {icon}
        <ThemedText>{title}</ThemedText>
      </View>
      <IconSymbol name="chevron.right" color={colorScheme === "dark" ? "white" : "black"} size={20} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
});
