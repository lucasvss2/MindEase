import { Card } from "@/presentation/components/Card";
import { FormFieldLabel } from "@/presentation/components/FormField";
import { Switch } from "@/presentation/components/Switch";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";

export const SummaryMode = () => {
  const { enableSummaryMode, updateEnableSummaryMode } =
    useUserPreferencesStore();
  return (
    <Card className='flex-row justify-center mb-10 items-center flex-wrap'>
      <FormFieldLabel>Habilitar modo resumo</FormFieldLabel>
      <Switch
        style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
        value={enableSummaryMode}
        onValueChange={updateEnableSummaryMode}
      />
    </Card>
  );
};

