import { Avatar, Dropdown, DropdownItem } from "@/presentation/components";
import { TOKENS } from "@/presentation/constants";
import { useSignOutMutation } from "@/presentation/features/Auth/queries";
import { useGetUserInfos } from "@/presentation/features/UserInfos/user-infos-queries";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useAuthStore from "@/presentation/store/useAuthStore";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { useRouter } from "expo-router";
import { Text, TextStyle } from "react-native";

export const UserSettingsDropdown = () => {
  const { mutateAsync: signOutMutateAsync } = useSignOutMutation();
  const { refreshToken, reset } = useAuthStore();
  const router = useRouter();
  const { data: userInfos } = useGetUserInfos();
  const { activeProfileId, study, work } = useUserPreferencesStore();
  const { fontType } = activeProfileId === "study" ? study : work;

  const scaledText = useAccessibilityScale<TextStyle>(TOKENS.FONT_SIZE.sm);

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
      trigger={<Avatar name={userInfos?.name} size={32} />}
      maxHeight={384}
      position='right'
      align='bottom'
    >
      <DropdownItem onPress={onSignOut}>
        <Text
          style={[{ fontFamily: TOKENS.FONT_FAMILY[fontType] }, scaledText]}
        >
          Sair
        </Text>
      </DropdownItem>
    </Dropdown>
  );
};

