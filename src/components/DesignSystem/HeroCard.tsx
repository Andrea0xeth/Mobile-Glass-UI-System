import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlassView } from 'expo-glass-effect';

export const HeroCard: React.FC = () => {
  return (
    <GlassView
      style={styles.heroCard}
      glassEffectStyle="clear"
      isInteractive={true}
      tintColor="rgba(255, 255, 255, 0.1)"
    >
      <Text style={styles.heroTitle}>🎨 Design System</Text>
      <Text style={styles.heroSubtitle}>
        Complete component library with glass effects inspired by iOS 26
      </Text>
    </GlassView>
  );
};

const styles = StyleSheet.create({
  heroCard: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    marginHorizontal: 8,
    overflow: 'hidden',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 24,
  },
});
