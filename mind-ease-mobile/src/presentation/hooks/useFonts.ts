import {
  Lexend_300Light,
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_600SemiBold,
  Lexend_700Bold,
  useFonts as useFontsLexend,
} from "@expo-google-fonts/lexend";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";

export function useFonts()  {
  const [lexendLoaded] = useFontsLexend({
      Lexend_300Light,
      Lexend_400Regular,
      Lexend_500Medium,
      Lexend_600SemiBold,
      Lexend_700Bold,
    });
  
    const fontsLoaded = lexendLoaded
  
    useEffect(() => {
      if (fontsLoaded) {
        SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);
  
    if (!fontsLoaded) {
      return null;
    }
}