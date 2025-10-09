import React, { useState } from 'react';
import { Switch, StyleSheet, ViewStyle } from 'react-native';
import { GlassView } from 'expo-glass-effect';

interface ToggleProps {
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  disabled?: boolean;
  style?: ViewStyle;
}

export const Toggle: React.FC<ToggleProps> = ({ 
  value = false, 
  onValueChange,
  disabled = false,
  style
}) => {
  return (
    <GlassView style={[styles.container, style]}>
      <Switch
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        trackColor={{ 
          false: 'rgba(255,255,255,0.1)', 
          true: 'rgba(255,255,255,0.3)' 
        }}
        thumbColor={value ? '#fff' : 'rgba(255,255,255,0.5)'}
        ios_backgroundColor="rgba(255,255,255,0.1)"
      />
    </GlassView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
});