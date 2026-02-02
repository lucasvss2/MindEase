import React from "react";
import { View } from "react-native";
import { cn } from "@/utils/twClassnamesResolver";
import { IDropdownProps } from "./interface";
import { DROPDOWN_DEFAULTS, DROPDOWN_POSITIONS, DROPDOWN_ALIGNMENTS } from "./constants";
import { useDropdownState } from "./hooks/useDropdownState";
import { DropdownTrigger } from "./components/DropdownTrigger";
import { DropdownOverlay } from "./components/DropdownOverlay";
import { DropdownContent } from "./components/DropdownContent";
import { DropdownProvider } from "./context/DropdownContext";

/**
 * Componente Dropdown genérico e reutilizável
 *
 * Suporta modo controlado e não-controlado, posicionamento customizável,
 * e fechamento automático ao clicar fora ou em itens internos.
 *
 * Para itens que devem fechar o dropdown automaticamente, use o componente
 * `DropdownItem` dentro do conteúdo.
 *
 * @example
 * ```tsx
 * <Dropdown trigger={<Button>Menu</Button>} position="right">
 *   <DropdownItem onPress={() => console.log('Item 1')}>
 *     <Text>Item 1</Text>
 *   </DropdownItem>
 * </Dropdown>
 * ```
 */
export function Dropdown({
  trigger,
  children,
  position = DROPDOWN_POSITIONS.RIGHT,
  align = DROPDOWN_ALIGNMENTS.BOTTOM,
  width = DROPDOWN_DEFAULTS.WIDTH,
  maxHeight = DROPDOWN_DEFAULTS.MAX_HEIGHT,
  className,
  contentClassName,
  badge,
  isOpen,
  onOpenChange,
  closeOnOutsidePress = true,
  closeOnItemPress = true,
  accessibilityLabel,
}: IDropdownProps) {
  const { isOpen: isDropdownOpen, toggle, close } = useDropdownState({
    isOpen,
    onOpenChange,
  });

  return (
    <View className={cn("relative", className)}>
      <DropdownTrigger
        trigger={trigger}
        badge={badge}
        onPress={toggle}
        accessibilityLabel={accessibilityLabel}
      />

      {isDropdownOpen && (
        <>
          {closeOnOutsidePress && <DropdownOverlay onPress={close} />}
          <DropdownProvider close={close} closeOnItemPress={closeOnItemPress}>
            <DropdownContent
              position={position}
              alignment={align}
              width={width}
              maxHeight={maxHeight}
              className={contentClassName}
            >
              {children}
            </DropdownContent>
          </DropdownProvider>
        </>
      )}
    </View>
  );
}
