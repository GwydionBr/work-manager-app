import { Text } from "react-native";
import ProjectForm from "@/components/Work/Project/ProjectForm";
import ThemedSafeAreaView from "@/components/ThemedSafeAreaView";

const NewProjectScreen = () => {
  return (
    <ThemedSafeAreaView>
      <Text>NewProjectScreen</Text>
      <ProjectForm />
    </ThemedSafeAreaView>
  );
};

export default NewProjectScreen;
