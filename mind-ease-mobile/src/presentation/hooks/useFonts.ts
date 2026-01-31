import {
  JetBrainsMono_300Light,
  JetBrainsMono_400Regular,
  JetBrainsMono_500Medium,
  JetBrainsMono_600SemiBold,
  JetBrainsMono_700Bold,
  useFonts as useFontsJetBrainsMono,
} from "@expo-google-fonts/jetbrains-mono";

import {
  Bitter_300Light,
  Bitter_400Regular,
  Bitter_500Medium,
  Bitter_600SemiBold,
  Bitter_700Bold,
  useFonts as useFontsBitter,
} from "@expo-google-fonts/bitter";

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

export function useFonts() {
  const [lexendLoaded] = useFontsLexend({
    Lexend_300Light,
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
    Lexend_700Bold,
  });

  const [bitterLoaded] = useFontsBitter({
    Bitter_300Light,
    Bitter_400Regular,
    Bitter_500Medium,
    Bitter_600SemiBold,
    Bitter_700Bold,
  });

  const [jetBrainsMonoLoaded] = useFontsJetBrainsMono({
    JetBrainsMono_300Light,
    JetBrainsMono_400Regular,
    JetBrainsMono_500Medium,
    JetBrainsMono_600SemiBold,
    JetBrainsMono_700Bold,
  });

  const fontsLoaded = lexendLoaded && bitterLoaded && jetBrainsMonoLoaded;

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
}

