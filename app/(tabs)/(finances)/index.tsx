import { StyleSheet } from "react-native";

import ListCashFlow from "@/components/CashFlow/ListCashFlow";
import ThemedSafeAreaView from "@/components/ThemedSafeAreaView";

export default function FinancesScreen() {
  return (
    <ThemedSafeAreaView>
      <ListCashFlow />
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({});
