import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useWorkStore } from "@/stores/workManagerStore";
import { SwipeListView } from "react-native-swipe-list-view";
import ProjectRow from "./ProjectRow";
import { ThemedText } from "@/components/ThemedText";
import IconButton from "@/components/ui/IconButton";

const ListProjects = () => {
  const { projects, deleteProject } = useWorkStore();

  const router = useRouter();

  function handleProjectPress({ projectId }: { projectId: string }) {
    router.push(`/(tabs)/(work)/${projectId}`);
  }

  function handleDeleteSwipe({ projectId }: { projectId: string }) {
    deleteProject(projectId);
  }

  const renderHiddenItem = (rowData: any, rowMap: any) => (
    <View style={styles.rowBack}>
      <IconButton
        icon="pencil"
        size={30}
        color="white"
        buttonStyle={styles.editButton}
        onPress={() => {
          router.push(`/(tabs)/(work)/${rowData.item.project.id}/editProject`);
          rowMap[rowData.item.project.key].closeRow();
        }}
      />
      <IconButton
        icon="trash"
        size={30}
        color="white"
        buttonStyle={styles.deleteButton }
        onPress={() => {
          handleDeleteSwipe({ projectId: rowData.item.project.id });
          rowMap[rowData.item.project.key].closeRow();
        }}
      />
    </View>
  );

  if (!projects.length) {
    return <ThemedText style={styles.centered}>No projects</ThemedText>;
  }

  return (
    <SwipeListView
      data={projects}
      renderItem={({ item }) => (
        <ProjectRow
          project={item.project}
          onPress={handleProjectPress.bind(this, {
            projectId: item.project.id,
          })}
        />
      )}
      renderHiddenItem={renderHiddenItem}
      rightOpenValue={-75}
      leftOpenValue={75}
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
  rowBack: {
    // backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 6,
  },
  editButton: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "flex-start",
    width: 170,
    paddingLeft: 20,
    borderEndStartRadius: 10,
    borderStartStartRadius: 10,
    paddingVertical: 18,
  },
  deleteButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end",
    width: 170,
    paddingRight: 20,
    borderEndEndRadius: 10,
    borderStartEndRadius: 10,
    paddingVertical: 18,
  },
});
