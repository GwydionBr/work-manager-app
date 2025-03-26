import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { supabase } from "@/utils/supabase";
import { Tables } from "@/types/db.types";

import ListPayout from "@/components/Payout/ListPayout";
import ThemedSafeAreaView from "@/components/ThemedSafeAreaView";

export default function FinancesScreen() {
  const [payouts, setPayouts] = useState<Tables<"payout">[] | null>(null);

  useEffect(() => {
    supabase
      .from("payout")
      .select("*")
      .then(({ data, error }) => {
        if (error) {
          console.error(error);
          return;
        }
        setPayouts(data);
      });
  }, []);

  return (
    <ThemedSafeAreaView>
      <ListPayout payouts={payouts} />
    </ThemedSafeAreaView>
  );
};

const styles = StyleSheet.create({});
