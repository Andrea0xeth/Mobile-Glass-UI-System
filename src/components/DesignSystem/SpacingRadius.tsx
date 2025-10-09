import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlassView } from 'expo-glass-effect';

export const SpacingRadius: React.FC = () => {
  const spacingTokens = [
    { name: 'XXS', value: 4, code: '4px' },
    { name: 'XS', value: 8, code: '8px' },
    { name: 'SM', value: 12, code: '12px' },
    { name: 'MD', value: 16, code: '16px' },
    { name: 'LG', value: 20, code: '20px' },
    { name: 'XL', value: 24, code: '24px' },
  ];

  const radiusTokens = [
    { name: 'SM', value: 8, code: '8px' },
    { name: 'MD', value: 12, code: '12px' },
    { name: 'LG', value: 16, code: '16px' },
    { name: 'XL', value: 24, code: '24px' },
    { name: 'Pill', value: 999, code: '999px' },
  ];

  return (
    <GlassView
      style={styles.spacingRadius}
      glassEffectStyle="clear"
      isInteractive={true}
      tintColor="rgba(255, 255, 255, 0.1)"
    >
      <Text style={styles.sectionTitle}>📏 Spacing & Radius</Text>
      
      <View style={styles.tokensSection}>
        <Text style={styles.subsectionTitle}>Spacing Tokens</Text>
        <View style={styles.tokensGrid}>
          {spacingTokens.map((token, index) => (
            <View key={index} style={styles.tokenItem}>
              <View style={[styles.spacingBar, { width: token.value * 2 }]} />
              <Text style={styles.tokenLabel}>{token.name}</Text>
              <Text style={styles.tokenCode}>{token.code}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.tokensSection}>
        <Text style={styles.subsectionTitle}>Radius Tokens</Text>
        <View style={styles.tokensGrid}>
          {radiusTokens.map((token, index) => (
            <View key={index} style={styles.tokenItem}>
              <View style={[styles.radiusBox, { borderRadius: token.value }]} />
              <Text style={styles.tokenLabel}>{token.name}</Text>
              <Text style={styles.tokenCode}>{token.code}</Text>
            </View>
          ))}
        </View>
      </View>
    </GlassView>
  );
};

const styles = StyleSheet.create({
  spacingRadius: {
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
  tokensSection: {
    marginBottom: 20,
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  tokensGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tokenItem: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 12,
  },
  spacingBar: {
    height: 4,
    backgroundColor: '#007AFF',
    marginBottom: 8,
  },
  radiusBox: {
    width: 40,
    height: 40,
    backgroundColor: '#007AFF',
    marginBottom: 8,
  },
  tokenLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  tokenCode: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.7)',
  },
});
