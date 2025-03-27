import { useRouter, useNavigation, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { useWorkStore } from "@/stores/workManagerStore";

import { TimerProject } from "@/stores/workManagerStore";
import ListSessions from "@/components/Work/Session/ListSessions";
import { ThemedText } from "@/components/ThemedText";
import ThemedSafeAreaView from "@/components/ThemedSafeAreaView";

const ProjectDetailScreen = () => {
  const router = useRouter();
  const navigation = useNavigation();

  const [project, setProject] = useState<TimerProject | null>(null);

  const { projectId } = useLocalSearchParams<{ projectId: string}>();
  const { projects } = useWorkStore();

  useEffect(() => {
    const project = projects.find((p) => p.project.id === projectId);
    if (!project) {
      router.back();
      return;
    }
    navigation.setOptions({ title: project.project.title });
    setProject(project as TimerProject);
  }, [projectId, projects]);

  if (!project) {
    return null;
  }

  return (
    <ThemedSafeAreaView>
      <ThemedText>{project.project.title}</ThemedText>
      <ListSessions />
    </ThemedSafeAreaView>
  );
};

export default ProjectDetailScreen;
