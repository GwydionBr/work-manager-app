import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { SwipeListView, SwipeRow } from "react-native-swipe-list-view";
import { useFinancesStore } from "@/stores/financesManagerStore";
import VisibleCashFlowRow from "./VisibleCashFlowRow";
import HiddenSwipeRow from "./HiddenCashFlowRow";
import { CashFlow } from "@/stores/financesManagerStore";

interface ListCashFlowDayProps {
  cashFlow: CashFlow[];
  day: string;
}

const ListCashFlowDay = ({cashFlow, day}: ListCashFlowDayProps) => {

  const router = useRouter();


  return (
    <View style={styles.rowContainer}>
    <ThemedText>{day}</ThemedText>
    <SwipeListView
      data={cashFlow}
      style={styles.listContainer}
      swipeRowStyle={{ flex: 1 }}
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
    </View>
  );
};

export default ListCashFlowDay;

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "gray",
    padding: 5,
  },
  listContainer: {
    flex: 1,
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
