import { Stack } from "expo-router";
import i18nextConfig from "@/constants/Traduction/i18";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useConfiguration } from "@/hooks/useConfiguration";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const unstable_settings = {
  initialRouteName: '(auth)',
};
i18nextConfig.initalizeI18Next();
export default function RootLayout() {
  const { colorScheme, hydratedConfiguration, colorObject } = useConfiguration();
  useEffect(() => {
    hydratedConfiguration();
  }, [hydratedConfiguration]);


  console.log(`Tema: ${colorScheme}`);

  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerShown: false,
            statusBarStyle: colorScheme === "light" ? "dark" : "light",
            statusBarBackgroundColor: colorObject.background
          }}
        >
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(iapp)" />
        </Stack>
      </ThemeProvider>

    </SafeAreaProvider>
  );
}
