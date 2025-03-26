import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { WorkStackParamList } from "@/Stacks/WorkStack";
import { useWorkStore } from "@/stores/workManagerStore";

import { TimerProject } from "@/stores/workManagerStore";

import ListSessions from "@/components/Work/Session/ListSessions";

type ProjectDetailProps = NativeStackScreenProps<
  WorkStackParamList,
  "ProjectDetailScreen"
>;

const ProjectDetailScreen = ({ route, navigation }: ProjectDetailProps) => {
  const [project, setProject] = useState<TimerProject | null>(null);

  const { projectId } = route.params;
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
      <Text>{project.project.title}</Text>
      <ListSessions />
    </View>
  );
};

export default ProjectDetailScreen;
