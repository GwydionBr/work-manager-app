import { useState } from "react";
import { Button, Alert, StyleSheet } from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { useWorkStore } from "@/stores/workManagerStore";
import type { TablesInsert, TablesUpdate } from "@/types/db.types";
import { ThemedText } from "@/components/ThemedText";
import { useColorScheme } from "@/hooks/useColorScheme";
import ThemedTextInput from "@/components/ThemedTextInput";
import ThemedSafeAreaView from "@/components/ThemedSafeAreaView";
import { ThemedView } from "@/components/ThemedView";
import ThemedPicker from "@/components/ThemedPicker";

const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  salary: z.number().min(0, "Salary must be a positive number"),
  currency: z.string().min(1, "Currency is required"),
  is_favorite: z.boolean().optional(),
});

type ProjectFormValues = z.infer<typeof projectSchema>;

interface ProjectFormProps {
  initialData?: TablesUpdate<"timerProject">;
  onSuccess?: () => void;
}

const ProjectForm = ({ initialData, onSuccess }: ProjectFormProps) => {
  const [loading, setLoading] = useState(false);
  const addProject = useWorkStore((state) => state.addProject);
  const updateProject = useWorkStore((state) => state.updateProject);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      salary: initialData?.salary || 0,
      currency: initialData?.currency || "",
      is_favorite: initialData?.is_favorite || false,
    },
  });

  const onSubmit = async (data: ProjectFormValues) => {
    setLoading(true);

    try {
      if (initialData?.id) {
        console.log("Updating project", data);
        const success = await updateProject({
          ...data,
          id: initialData.id,
        });

        if (!success) {
          throw new Error("Failed to update project");
        }
      } else {
        console.log("Creating project", data);
        const success = await addProject(data as TablesInsert<"timerProject">);

        if (!success) {
          throw new Error("Failed to create project");
        }
      }

      onSuccess?.();
    } catch (error: any) {
      Alert.alert("Error", error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemedSafeAreaView style={styles.container}>
      <ThemedText style={styles.formTitle} type="subtitle">
        Project Form
      </ThemedText>

      <ThemedView style={styles.inputContainer}>
        <Controller
          name="title"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <ThemedTextInput
              placeholder="Title"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              withBorder
            />
          )}
        />
        {errors.title && (
          <ThemedText style={styles.errorText}>
            {errors.title.message}
          </ThemedText>
        )}
      </ThemedView>

      <ThemedView style={styles.inputContainer}>
        <Controller
          name="description"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <ThemedTextInput
              placeholder="Description"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              withBorder
            />
          )}
        />
        {errors.description && (
          <ThemedText style={styles.errorText}>
            {errors.description.message}
          </ThemedText>
        )}
      </ThemedView>

      <ThemedView style={styles.inputContainer}>
        <Controller
          name="salary"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <ThemedTextInput
              placeholder="Salary"
              keyboardType="numeric"
              onBlur={onBlur}
              onChangeText={(text) => onChange(Number(text))}
              value={value.toString()}
              withBorder
              label="Salary"
            />
          )}
        />
        {errors.salary && (
          <ThemedText style={styles.errorText}>
            {errors.salary.message}
          </ThemedText>
        )}
      </ThemedView>

      <ThemedView style={styles.inputContainer}>
        <Controller
          name="currency"
          control={control}
          render={({ field: { onChange, value } }) => (
            <ThemedPicker
              selectedValue={value}
              onValueChange={onChange}
              items={[
                { label: "USD ($)", value: "$" },
                { label: "EUR (€)", value: "€" },
                { label: "GBP (£)", value: "£" },
                { label: "JPY (¥)", value: "¥" },
              ]}
              withBorder
              label="Currency"
            />
          )}
        />
        {errors.currency && (
          <ThemedText style={styles.errorText}>
            {errors.currency.message}
          </ThemedText>
        )}
      </ThemedView>

      <Button
        title={loading ? "Saving..." : "Save Project"}
        onPress={handleSubmit(onSubmit)}
        disabled={loading}
        color={isDarkMode ? "#bb86fc" : "#6200ee"}
      />
    </ThemedSafeAreaView>
  );
};

export default ProjectForm;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
    flex: 1,
  },
  formTitle: {
    textAlign: "center",
    paddingVertical: 16,
  },
  inputContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  button: {
    marginTop: 16,
  },
});
