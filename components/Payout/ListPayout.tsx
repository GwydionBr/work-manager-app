import { FlatList, StyleSheet } from "react-native";
import { Tables } from "@/types/db.types";
import { ThemedText } from "../ThemedText";

interface ListPayoutProps {
  payouts: Tables<"payout">[] | null;
}

const ListPayout = ({ payouts }: ListPayoutProps) => {
  if (!payouts || payouts.length === 0) {
    return <ThemedText>Please add some Payouts!</ThemedText>;
  }

  return (
    <>
      <FlatList
        data={payouts}
        renderItem={({ item }) => <ThemedText>{item.amount}</ThemedText>}
      />
      <ThemedText>Some List</ThemedText>
    </>
  );
};

export default ListPayout;

const styles = StyleSheet.create({});
