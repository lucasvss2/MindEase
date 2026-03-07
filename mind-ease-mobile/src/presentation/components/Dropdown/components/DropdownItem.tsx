import { TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import { cn } from "@/utils/twClassnamesResolver";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useDropdownContext } from "../context/DropdownContext";

interface DropdownItemProps extends Omit<TouchableOpacityProps, "onPress"> {
  onPress?: () => void;
  className?: string;
}

export function DropdownItem({
  onPress,
  className,
  children,
  ...props
}: DropdownItemProps) {
  const { close, closeOnItemPress } = useDropdownContext();
  const scaledMdSpacingSize = useAccessibilityScale<number>(
    TOKENS.SPACING["md"],
    "number",
  );

  const handlePress = () => {
    onPress?.();
    if (closeOnItemPress) {
      close();
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={cn("border-b border-neutral-200", className)}
      style={{ padding: scaledMdSpacingSize }}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
}

