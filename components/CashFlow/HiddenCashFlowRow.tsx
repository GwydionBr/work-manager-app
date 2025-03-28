import { StyleSheet, View } from "react-native";
import IconButton from "@/components/ui/IconButton";
import { ThemedText } from "../ThemedText";

interface HiddenSwipeRowProps {
  onEdit: () => void;
  onDelete: () => void;
}

const HiddenSwipeRow = ({ onEdit, onDelete }: HiddenSwipeRowProps) => {
  return (
    <View style={styles.rowContainer}>
      <IconButton
        buttonStyle={styles.editButton}
        icon="pencil"
        color="white"
        size={24}
        onPress={onEdit}
      />
      <IconButton
        buttonStyle={styles.deleteButton}
        icon="trash"
        color="white"
        size={24}
        onPress={onDelete}
      />
    </View>
  );
};

export default HiddenSwipeRow;

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  editButton: {
    flex: 1,
    width: 100,
    backgroundColor: "blue",
    borderEndStartRadius: 10,
    borderStartStartRadius: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  deleteButton: {
    flex: 1,
    width: 100,
    paddingRight: 20,
    backgroundColor: "red",
    borderEndEndRadius: 10,
    borderStartEndRadius: 10,
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
