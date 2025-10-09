import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { GlassView } from 'expo-glass-effect';

interface SimpleButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'glass';
  style?: any;
}

export const Button: React.FC<SimpleButtonProps> = ({ 
  onPress, 
  children, 
  variant = 'primary',
  style 
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'glass':
        return styles.glassButton;
      case 'secondary':
        return styles.secondaryButton;
      default:
        return styles.primaryButton;
    }
  };

  // All buttons now use GlassView
  return (
    <TouchableOpacity onPress={onPress} style={[getButtonStyle(), style]}>
      <GlassView
        style={StyleSheet.absoluteFillObject}
        glassEffectStyle="clear"
        isInteractive={true}
        tintColor={variant === 'glass' ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.1)"}
      />
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    shadowOpacity: 0,
    elevation: 0,
  },
  secondaryButton: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    shadowOpacity: 0,
    elevation: 0,
  },
  glassButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    overflow: 'hidden',
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
