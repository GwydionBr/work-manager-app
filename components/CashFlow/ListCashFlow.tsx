import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { SwipeListView, SwipeRow } from "react-native-swipe-list-view";
import { useFinancesStore } from "@/stores/financesManagerStore";
import VisibleCashFlowRow from "./VisibleCashFlowRow";
import HiddenSwipeRow from "./HiddenCashFlowRow";

const ListCashFlow = () => {
  const { cashFlow, expenses, incomes } = useFinancesStore();

  
  if (!cashFlow || cashFlow.length === 0) {
    console.log("expenses", expenses);
    console.log("incomes", incomes);
    console.log("cashFlow", cashFlow);
    return (
      <ThemedText style={styles.centered}>Please add some CashFlow!</ThemedText>
    );
  }
  
  const router = useRouter();
  
  function handleProjectPress({ projectId }: { projectId: string }) {
    // router.push(`/(tabs)/(work)/${projectId}`);
  }

  function handleEditSwipe({ projectId }: { projectId: string }) {
    console.log("Edit project with ID:", projectId);
  }
  
  function handleDeleteSwipe({ projectId }: { projectId: string }) {
    console.log("Delete project with ID:", projectId);
  }

  const closeRow = (rowMap: any, rowKey: any) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  return (
    <SwipeListView
      data={cashFlow}
      style={styles.listContainer}
      swipeRowStyle={{flex: 1}}
      keyExtractor={(item) => item.id.toString()}
      renderItem={(data, rowKey) => (
        <SwipeRow
          // disableRightSwipe={true}
          leftOpenValue={75}
          rightOpenValue={-75}
          stopLeftSwipe={100}
          stopRightSwipe={-100}
          // style={styles.swipeRow}
        >
          {/* Back View (Hidden when not swiped) */}
          <HiddenSwipeRow
            onDelete={() => console.log("delete")}
            onEdit={() => console.log("edit")}
          />

          {/* Front View (Visible) */}
          <VisibleCashFlowRow
            cashFlow={data.item}
            onPress={() => console.log("pressed")}
          />
        </SwipeRow>
      )}
    />
  );
};

export default ListCashFlow;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 10,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  swipeRow: {
    flex: 1,
    marginVertical: 15,
    alignItems: "stretch",
  },
});
