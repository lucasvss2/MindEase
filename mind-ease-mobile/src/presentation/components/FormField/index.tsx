import { TOKENS } from '@/presentation/constants/tokens';
import { useAccessibilityScale } from '@/presentation/hooks/useAccessibilityScale';
import React from 'react';
import { Text, TextStyle, View } from 'react-native';
import { messageVariants } from './form-field.variants';
import { IFormFieldProps } from './interface';



export const FormField: React.FC<IFormFieldProps> = ({ 
  label, 
  message, 
  variant = 'default',
  children, 
}) => {
  const scaledLabelSize = useAccessibilityScale<TextStyle>(TOKENS.FONT_SIZE.base);
  const scaledInputAndMessageSize = useAccessibilityScale<TextStyle>(TOKENS.FONT_SIZE.sm);
  const scaledGap = useAccessibilityScale<number>(TOKENS.SPACING['2xs'], 'spacing');

  return (
    <View style={{ gap: scaledGap }}>
      {label && (
        <Text 
          className="font-lexend-semi-bold text-neutral-950 mb-1"
          style={[scaledLabelSize]}
        >
          {label}
        </Text>
      )}

      {children}
      
      {message && (
        <Text 
          className={messageVariants({ variant })} 
          style={[scaledInputAndMessageSize]}
        >
          {message}
        </Text>
      )}
    </View>
  );
};