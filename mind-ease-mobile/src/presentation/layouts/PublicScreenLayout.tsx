import { Card } from "@/presentation/components";
import { Logo } from "@/presentation/components/Logo";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextStyle,
  View,
} from "react-native";
import { TOKENS } from "../constants";
import { useAccessibilityScale } from "../hooks/useAccessibilityScale";
import useUserPreferencesStore from "../store/useUserPreferencesStore";

interface IPublicScreenLayout {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const PublicScreenLayout = ({
  title,
  subTitle,
  children,
  footer,
}: IPublicScreenLayout) => {
  const scaledTitle = useAccessibilityScale<TextStyle>(TOKENS.FONT_SIZE["2xl"]);
  const scaledSubTitle = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.base,
  );

  const { fontType } = useUserPreferencesStore();

  return (
    <KeyboardAvoidingView
      className='flex-col  w-full px-6'
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'
      >
        <View className='gap-3 justify-center w-full'>
          <View className='flex-row justify-center w-full'>
            <Logo />
          </View>

          <Text
            className='text-center font-bold text-3xl text-blue-600'
            style={[scaledTitle,{ fontFamily: fontType }]}
          >
            {title}
          </Text>
          {subTitle && (
            <Text
              className='text-center font-inter-regular text-base '
              style={[scaledSubTitle, { fontFamily: fontType }]}
            >
              {subTitle}
            </Text>
          )}
        </View>

        <Card className='my-6 gap-8 h-max'>{children}</Card>
        {footer}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

