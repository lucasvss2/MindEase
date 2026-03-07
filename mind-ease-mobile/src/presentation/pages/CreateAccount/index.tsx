import { Button } from "@/presentation/components";
import { EmailField } from "@/presentation/components/Fields/EmailField";
import { PasswordField } from "@/presentation/components/Fields/PasswordField";
import { FormField } from "@/presentation/components/FormField";
import {
  InputField,
  InputIcon,
  InputRoot,
} from "@/presentation/components/Input";
import { useCreateAccountMutation } from "@/presentation/features/Auth/queries";
import { PublicScreenLayout } from "@/presentation/layouts/PublicScreenLayout";
import handleError from "@/utils/helpers/handleError";
import {
  createAccountSchema,
  TCreateAccount,
} from "@/utils/validations/authSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "expo-router";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Toast } from "toastify-react-native";

export const CreateAccountPage = () => {
  const router = useRouter();
  const { control, formState, handleSubmit, ...formProps } = useForm({
    resolver: yupResolver(createAccountSchema),
    mode: "all",
  });

  const { mutateAsync, isPending } = useCreateAccountMutation();

const fieldValues = formProps.watch();

  const someFieldIsInvalid =
    !!formState.errors.email ||
    !!formState.errors.password ||
    !!formState.errors.fullname ||
    !fieldValues.email ||
    !fieldValues.password ||
    !fieldValues.fullname;

  const onCreateAccount = async (data: TCreateAccount) => {
    try {
      await mutateAsync(data);
      router.replace("/(auth)/login");
    } catch (error: any) {
      handleError(error, Toast.error);
    }
  };

  return (
    <FormProvider
      control={control}
      formState={formState}
      handleSubmit={handleSubmit}
      {...formProps}
    >
      <PublicScreenLayout
        title='Criar conta'
        subTitle='Preencha seus dados pessoais'
      >
        <Controller
          name='fullname'
          control={control}
          render={({ field: { onChange, ...field }, fieldState }) => (
            <FormField
              label='Nome completo'
              variant={fieldState?.invalid ? "error" : "default"}
              message={fieldState?.error?.message}
            >
              <InputRoot isError={fieldState.invalid}>
                <InputIcon name='user' />
                <InputField
                  placeholder='Seu Nome'
                  autoCapitalize='words'
                  testID='name-field'
                  onChangeText={onChange}
                  {...field}
                />
              </InputRoot>
            </FormField>
          )}
        />

        <EmailField />

        <PasswordField />

        <Button
          disabled={someFieldIsInvalid}
          onPress={handleSubmit(onCreateAccount)}
          isLoading={isPending}
          testID='create-account'
        >
          Criar conta
        </Button>
      </PublicScreenLayout>
    </FormProvider>
  );
};

