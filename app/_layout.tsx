import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { ThemeProvider, DefaultTheme } from '@react-navigation/native';
import React, { useEffect } from 'react';

import { Colors } from '@/constants';

export default function RootLayout() {
  const [fontsLoad, error] = useFonts({
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoad) SplashScreen.hideAsync();
  }, [fontsLoad, error]);

  if (!fontsLoad && !error) return null;
  //name="index" is the name of the screen (file) that will be rendered
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.primary.default,
      background: Colors.light.background,
      card: Colors.light.background,
      text: Colors.light.text,
      border: Colors.light.background,
      notification: Colors.error.default,
    },
    dark: false,
  };

  return (
    <ThemeProvider value={MyTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
