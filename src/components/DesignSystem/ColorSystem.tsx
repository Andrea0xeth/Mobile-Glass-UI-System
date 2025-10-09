import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlassView } from 'expo-glass-effect';

export const ColorSystem: React.FC = () => {
  const colors = [
    { name: 'Primary', value: '#007AFF', code: '#007AFF' },
    { name: 'Secondary', value: '#5856D6', code: '#5856D6' },
    { name: 'Accent', value: '#FF2D92', code: '#FF2D92' },
    { name: 'Success', value: '#34C759', code: '#34C759' },
    { name: 'Warning', value: '#FF9500', code: '#FF9500' },
    { name: 'Error', value: '#FF3B30', code: '#FF3B30' },
  ];

  return (
    <GlassView
      style={styles.colorSystem}
      glassEffectStyle="clear"
      isInteractive={true}
      tintColor="rgba(255, 255, 255, 0.1)"
    >
      <Text style={styles.sectionTitle}>🎨 Color System</Text>
      
      <View style={styles.colorsGrid}>
        {colors.map((color, index) => (
          <View key={index} style={styles.colorItem}>
            <View style={[styles.colorSwatch, { backgroundColor: color.value }]} />
            <Text style={styles.colorName}>{color.name}</Text>
            <Text style={styles.colorCode}>{color.code}</Text>
          </View>
        ))}
      </View>
    </GlassView>
  );
};

const styles = StyleSheet.create({
  colorSystem: {
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
  colorsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  colorItem: {
    width: '48%',
    marginBottom: 16,
  },
  colorSwatch: {
    width: '100%',
    height: 60,
    borderRadius: 8,
    marginBottom: 8,
  },
  colorName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  colorCode: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
  },
});
