import { useState, useEffect } from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";
import { useFinancesStore } from "@/stores/financesManagerStore";
import { CashFlow } from "@/stores/financesManagerStore";
import ListCashFlowDay from "./ListCashFlowDay";

interface DailyCashFlow {
  day: string;
  cashFlow: CashFlow[];
}

const ListCashFlow = () => {
  const { cashFlow } = useFinancesStore();
  const [dailyCashFlow, setDailyCashFlow] = useState<DailyCashFlow[] | null>(
    null
  );

  useEffect(() => {
    if (cashFlow) {
      const groupedCashFlow = cashFlow.reduce(
        (acc: DailyCashFlow[], item: CashFlow) => {
          const date = new Date(item.date);
          const dayKey = date.toLocaleDateString("de-DE", {
            weekday: "short",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }); // YYYY-MM-DD

          const existingDay = acc.find((d) => d.day === dayKey);

          if (existingDay) {
            existingDay.cashFlow.push(item);
          } else {
            acc.push({ day: dayKey, cashFlow: [item] });
          }

          return acc;
        },
        []
      );

      setDailyCashFlow(groupedCashFlow);
    }
  }, [cashFlow]);
  return (
    <FlatList
      data={dailyCashFlow}
      keyExtractor={(item) => item.day}
      renderItem={({ item }) => (
        <View style={styles.rowContainer}>
          <ListCashFlowDay cashFlow={item.cashFlow} day={item.day} />
        </View>
      )}
      ListEmptyComponent={<Text>Please add some CashFlow!</Text>}
    />
  );
};

export default ListCashFlow;

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 10,
  },
});
