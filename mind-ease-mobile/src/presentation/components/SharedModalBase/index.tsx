import { Button, SheetModal } from "@/presentation/components";
import { FormField } from "@/presentation/components/FormField";
import { FormFieldLabel } from "@/presentation/components/FormField/compositions/FormFieldLabel";
import { TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { cn } from "@/utils/twClassnamesResolver";
import {
  ScrollView,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import { ISharedModalBase } from "./interface";

export const SharedModalBase = ({
  labels,
  children,
  saveText,
  visible,
  onCancelAction,
  onSubmitChanges,
  disabled,
  title,
  snapPoints = [45, 90],
  isLoading,
}: ISharedModalBase) => {
  const { activeProfileId, study, work } = useUserPreferencesStore();

  const { fontType } = activeProfileId === "study" ? study : work;

  const scaledSmSize = useAccessibilityScale<number>(
    TOKENS.SPACING["sm"],
    "number",
  );

  const scaledXlSize = useAccessibilityScale<number>(
    TOKENS.SPACING["xl"],
    "number",
  );

  const scaledBaseText = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE["base"],
  );

  return (
    <SheetModal
      visible={visible}
      onClose={onCancelAction}
      title={title}
      snapPoints={snapPoints}
    >
      <ScrollView>
        <FormField>
          <View className='flex-row justify-between'>
            {labels.map((label) => (
              <FormFieldLabel key={label.key}>{label.label}</FormFieldLabel>
            ))}
          </View>

          {children}
        </FormField>

        <View
          className={cn("flex-row")}
          style={{ marginTop: scaledXlSize, gap: scaledSmSize }}
        >
          <Button
            variant='default'
            onPress={onSubmitChanges}
            disabled={isLoading || disabled}
            isLoading={isLoading}
          >
            {saveText}
          </Button>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onCancelAction}
            className={cn(
              "flex-1 rounded-lg items-center justify-center bg-neutral-200",
            )}
            style={{ paddingVertical: scaledSmSize }}
          >
            <Text
              className=' text-neutral-1000'
              style={[
                { fontFamily: TOKENS.FONT_FAMILY[fontType], fontWeight: 700 },
                scaledBaseText,
              ]}
            >
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SheetModal>
  );
};

