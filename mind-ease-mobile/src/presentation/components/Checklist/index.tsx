import { TOKENS } from "@/presentation/constants";
import { FontAwesome } from "@expo/vector-icons";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { BlurEvent, TouchableOpacity, View } from "react-native";
import { Button } from "../Button";
import { FormField } from "../FormField";
import { InputField, InputRoot } from "../Input";

interface IChecklist {
  onFocus?: any;
  onBlur?: (e: BlurEvent) => void;
}

export const Checklist = ({ onFocus, onBlur }: IChecklist) => {
  const { control } = useFormContext();

  const {
    fields: checkListFields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "checklist",
  });

  return (
    <>
      {checkListFields?.map((field, index) => (
        <View
          key={field.id}
          className='flex-row items-center justify-between gap-2 mb-3'
        >
          <Controller
            name={`checklist.${index}.value`}
            rules={{ required: "Obrigatório" }}
            render={({ field: { onChange, value }, fieldState }) => (
              <FormField
                variant={fieldState.error ? "error" : "default"}
                className='flex-1'
              >
                <InputRoot>
                  <InputField
                    value={value}
                    onChangeText={onChange}
                    placeholder='Ex: Item'
                    onBlur={onBlur}
                    onFocus={onFocus}
                  />
                </InputRoot>
              </FormField>
            )}
          />

          <TouchableOpacity onPress={() => remove(index)} className='ml-2'>
            <FontAwesome
              name='trash'
              size={24}
              color={TOKENS.COLORS.red[500]}
            />
          </TouchableOpacity>
        </View>
      ))}
      <Button
        variant='dashed'
        onPress={() =>
          append({
            value: "",
            isConcluded: false,
          })
        }
      >
        + Adicionar mais um item
      </Button>
    </>
  );
};

