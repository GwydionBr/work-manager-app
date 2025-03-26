import { useNavigation, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { useWorkStore } from "@/stores/workManagerStore";

import { TimerProject } from "@/stores/workManagerStore";
import ListSessions from "@/components/Work/Session/ListSessions";
import { ThemedText } from "@/components/ThemedText";

const ProjectDetailScreen = () => {
  const navigation = useNavigation();

  const [project, setProject] = useState<TimerProject | null>(null);

  const { projectId } = useLocalSearchParams<{ projectId: string}>();
  const { projects } = useWorkStore();

  useEffect(() => {
    const project = projects.find((p) => p.project.id === projectId);
    if (!project) {
      navigation.goBack();
      return;
    }
    setProject(project as TimerProject);
  }, [projectId, projects]);

  if (!project) {
    return null;
  }

  return (
    <View>
      <ThemedText>{project.project.title}</ThemedText>
      <ListSessions />
    </View>
  );
};

export default ProjectDetailScreen;
