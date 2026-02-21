import { Avatar, Dropdown, DropdownItem } from "@/presentation/components";
import { useSignOutMutation } from "@/presentation/features/Auth/queries";
import useAuthStore from "@/presentation/store/useAuthStore";
import { useRouter } from "expo-router";
import { Text } from "react-native";

export const UserSettingsDropdown = () => {
  const { mutateAsync: signOutMutateAsync } = useSignOutMutation();
  const { refreshToken, reset } = useAuthStore();
  const router = useRouter();

  const onSignOut = async () => {
    try {
      await signOutMutateAsync(refreshToken!);
      router.replace("/(auth)/login");
    } catch (error) {
      console.error(error);
    } finally {
      reset();
    }
  };

  return (
    <Dropdown
      trigger={
        <Avatar
          name='Usuário' //TODO: Substituir pelo nome do usuário
          size={32}
        />
      }
      // width={320}
      maxHeight={384}
      position='right'
      align='bottom'
    >
      <DropdownItem onPress={() => router.push("/focus")}>
        <Text>Modo foco</Text>
      </DropdownItem>
      <DropdownItem onPress={onSignOut}>
        <Text>Sair</Text>
      </DropdownItem>
    </Dropdown>
  );
};
