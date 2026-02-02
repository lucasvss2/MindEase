import { TOKENS } from '@/presentation/constants/tokens';
import { useAccessibilityScale } from '@/presentation/hooks/useAccessibilityScale';
import { cn } from '@/utils/twClassnamesResolver';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { inputContainerVariants } from './input.variants';
import { IInputProps } from './interface';

export const Input: React.FC<IInputProps> = ({
  variant = 'default',
  leftIcon,
  rightIcon,
  onRightIconPress,
  containerClassName,
  style,
  ...props
}) => {
  const scaledPadding = useAccessibilityScale<number>(TOKENS.SPACING['2xs'], 'spacing');

  return (
    <View 
      className={cn(inputContainerVariants({ variant }), containerClassName)}
      style={{ padding: scaledPadding }}
    >
      {leftIcon && <View className="mr-2">{leftIcon}</View>}
      
      <TextInput
        className="flex-1 font-lexend-regular text-neutral-950 h-10"
        placeholderTextColor="#404040" // neutral-930 aproximado
        style={[{padding: scaledPadding}, style]}
        {...props}
      />

      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress} className="ml-2">
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};