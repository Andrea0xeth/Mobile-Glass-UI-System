import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlassView } from 'expo-glass-effect';
import { Ionicons } from '@expo/vector-icons';

export const CardDemo: React.FC = () => {
  return (
    <GlassView
      style={styles.cardDemo}
      glassEffectStyle="clear"
      isInteractive={true}
      tintColor="rgba(255, 255, 255, 0.1)"
    >
      <Text style={styles.sectionTitle}>📱 Cards Demo</Text>
      <View style={styles.cardsGrid}>
        <GlassView
          style={styles.demoCard}
          glassEffectStyle="clear"
          isInteractive={true}
          tintColor="rgba(255, 255, 255, 0.1)"
        >
          <Ionicons name="star" size={24} color="#FFD700" />
          <Text style={styles.cardTitle}>Premium</Text>
          <Text style={styles.cardSubtitle}>Unlock all features</Text>
        </GlassView>
        
        <GlassView
          style={styles.demoCard}
          glassEffectStyle="clear"
          isInteractive={true}
          tintColor="rgba(255, 255, 255, 0.1)"
        >
          <Ionicons name="shield-checkmark" size={24} color="#34C759" />
          <Text style={styles.cardTitle}>Secure</Text>
          <Text style={styles.cardSubtitle}>End-to-end encryption</Text>
        </GlassView>
      </View>
    </GlassView>
  );
};

const styles = StyleSheet.create({
  cardDemo: {
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
  cardsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  demoCard: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 8,
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
  },
});
