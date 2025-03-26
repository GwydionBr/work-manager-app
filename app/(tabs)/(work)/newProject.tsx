import ProjectForm from "@/components/Work/Project/ProjectForm";
import ThemedSafeAreaView from "@/components/ThemedSafeAreaView";
import { ThemedText } from "@/components/ThemedText";

const NewProjectScreen = () => {
  return (
    <ThemedSafeAreaView>
      <ThemedText>NewProjectScreen</ThemedText>
      <ProjectForm />
    </ThemedSafeAreaView>
  );
};

export default NewProjectScreen;
