import { LinearGradient } from "expo-linear-gradient";
import { useColorScheme } from "@/hooks/useColorScheme";
import {Colors} from "@/constants/Colors";

const HeaderBackground = () => {
  const colorScheme = useColorScheme() ?? "light";
  
  return (
    <LinearGradient
      colors={
        Colors[colorScheme].headerBackground as [string, string, ...string[]]
      }
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    />
  );
};

export default HeaderBackground;
