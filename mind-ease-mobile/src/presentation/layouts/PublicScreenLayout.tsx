import { Card } from "@/presentation/components";
import { Logo } from "@/presentation/components/Logo";
import { TOKENS } from "@/presentation/constants/tokens";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

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
  const { enableSummaryMode } = useUserPreferencesStore();
  const scaledTitle = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE["2xl"],
    "font",
  );
  const scaledSubTitle = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.base,
    "font",
  );

  const scaledSpacingXl = useAccessibilityScale<number>(
    TOKENS.SPACING.xl,
    "number",
  );
  const scaledSpacingSm = useAccessibilityScale<number>(
    TOKENS.SPACING.sm,
    "number",
  );
  const scaledSpacing2xl = useAccessibilityScale<number>(
    TOKENS.SPACING["2xl"],
    "number",
  );

  const { fontType } = useUserPreferencesStore();

  return (
    <KeyboardAvoidingView
      style={{
        paddingHorizontal: scaledSpacingXl,
      }}
      className='w-full'
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'
      >
        <View
          className='w-full justify-center'
          style={
            {
              gap: scaledSpacingSm,
            } as ViewStyle
          }
        >
          {!enableSummaryMode && (
            <>
              <View className='flex-row justify-center w-full'>
                <Logo />
              </View>

              <Text
                className='text-center text-blue-600'
                style={[
                  scaledTitle,
                  {
                    fontFamily: fontType,
                    fontWeight: 700,
                  },
                ]}
              >
                {title}
              </Text>
            </>
          )}

          {subTitle && (
            <Text
              className='text-center'
              style={[scaledSubTitle, { fontFamily: fontType }]}
            >
              {subTitle}
            </Text>
          )}
        </View>

        <Card
          style={{
            marginVertical: scaledSpacingXl,
            gap: scaledSpacing2xl,
          }}
        >
          {children}
        </Card>
        {footer}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

