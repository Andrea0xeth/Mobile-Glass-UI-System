import React, { useState } from 'react';
import { Switch, StyleSheet } from 'react-native';
import { GlassView } from 'expo-glass-effect';

interface GlassToggleProps {
  initialValue?: boolean;
  onValueChange?: (value: boolean) => void;
}

export const Toggle: React.FC<GlassToggleProps> = ({ 
  initialValue = true, 
  onValueChange 
}) => {
  const [isEnabled, setIsEnabled] = useState(initialValue);

  const handleValueChange = (value: boolean) => {
    setIsEnabled(value);
    onValueChange?.(value);
  };

  return (
    <GlassView style={styles.glassContainer}>
      <Switch
        value={isEnabled}
        onValueChange={handleValueChange}
        trackColor={{ 
          false: 'rgba(255,255,255,0.1)', 
          true: 'rgba(255,255,255,0.3)' 
        }}
        thumbColor={isEnabled ? '#fff' : 'rgba(255,255,255,0.5)'}
        ios_backgroundColor="rgba(255,255,255,0.1)"
      />
    </GlassView>
  );
};

const styles = StyleSheet.create({
  glassContainer: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
});
