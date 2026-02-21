import { Button, SheetModal } from "@/presentation/components";
import { FormField } from "@/presentation/components/FormField";
import { FormFieldLabel } from "@/presentation/components/FormField/compositions/FormFieldLabel";
import { cn } from "@/utils/twClassnamesResolver";
import { Text, TouchableOpacity, View } from "react-native";
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
  return (
    <SheetModal
      visible={visible}
      onClose={onCancelAction}
      title={title}
      snapPoints={snapPoints}
    >
      <FormField>
        <View className='flex-row justify-between'>
          {labels.map((label) => (
            <FormFieldLabel key={label.key}>{label.label}</FormFieldLabel>
          ))}
        </View>

        {children}
      </FormField>

      <View className={cn("flex-row gap-3 mt-6")}>
        <Button
          variant='default'
          onPress={onSubmitChanges}
          disabled={isLoading || disabled}
          className={cn("py-3 px-5")}
          isLoading={isLoading}
        >
          {saveText}
        </Button>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onCancelAction}
          className={cn(
            "flex-1 py-3 rounded-lg items-center justify-center bg-neutral-200",
          )}
        >
          <Text className='text-base font-lexend-semi-bold text-neutral-1000'>
            Cancelar
          </Text>
        </TouchableOpacity>
      </View>
    </SheetModal>
  );
};

