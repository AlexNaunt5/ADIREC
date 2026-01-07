import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: 'signin',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="signin" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="survey" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="explore" options={{ headerShown: false }} />
        <Stack.Screen name="fooddetail" options={{ headerShown: false }} />
        <Stack.Screen name="foodservicesurvey" options={{ headerShown: false }} />
        <Stack.Screen name="reviewscreen" options={{ headerShown: false }} />
        <Stack.Screen name="confirmationsurvey" options={{ headerShown: false }} />
        <Stack.Screen name="thankscreen" options={{ headerShown: false }} />
        <Stack.Screen name="opinions" options={{ headerShown: false }} />
        <Stack.Screen name="services" options={{ headerShown: false }} />
        <Stack.Screen name="servicedetail" options={{ headerShown: false }} />
        <Stack.Screen name="servicecontact" options={{ headerShown: false }} />
        <Stack.Screen name="servicecoupons" options={{ headerShown: false }} />
        <Stack.Screen name="travel" options={{ headerShown: false }} />
        <Stack.Screen name="travelexplore" options={{ headerShown: false }} />
        <Stack.Screen name="travelsummary" options={{ headerShown: false }} />
        <Stack.Screen name="activitydetail" options={{ headerShown: false }} />
        <Stack.Screen name="travelcontact" options={{ headerShown: false }} />
        <Stack.Screen name="travelsavedlists" options={{ headerShown: false }} />
        <Stack.Screen name="travelbooking" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
