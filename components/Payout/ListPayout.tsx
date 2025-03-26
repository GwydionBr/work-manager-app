import { FlatList, StyleSheet, Text, View } from "react-native";
import { Tables } from "@/types/db.types";

interface ListPayoutProps {
  payouts: Tables<"payout">[] | null;
}

const ListPayout = ({ payouts }: ListPayoutProps) => {
  if (!payouts || payouts.length === 0) {
    return <Text>Please add some Payouts!</Text>;
  }

  return (
    <>
      <FlatList
        data={payouts}
        renderItem={({ item }) => <Text>{item.amount}</Text>}
      />
      <Text>Some List</Text>
    </>
  );
};

export default ListPayout;

const styles = StyleSheet.create({});
