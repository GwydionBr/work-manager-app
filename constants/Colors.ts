/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: "#11181C",
    background: "#e0edc5",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    tabBarActiveBackground: "#b9cf8a",
    headerTintColor: "#11181C",
    inputBackground: "#f0f0f0",
    inputPlaceholder: "#888888",
    inputText: "#11181C",
    shadow: "#000000",
    expenseRow: "#f8d7da",
    incomeRow: "#d4edda",
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    tabBarActiveBackground: "#1A1A1A",
    headerTintColor: "#ECEDEE",
    inputBackground: "#1A1A1A",
    inputPlaceholder: "#888888",
    inputText: "#ECEDEE",
    shadow: "#ffffff",
    expenseRow: "#842029",
    incomeRow: "#0f5132",
  },
};



export const ColorGradients: Record<'light' | 'dark', Record<string, [string, string, ...string[]]>> = {
  light: {
    headerBackground: ["#c17388", "#90306f"],
  },
  dark: {
    headerBackground: ["#c17388", "#90306f"],
  },
};