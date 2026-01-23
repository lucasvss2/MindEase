import { cn } from '@/utils/twClassnamesResolver';
import React from 'react';
import { Text, TextStyle, TouchableOpacity } from 'react-native';

import { TOKENS } from '@/presentation/constants/tokens';
import { useAccessibilityScale } from '@/presentation/hooks/useAccessibilityScale';
import { buttonVariants } from './button.variants';
import { IButtonProps } from './interface';

export const Button: React.FC<IButtonProps> = ({ 
  children, 
  variant, 
  size = 'md', 
  className,
  textClassName,
  style,
  disabled,
  ...props 
}) => {
  const scaledContainerPadding  = 
  useAccessibilityScale(TOKENS.SPACING[size as 'sm' | 'md'], 'spacing') as number
  
  const scaledFontSpacing  = 
  useAccessibilityScale(TOKENS.FONT_SIZE[size === 'md' ? 'base': 'sm']) as TextStyle
  

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled!}
      className={cn(buttonVariants({ variant, size, disabled }), className)}
      style={[{padding: scaledContainerPadding}, style]}
      {...props}
    >
      <Text  
        className={cn("text-neutral-950 bg-transparent text-center", textClassName)}
        style={[scaledFontSpacing]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};