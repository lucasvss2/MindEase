import { Button } from "@/presentation/components/Button";
import { ActivityProfile } from "@/presentation/features/dashboard-settings/ActivityProfile";
import { ComplexityLevel } from "@/presentation/features/dashboard-settings/ComplexityLevel";
import { InterfaceAdjustments } from "@/presentation/features/dashboard-settings/InterfaceAdjustments";
import { SummaryMode } from "@/presentation/features/dashboard-settings/SumaryMode";
import { ScrollView } from "react-native";
import { cn } from "@/utils/twClassnamesResolver";

export function Settings() {
  return (
    <ScrollView
      className={cn("flex-1 gap-8 bg-neutral-50 px-8")}
    >
      <ActivityProfile />
      <InterfaceAdjustments />
      <SummaryMode />
      <ComplexityLevel />
      <Button variant='outlined' className="mb-10">Salvar preferências</Button>
    </ScrollView>
  );
}
