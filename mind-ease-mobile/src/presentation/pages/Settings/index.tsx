import { Button } from "@/presentation/components/Button";
import { ActivityProfile } from "@/presentation/features/dashboard-settings/ActivityProfile";
import { ComplexityLevel } from "@/presentation/features/dashboard-settings/ComplexityLevel";
import { InterfaceAdjustments } from "@/presentation/features/dashboard-settings/InterfaceAdjustments";
import { SummaryMode } from "@/presentation/features/dashboard-settings/SumaryMode";
import { cn } from "@/utils/twClassnamesResolver";
import { ScrollView, ViewStyle } from "react-native";
import { TOKENS } from "@/presentation/constants/tokens";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";

export function Settings() {
  const scaledSpacing2xl = useAccessibilityScale<number>(
    TOKENS.SPACING["2xl"],
    "number",
  );

  return (
    <ScrollView
      className={cn("flex-1 bg-neutral-50")}
      style={{
        gap: scaledSpacing2xl,
        paddingHorizontal: scaledSpacing2xl,
      } as ViewStyle}
    >
      <ActivityProfile />
      <InterfaceAdjustments />
      <SummaryMode />
      <ComplexityLevel />
      <Button
        variant='neutral'
        style={{ marginBottom: scaledSpacing2xl }}
      >
        Salvar preferências
      </Button>
    </ScrollView>
  );
}

