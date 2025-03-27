import ProjectForm from "@/components/Work/Project/ProjectForm";
import ThemedSafeAreaView from "@/components/ThemedSafeAreaView";
import { useRouter } from "expo-router";

const NewProjectScreen = () => {
  const router = useRouter();

  return (
    <ThemedSafeAreaView>
      <ProjectForm onSuccess={() => router.back()}/>
    </ThemedSafeAreaView>
  );
};

export default NewProjectScreen;
