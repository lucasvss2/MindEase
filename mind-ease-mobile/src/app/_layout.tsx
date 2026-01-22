import { Stack } from "expo-router";
import './styles/global.css'
import { useFonts } from "@/presentation/hooks/useFonts";

export default function RootLayout() {
  useFonts()
  
  return <Stack />;
}
