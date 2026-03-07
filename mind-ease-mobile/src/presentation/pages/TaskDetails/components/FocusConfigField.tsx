import { FormField } from "@/presentation/components/FormField";
import { InputField, InputRoot } from "@/presentation/components/Input";
import { THEME_COLORS } from "@/presentation/constants";
import { cn } from "@/utils/twClassnamesResolver";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { IFocusConfigField } from "../interface";

export const FocusConfigField = ({
  isEditing,
  setIsEditing,
  label,
  value,
  setValue,
  onUpdateFocusConfig,
}: IFocusConfigField) => {
  return (
    <View className='flex-row items-center gap-4'>
      <FormField label={label}>
        <View className='flex-row items-center gap-4'>
          <InputRoot className={cn(isEditing ? "w-10/12" : "w-full")}>
            <InputField
              defaultValue={value}
              onFocus={() => setIsEditing(true)}
              onBlur={() => setIsEditing(false)}
              value={value}
              onChangeText={setValue}
            />
          </InputRoot>

          {isEditing && (
            <TouchableOpacity onPress={onUpdateFocusConfig}>
              <MaterialCommunityIcons
                name='check-circle'
                size={30}
                color={THEME_COLORS.neutral[1000]}
              />
            </TouchableOpacity>
          )}
        </View>
      </FormField>
    </View>
  );
};

