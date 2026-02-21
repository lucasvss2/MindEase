import { THEME_COLORS } from "@/presentation/constants/theme";
import { cn } from "@/utils/twClassnamesResolver";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import type { ISheetModalProps } from "./interface";
import { useSheetPanGesture } from "./useSheetPanGesture";

const DRAG_HANDLE_HEIGHT = 24;

export type { ISheetModalProps } from "./interface";

export function SheetModal({
  visible,
  onClose,
  title,
  snapPoints,
  initialSnapIndex,
  closeButtonAccessibilityLabel = "Fechar",
  children,
  titleStyle,
}: ISheetModalProps) {
  const { panHandlers, sheetHeight, translateY, sheetMaxHeight, windowHeight } =
    useSheetPanGesture({
      visible,
      onClose,
      snapPoints,
      initialSnapIndex,
    });

  const handleOverlayPress = () => {
    Keyboard.dismiss();
    onClose();
  };

  if (!visible) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
      onRequestClose={onClose}
    >
      <View className={cn("flex-1")} style={{ maxHeight: windowHeight }}>
        <TouchableWithoutFeedback onPress={handleOverlayPress}>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Animated.View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: sheetHeight,
              transform: [{ translateY }],
            }}
            className={cn("bg-neutral-0 rounded-t-2xl overflow-hidden")}
          >
            <View
              {...panHandlers}
              className={cn(
                "items-center justify-center py-2 border-b border-neutral-200",
              )}
              style={{ height: DRAG_HANDLE_HEIGHT }}
            >
              <View className={cn("w-10 h-1 rounded-full bg-neutral-300")} />
            </View>

            <View
              style={{
                paddingHorizontal: 30,
                paddingVertical: 24,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              className={cn("bg-neutral-0")}
            >
              <View style={{ width: 32 }} />
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  className='text-xl font-lexend-semi-bold text-neutral-1000'
                  style={titleStyle}
                >
                  {title}
                </Text>
              </View>

              <TouchableOpacity
                onPress={onClose}
                hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                style={{ padding: 4 }}
                accessibilityRole='button'
                accessibilityRole='button'
                accessibilityLabel={closeButtonAccessibilityLabel}
              >
                <MaterialIcons
                  name='close'
                  name='close'
                  size={24}
                  color={THEME_COLORS.neutral[1000]}
                />
              </TouchableOpacity>
            </View>

            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              className={cn("flex-1")}
              style={{
                maxHeight: sheetMaxHeight - 120,
                paddingHorizontal: 30,
                paddingTop: 24,
                paddingBottom: 30,
              }}
            >
              {children}
            </KeyboardAvoidingView>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
}

