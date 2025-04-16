import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { router } from "expo-router";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { supabase } from "@/utils/supabase";

import { useWorkStore } from "@/stores/workManagerStore";
import { useFinancesStore } from "@/stores/financesManagerStore";
import { useAuthStore } from "@/stores/AuthStore";
import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  fade: true,
})

export default function RootLayout() {
  const { session, isLoading, setSession, setLoading } = useAuthStore();
  const colorScheme = useColorScheme();

  const { fetchData } = useWorkStore();
  const { fetchFinanceData } = useFinancesStore();

  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session);
      await fetchData();
      await fetchFinanceData();
      setLoading(false);
    });

    supabase.auth.onAuthStateChange(async(_event, session) => {
      setSession(session);
      await fetchData();
      await fetchFinanceData();
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (fontsLoaded && !isLoading) {
      SplashScreen.hideAsync();
      if (session) {
        router.replace("/(tabs)/(work)");
      } else {
        router.replace("/auth");
      }
    }
  }, [fontsLoaded, isLoading, session]);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
