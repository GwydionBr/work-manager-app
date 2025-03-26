import { FlatList, Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { WorkStackParamList } from "@/Stacks/WorkStack";
import { useWorkStore } from "@/stores/workManagerStore";
import ProjectRow from "./ProjectRow";

type ListProjectsNavProp = NativeStackNavigationProp<
  WorkStackParamList,
  "WorkScreen"
>;

const ListProjects = () => {
  const { projects } = useWorkStore();

  const navigation = useNavigation<ListProjectsNavProp>();

  function handleProjectPress({ projectId }: { projectId: string }) {
    navigation.navigate("ProjectDetailScreen", { projectId });
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
