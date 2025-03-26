import { View, Text, StyleSheet, Pressable } from "react-native";
import { Tables } from "@/types/db.types";
import { Colors } from "@/constants/Colors";

interface ProjectRowProps {
  project: Tables<"timerProject">;
  onPress: ( ) => void;
}

const ProjectRow = ({ project, onPress }: ProjectRowProps) => {
  return (
    <Pressable onPress={onPress} style={(state) => state.pressed && styles.pressed}>
      <View style={styles.rowContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.title}>{project.title}</Text>
          <Text style={styles.description}>{project.description}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text>{project.salary}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProjectRow;

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    backgroundColor: Colors.rowBackground,
    justifyContent: "space-between",
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    shadowColor: "black",
    shadowRadius: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  leftContainer: {},
  rightContainer: {},
  pressed: {
    opacity: 0.75,
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
