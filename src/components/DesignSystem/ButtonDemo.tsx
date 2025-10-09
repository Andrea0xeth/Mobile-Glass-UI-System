import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlassView } from 'expo-glass-effect';
import { Button } from '../Button';

export const ButtonDemo: React.FC = () => {
  return (
    <GlassView
      style={styles.buttonDemo}
      glassEffectStyle="clear"
      isInteractive={true}
      tintColor="rgba(255, 255, 255, 0.1)"
    >
      <Text style={styles.sectionTitle}>🔘 Buttons Demo</Text>
      <View style={styles.buttonGrid}>
        <Button variant="primary" onPress={() => {}}>Primary</Button>
        <Button variant="secondary" onPress={() => {}}>Secondary</Button>
        <Button variant="tertiary" onPress={() => {}}>Tertiary</Button>
        <Button variant="glass" onPress={() => {}}>Glass</Button>
      </View>
    </GlassView>
  );
};

const styles = StyleSheet.create({
  buttonDemo: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    marginHorizontal: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
