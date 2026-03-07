import { Button } from "@/presentation/components/Button";
import { TOKENS } from "@/presentation/constants/tokens";
import { ActivityProfile } from "@/presentation/features/dashboard-settings/ActivityProfile";
import { InterfaceAdjustments } from "@/presentation/features/dashboard-settings/InterfaceAdjustments";
import { SummaryMode } from "@/presentation/features/dashboard-settings/SumaryMode";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { saveUserPreferences } from "@/utils/helpers/userPreferencesSecureStorage";
import { cn } from "@/utils/twClassnamesResolver";
import { ScrollView, ViewStyle } from "react-native";
import { Toast } from "toastify-react-native";

export function Settings() {
  const {
    activityProfile,
    animationSpeed,
    contrast,
    enableSummaryMode,
    fontSizeScale,
    fontType,
    spacingScale,
    resetPreferences
  } = useUserPreferencesStore();
  const scaledSpacing2xl = useAccessibilityScale<number>(
    TOKENS.SPACING["2xl"],
    "number",
  );

  const onSavePreferences = () => {
    saveUserPreferences(
      {
        activityProfile,
        animationSpeed,
        contrast,
        enableSummaryMode,
        fontSizeScale,
        fontType,
        spacingScale,
      },
      Toast,
    );
  };

  return (
    <ScrollView
      className={cn("flex-1 bg-neutral-50")}
      style={
        {
          gap: scaledSpacing2xl,
          paddingHorizontal: scaledSpacing2xl,
        } as ViewStyle
      }
    >
      <ActivityProfile />
      <InterfaceAdjustments />
      <SummaryMode />
      <Button
        variant='default'
        style={{ marginBottom: scaledSpacing2xl }}
        onPress={onSavePreferences}
      >
        Salvar preferências
      </Button>

      <Button
        variant='neutral'
        style={{ marginBottom: scaledSpacing2xl }}
        onPress={resetPreferences}
      >
        Resetar preferências
      </Button>
    </ScrollView>
  );
}

