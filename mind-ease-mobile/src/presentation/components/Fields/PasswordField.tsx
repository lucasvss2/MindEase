import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Pressable, TextInputProps } from "react-native";
import { FormField } from "../FormField";
import { InputField, InputIcon, InputRoot } from "../Input";

interface IPasswordField extends TextInputProps {
  controllerName?: string;
  label?: string;
}

export const PasswordField = ({
  label = 'Senha',
  controllerName = "password",
  ...props
}: IPasswordField) => {
  const [showPassword, setShowPassword] = useState(false);
  const { control } = useFormContext();

  const iconName = showPassword ? "eye" : "eye-slash";

  return (
    <Controller
      control={control}
      name={controllerName}
      render={({ field: { onChange, ...field }, fieldState }) => {
        return (
          <FormField
            label={label}
            variant={fieldState.invalid ? "error" : "default"}
            message={fieldState?.error?.message}
          >
            <InputRoot isError={fieldState.invalid}>
              <InputIcon name='lock' size={18} />

              <InputField
                secureTextEntry={!showPassword}
                onChangeText={onChange}
                {...props}
                {...field}
              />
              <Pressable onPress={() => setShowPassword((prev) => !prev)}>
                <InputIcon name={iconName} size={20} />
              </Pressable>
            </InputRoot>
          </FormField>
        );
      }}
    />
  );
};

