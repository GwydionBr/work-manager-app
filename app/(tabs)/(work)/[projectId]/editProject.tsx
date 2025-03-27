import { useRouter, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useWorkStore } from "@/stores/workManagerStore";
import ProjectForm from "@/components/Work/Project/ProjectForm";
import { TimerProject } from "@/stores/workManagerStore";

const editProject = () => {
  const [project, setProject] = useState<TimerProject | null>(null);
  const router = useRouter();

  const { projectId } = useLocalSearchParams<{ projectId: string }>();
  const { projects } = useWorkStore();

  useEffect(() => {
    const project = projects.find((p) => p.project.id === projectId);
    if (project) {
      setProject(project);
    } else {
      router.back();
    }
  }
  , [projectId, projects]);

  if (!project) {
    return null;
  }


  return (
    <View style={{ flex: 1 }}>
      <ProjectForm initialData={project?.project} onSuccess={() => router.back()}/>
    </View>
  );
};

export default editProject;

const styles = StyleSheet.create({});
