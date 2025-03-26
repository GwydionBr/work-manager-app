import { FlatList, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useWorkStore } from "@/stores/workManagerStore";
import ProjectRow from "./ProjectRow";

const ListProjects = () => {
  const { projects } = useWorkStore();

  const router = useRouter();


  function handleProjectPress({ projectId }: { projectId: string }) {
    router.push(`/(tabs)/(work)/${projectId}`);
  }

  if (!projects.length) {
    return <Text style={styles.centered}>No projects</Text>;
  }

  return (
    <FlatList
      data={projects}
      renderItem={({ item }) => (
        <ProjectRow project={item.project} onPress={handleProjectPress.bind(this, { projectId: item.project.id })} />
      )}
    />
  );
};

export default ListProjects;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
