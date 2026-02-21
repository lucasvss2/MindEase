import { Button } from "@/presentation/components";
import { EmailField } from "@/presentation/components/Fields/EmailField";
import { PasswordField } from "@/presentation/components/Fields/PasswordField";
import { TOKENS } from "@/presentation/constants/tokens";
import { useSignInMutation } from "@/presentation/features/Auth/queries";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import { PublicScreenLayout } from "@/presentation/layouts/PublicScreenLayout";
import useAuthStore from "@/presentation/store/useAuthStore";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import handleError from "@/utils/helpers/handleError";
import { loginSchema, TLogin } from "@/utils/validations/authSchemas";
import { FontAwesome } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "expo-router";
import { FormProvider, useForm } from "react-hook-form";
import { Text, TextStyle, View, ViewStyle } from "react-native";
import { Toast } from "toastify-react-native";

export const LoginPage = () => {
  const { fontType } = useUserPreferencesStore();
  const scaledSpacing2xl = useAccessibilityScale<number>(
    TOKENS.SPACING["2xl"],
    "number",
  );

  const scaledTextBase = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.base,
    "font",
  );
  const router = useRouter();
  const { control, formState, handleSubmit, ...formProps } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const { data: signInData, mutateAsync, isPending } = useSignInMutation();
  const { setEmail, setToken, setRefreshToken } = useAuthStore();

  const fieldValues = formProps.watch();

  const someFieldIsInvalid =
    !!formState.errors.email ||
    !!formState.errors.password ||
    !fieldValues.email ||
    !fieldValues.password;

  const onLogin = async (data: TLogin) => {
    try {
      const response = await mutateAsync(data);
      setEmail(signInData?.user.email);
      setToken(response?.accessToken);
      setRefreshToken(response?.refreshToken);

      router.replace("/(private)/tasks");
    } catch (error: any) {
      handleError(error, Toast.error);
    }
  };

  return (
    <PublicScreenLayout
      title='Bem vindo(a)'
      subTitle='Acesse sua conta Mind Ease'
      footer={
        <View
          className='flex-row items-center justify-center w-full'
          style={{ gap: scaledSpacing2xl } as ViewStyle}
        >
          <View className='flex-row items-center flex-wrap justify-center'>
            <Text
              style={[
                scaledTextBase,
                { fontFamily: fontType, fontWeight: 400 },
              ]}
            >
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
          leftIcon={<FontAwesome name='arrow-right' />}
          onPress={handleSubmit(onLogin)}
          disabled={someFieldIsInvalid}
          isLoading={isPending}
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

