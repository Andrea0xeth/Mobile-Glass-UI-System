import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlassView } from 'expo-glass-effect';

export const TypographySection: React.FC = () => {
  return (
    <GlassView
      style={styles.typographySection}
      glassEffectStyle="clear"
      isInteractive={true}
      tintColor="rgba(255, 255, 255, 0.1)"
    >
      <Text style={styles.sectionTitle}>📝 Typography</Text>
      
      <View style={styles.typographyExamples}>
        <Text style={styles.largeTitle}>Large Title</Text>
        <Text style={styles.title2}>Title 2</Text>
        <Text style={styles.title3}>Title 3</Text>
        <Text style={styles.callout}>Callout</Text>
        <Text style={styles.body}>Body text with regular weight</Text>
        <Text style={styles.caption}>Caption text</Text>
      </View>
    </GlassView>
  );
};

const styles = StyleSheet.create({
  typographySection: {
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
  typographyExamples: {
    gap: 12,
  },
  largeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  title2: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  title3: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  callout: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  body: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(255,255,255,0.8)',
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(255,255,255,0.6)',
  },
});
