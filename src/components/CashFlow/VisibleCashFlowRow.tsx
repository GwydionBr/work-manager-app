import { StyleSheet, Pressable, View } from "react-native";
import type { CashFlow } from "@/stores/financesManagerStore";
import { ThemedText } from "../ThemedText";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { formatMoney } from "@/utils/workHelperFunctions";

type CashFlowRowProps = {
  cashFlow: CashFlow;
  onPress: () => void;
};

const VisibleCashFlowRow = ({ cashFlow, onPress }: CashFlowRowProps) => {
  const colorScheme = useColorScheme() || "light";
  const shadowColor = Colors[colorScheme].shadow;

  const backgroundColor =
    cashFlow.type === "expense"
      ? Colors[colorScheme].expenseRow
      : Colors[colorScheme].incomeRow;

  return (
    <Pressable
      onPress={onPress}
      style={(state) => [state.pressed && styles.pressed, { flex: 1 }]}
    >
      <View style={[styles.rowContainer, { shadowColor, backgroundColor }]}>
        <View style={styles.leftContainer}>
          <ThemedText style={styles.titleText}>{cashFlow.title}</ThemedText>
        </View>
        <View style={styles.rightContainer}>
          <ThemedText style={styles.moneyText}>
            {formatMoney(cashFlow.amount, cashFlow.currency)}
          </ThemedText>
        </View>
      </View>
    </Pressable>
  );
};

export default VisibleCashFlowRow;

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    // borderRadius: 10,
    shadowRadius: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  leftContainer: {},
  rightContainer: {},
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  titleText: {
    fontSize: 16,
  },
  moneyText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
