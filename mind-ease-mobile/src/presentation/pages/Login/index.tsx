import { Button } from "@/presentation/components";
import { EmailField } from "@/presentation/components/Fields/EmailField";
import { PasswordField } from "@/presentation/components/Fields/PasswordField";
import { PublicScreenLayout } from "@/presentation/layouts/PublicScreenLayout";
import { loginSchema } from "@/utils/validations/authSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "expo-router";
import { FormProvider, useForm } from "react-hook-form";
import { Text, View } from "react-native";

export const LoginPage = () => {
  const router = useRouter();
  const { control, formState, handleSubmit, ...formProps } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "all",
  });

  const fieldValues = formProps.getValues();

  const someFieldIsInvalid =
    !!formState.errors.email ||
    !!formState.errors.password ||
    !fieldValues.email ||
    !fieldValues.password;

  console.log(formProps.getValues().email);
  const onLogin = () => {};

  return (
    <PublicScreenLayout
      title='Bem vindo(a)'
      subTitle='Acesse sua conta Mind Ease'
      footer={
        <View className='gap-8'>
          <View className='flex-row items-center justify-center w-full gap-1'>
            <Text className='text-xl font-nunito-regular text-neutral-800'>
              Não tem uma conta?
            </Text>
            <Button
              size='md'
              variant='link'
              onPress={() => router.navigate("/(auth)/create-account")}
            >
              Criar conta
            </Button>
          </View>
        </View>
      }
    >
      <FormProvider
        control={control}
        formState={formState}
        handleSubmit={handleSubmit}
        {...formProps}
      >
        <EmailField />
        <PasswordField />

        <Button
          leftIcon='arrowright'
          onPress={handleSubmit(onLogin)}
          disabled={someFieldIsInvalid}
        >
          Entrar
        </Button>

        {/* <View className='flex-row items-center justify-between'>
        <BiometricSwitch />

        {!isBiometricSetted && (
          <View>
            <TouchableOpacity
              onPress={() => setShowDrawerUnconfiguredBiometrics(true)}
              className='self-end mr-2'
            >
              <FontAwesome name='info-circle' size={24} color={`#249695`} />
            </TouchableOpacity>

            <BottomSheet
              visible={showDrawerUnconfiguredBiometrics}
              setVisible={
                setShowDrawerUnconfiguredBiometrics as Dispatch<
                  SetStateAction<boolean>
                >
              }
            >
              <View className='mt-10 gap-5'>
                <Text className='font-inter-bold text-center text-2xl'>
                  Biometria não configurada.
                </Text>
                <Text className='text-xl font-inter-regular text-center'>
                  Para fazer uso do login com biometria em seu próximo acesso,
                  você precisa{" "}
                  <Text className='font-inter-bold'>
                    configurar esse recurso em seu dispositivo
                  </Text>{" "}
                  e em seguida habilitá-lo no app.
                </Text>
              </View>
            </BottomSheet>
          </View>
        )}
      </View>

      <Button text='Entrar' className='gap-2' onPress={handleSubmit(onLogin)}>
        <AntDesign name='arrowright' size={20} color={"#fff"} />
      </Button> */}

        {/* <Button
        variant='link'
        text='Esqueci minha senha'
        onPress={() => router.push("/(auth)/forgot-password")}
      /> */}
      </FormProvider>
    </PublicScreenLayout>
  );
};

