import { Avatar, Dropdown, DropdownItem } from "@/presentation/components";
import { useSignOutMutation } from "@/presentation/features/Auth/queries";
import { useGetUserInfos } from "@/presentation/features/UserInfos/user-infos-queries";
import useAuthStore from "@/presentation/store/useAuthStore";
import { useRouter } from "expo-router";
import { Text } from "react-native";

export const UserSettingsDropdown = () => {
  const { mutateAsync: signOutMutateAsync } = useSignOutMutation();
  const { refreshToken, reset } = useAuthStore();
  const router = useRouter();
  const { data: userInfos } = useGetUserInfos();

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

  console.log({ userInfos });
  return (
    <Dropdown
      trigger={<Avatar name={userInfos?.name} size={32} />}
      // width={320}
      maxHeight={384}
      position='right'
      align='bottom'
    >
      <DropdownItem onPress={onSignOut}>
        <Text>Sair</Text>
      </DropdownItem>
    </Dropdown>
  );
};

