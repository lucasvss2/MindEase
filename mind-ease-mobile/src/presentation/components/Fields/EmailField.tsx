import { Controller, useFormContext } from "react-hook-form";
import { FormField } from "../FormField";
import { InputField, InputIcon, InputRoot } from "../Input";

export const EmailField = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name='email'
      control={control}
      render={({ field: { onChange, ...field }, fieldState }) => (
        <FormField
          label='Email'
          variant={fieldState.invalid ? "error" : "default"}
          message={fieldState.error?.message}
        >
          <InputRoot isError={fieldState.invalid}>
            <InputIcon name='envelope-o' />
            <InputField
              placeholder='Digite seu email'
              keyboardType='email-address'
              autoCapitalize='none'
              onChangeText={onChange}
              testID='email-field'
              {...field}
            />
          </InputRoot>
        </FormField>
      )}
    />
  );
};

