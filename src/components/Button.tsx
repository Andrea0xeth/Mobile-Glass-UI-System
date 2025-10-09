import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { GlassView } from 'expo-glass-effect';

interface ButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'glass';
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({ 
  onPress, 
  children, 
  variant = 'primary',
  disabled = false,
  style,
  textStyle
}) => {
  const getGlassViewProps = () => {
    switch (variant) {
      case 'primary':
        return {
          glassEffectStyle: "clear" as const,
          isInteractive: !disabled,
          tintColor: "rgba(0, 122, 255, 0.8)" as const,
        };
      case 'secondary':
        return {
          glassEffectStyle: "clear" as const,
          isInteractive: !disabled,
          tintColor: "rgba(255, 255, 255, 0.2)" as const,
        };
      case 'tertiary':
        return {
          glassEffectStyle: "clear" as const,
          isInteractive: !disabled,
          tintColor: "rgba(255, 255, 255, 0.1)" as const,
        };
      case 'glass':
        return {
          glassEffectStyle: "clear" as const,
          isInteractive: !disabled,
          tintColor: "rgba(255, 255, 255, 0.1)" as const,
        };
      default:
        return {
          glassEffectStyle: "clear" as const,
          isInteractive: !disabled,
          tintColor: "rgba(0, 122, 255, 0.8)" as const,
        };
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case 'primary':
        return '#FFFFFF';
      case 'secondary':
        return '#FFFFFF';
      case 'tertiary':
        return '#FFFFFF';
      case 'glass':
        return '#FFFFFF';
      default:
        return '#FFFFFF';
    }
  };

  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.button, style]}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <GlassView
        style={StyleSheet.absoluteFillObject}
        {...getGlassViewProps()}
      />
      <Text style={[styles.text, { color: getTextColor() }, textStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
    overflow: 'hidden',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});