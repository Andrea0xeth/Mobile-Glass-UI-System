import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlassView } from 'expo-glass-effect';
import { Button } from '../Button';

export const ThemeSelector: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState('blue');

  const themes = [
    { key: 'blue', name: 'Ocean', color: '#007AFF' },
    { key: 'purple', name: 'Purple', color: '#5856D6' },
    { key: 'pink', name: 'Pink', color: '#FF2D92' },
    { key: 'green', name: 'Green', color: '#34C759' },
  ];

  return (
    <GlassView
      style={styles.themeSelector}
      glassEffectStyle="clear"
      isInteractive={true}
      tintColor="rgba(255, 255, 255, 0.1)"
    >
      <Text style={styles.sectionTitle}>🎨 Theme Selector</Text>
      <Text style={styles.sectionSubtitle}>Choose your preferred color theme</Text>
      
      <View style={styles.themesGrid}>
        {themes.map((theme) => (
          <Button
            key={theme.key}
            variant={selectedTheme === theme.key ? "primary" : "secondary"}
            onPress={() => setSelectedTheme(theme.key)}
            style={styles.themeButton}
          >
            <View style={styles.themeContent}>
              <View style={[styles.colorDot, { backgroundColor: theme.color }]} />
              <Text style={styles.themeName}>{theme.name}</Text>
            </View>
          </Button>
        ))}
      </View>
    </GlassView>
  );
};

const styles = StyleSheet.create({
  themeSelector: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    marginHorizontal: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 16,
  },
  themesGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  themeButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  themeContent: {
    alignItems: 'center',
  },
  colorDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginBottom: 8,
  },
  themeName: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});
