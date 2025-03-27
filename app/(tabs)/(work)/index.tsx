import { StyleSheet } from "react-native";
import ListProjects from "@/components/Work/Project/ListProjects";
import ThemedSafeAreaView from "@/components/ThemedSafeAreaView";

const ProjectScreen = () => {
  return (
    <ThemedSafeAreaView style={styles.container}>
      <ListProjects />
    </ThemedSafeAreaView>
  );
};

export default ProjectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
