import { View, StyleSheet, Pressable } from "react-native";
import { Tables } from "@/types/db.types";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";
import { formatMoney } from "@/utils/workHelperFunctions";

interface ProjectRowProps {
  project: Tables<"timerProject">;
  onPress: () => void;
}

const ProjectRow = ({ project, onPress }: ProjectRowProps) => {
  const colorScheme = useColorScheme() || "light";
  const shadowColor = Colors[colorScheme].shadow;

  return (
    <Pressable
      onPress={onPress}
      style={(state) => state.pressed && styles.pressed}
    >
      <ThemedView style={[styles.rowContainer, { shadowColor }]}>
        <View style={styles.leftContainer}>
          <ThemedText style={styles.title}>{project.title}</ThemedText>
          <ThemedText style={styles.description}>
            {project.description}
          </ThemedText>
        </View>
        <View style={styles.rightContainer}>
          <ThemedText>
            {formatMoney(project.salary, project.currency)}
          </ThemedText>
        </View>
      </ThemedView>
    </Pressable>
  );
};

export default ProjectRow;

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    // backgroundColor: Colors.rowBackg,
    justifyContent: "space-between",
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    shadowRadius: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  leftContainer: {},
  rightContainer: {},
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
});
