import 'react-native-reanimated';

import "@/global.css";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { StatusBar } from 'expo-status-bar';

import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false }} />
      <PortalHost />
    </ThemeProvider>
  );
}
